import * as express from "express";
import RouterController from "../controllers/RouterController";

var router = express.Router();
class Router {
	private routerController: RouterController;

	constructor() {
		this.routerController = new RouterController();
	}

	get Routes() {
		var controller = this.routerController;
		router.post("/ping", controller.ping);
		console.log("Router Routes Created!");
		return router;
	}
}

Object.seal(Router);
export default Router;
