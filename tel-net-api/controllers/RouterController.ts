import * as express from 'express';
import IBaseController from './interfaces/IBase';
import BaseController from './BaseController';
import Handler from './../handlers/router/Router';
class RouterController extends BaseController
	implements IBaseController<Handler> {
	// ping a specific router
	ping(request: express.Request, response: express.Response): void {
		var routerRequestObject: any = <any>request.body;
		try {
			const RouterOSClient = require('routeros-client').RouterOSClient;
			const api = new RouterOSClient({
				host: routerRequestObject.host,
				user: routerRequestObject.user,
				password: routerRequestObject.password
			});
			api
				.connect()
				.then((client: any) => {
					if (client) {
						response.status(200).send('OK');
					}
				})
				.catch((err: any) => {
					response.status(500).send('Error');
				});
		} catch (exception) {
			super.InternalServerException(response, exception);
		}
	}
}

export default RouterController;
