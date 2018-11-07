import * as express from 'express';
import RouterController from '../controllers/RouterController';

var router = express.Router();
class Router {
	private routerController: RouterController;

	constructor() {
		this.routerController = new RouterController();
	}

	get Routes() {
		var controller = this.routerController;
		router.post('/ping', controller.ping);
		router.post('/connectToDevice', controller.connectToDevice);
		router.get('/getUsers', controller.getUsers);
		 router.post('/changeUserPassword', controller.changeUserPassword);
		// router.post('/addUser', controller.addUser);
		console.log('Router Routes Created!');
		return router;
	}
}

Object.seal(Router);
export default Router;
