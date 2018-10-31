"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
var http = require('http');
const mongoose = require("mongoose");
const MiddlewareBase_1 = require("./middleware/MiddlewareBase");
const MongoDatabase_1 = require("./database/MongoDatabase");
const Base_1 = require("./routes/Base");
class Server {
    constructor() {
        this.app = express();
        this.config();
        this.mongoDatabase();
        this.routes();
        this.startServer();
    }
    config() {
        this.app.use(MiddlewareBase_1.default.configuration);
    }
    mongoDatabase() {
        MongoDatabase_1.default(mongoose);
    }
    routes() {
        this.app.use(new Base_1.default().Routes);
    }
    startServer() {
        var server = http.createServer(this.app).listen(8000, () => {
            console.log('Node app is running at http://localhost:8000');
        });
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map