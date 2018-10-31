"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const Router_1 = require("./Router");
var router = express.Router();
var app = express();
class BaseRoutes {
    get Routes() {
        app.use(router.get('/ping', (req, res) => {
            res.status(200).send('pong');
        }));
        app.use('/router', new Router_1.default().Routes);
        return app;
    }
}
exports.default = BaseRoutes;
//# sourceMappingURL=Base.js.map