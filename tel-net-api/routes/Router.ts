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
		router.get("/getbyid/:id", controller.getById);
		router.get("/getlist", controller.getList);
		router.post("/create", controller.create);
		console.log("Router Routes Created!");
		return router;
	}
}

Object.seal(Router);
export default Router;
