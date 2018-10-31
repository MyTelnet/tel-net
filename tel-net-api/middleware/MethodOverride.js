"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
class MethodOverride {
    static configuration() {
        var app = express();
        app.use(cors());
        app.use((req, res, next) => {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        app.use(morgan('dev'));
        app.use(bodyParser.urlencoded({ extended: true, limit: '80mb' }));
        app.use(bodyParser.json({ limit: '80mb' }));
        return app;
    }
}
Object.seal(MethodOverride);
exports.default = MethodOverride;
//# sourceMappingURL=MethodOverride.js.map