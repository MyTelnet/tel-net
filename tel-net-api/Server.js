"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
var http = require('http');
const mongoose = require("mongoose");
const MiddlewareBase_1 = require("./middleware/MiddlewareBase");
const MongoDatabase_1 = require("./database/MongoDatabase");
const Base_1 = require("./routes/Base");
const SeedData_1 = require("./database/SeedData");
class Server {
    constructor() {
        this.app = express();
        this.configure();
        this.initMongoDB();
        this.routes();
        this.startServer();
    }
    configure() {
        this.app.use(MiddlewareBase_1.default.configuration);
    }
    initMongoDB() {
        MongoDatabase_1.default(mongoose);
    }
    routes() {
        this.app.use(new Base_1.default().Routes);
    }
    startServer() {
        let reportServerApp = express();
        if (SeedData_1.default.Process)
            console.log('Database Seeded');
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
exports.Server = Server;
//# sourceMappingURL=Server.js.map