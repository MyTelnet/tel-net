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
		this.config();
		this.mongoDatabase();
		this.routes();
		this.startServer();
	}

	config() {
		this.app.use(Middleware.configuration);
	}

	mongoDatabase() {
		MongoDB(mongoose);
	}

	routes() {
		this.app.use(new BaseRoutes().Routes);
	}

	startServer() {
		var server = http.createServer(this.app).listen(8000, () => {
			console.log('Node app is running at http://localhost:8000');
		});
	}
}
