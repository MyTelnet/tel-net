"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const RouterController_1 = require("../controllers/RouterController");
var router = express.Router();
class Router {
    constructor() {
        this.routerController = new RouterController_1.default();
    }
    get Routes() {
        var controller = this.routerController;
        router.get("/getbyid/:id", controller.getById);
        router.get("/getlist", controller.getList);
        router.post("/create", controller.create);
        console.log("Router Routes Created!");
        return router;
    }
}
Object.seal(Router);
exports.default = Router;
//# sourceMappingURL=Router.js.map