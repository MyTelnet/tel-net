"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
class Router {
    static get Schema() {
        var routerSchema = new mongoose_1.Schema({});
        return routerSchema;
    }
}
var schema = mongoose.model("Router", Router.Schema, "Router");
console.log("Router Schema Created!");
exports.default = schema;
//# sourceMappingURL=Router.js.map