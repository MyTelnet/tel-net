import * as express from 'express';
import fs = require('fs');
var http = require('http');
import * as mongoose from 'mongoose';
import Middleware from './middleware/MiddlewareBase';
import MongoDB from './database/MongoDatabase';
import BaseRoutes from './routes/Base';
import SeedData from './database/SeedData';

export class Server {
	private app: express.Application;

	constructor() {
		this.app = express();
		this.configure();
		this.initMongoDB();
		this.routes();
		this.startServer();
	}

	configure() {
		this.app.use(Middleware.configuration);
	}

	initMongoDB() {
		MongoDB(mongoose);
	}

	routes() {
		this.app.use(new BaseRoutes().Routes);
	}

	startServer() {
		let reportServerApp = express();
		if (SeedData.Process) console.log('Database Seeded');
		let port = parseInt(process.env.PORT, 10) || 8000;
		this.app.set('port', port);
		let server = this.app.listen(port, () => {
			console.log('Node app is running at localhost:' + port);
		});
		let jsreport = require('jsreport')({
			express: { app: reportServerApp, server: server }
		});
	}
}
