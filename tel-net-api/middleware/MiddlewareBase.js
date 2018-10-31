"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const MethodOverride_1 = require("./../middleware/MethodOverride");
class MiddlewaresBase {
    static get configuration() {
        var app = express();
        app.use(MethodOverride_1.default.configuration());
        return app;
    }
}
Object.seal(MiddlewaresBase);
exports.default = MiddlewaresBase;
//# sourceMappingURL=MiddlewareBase.js.map