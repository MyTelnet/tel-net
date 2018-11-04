// for demo purposes i did not yet strongly type request objects coming through and just used any type.
// mongo db has not been connected yet
import * as express from 'express';
import IBaseController from './interfaces/IBase';
import BaseController from './BaseController';
import Handler from './../handlers/router/Router';
import Router from '../models/router/Router';
var current: Router;
class RouterController extends BaseController
	implements IBaseController<Handler> {
	
	RouterController() {
		current = new Router();
	}

	connectToDevice(request: express.Request, response: express.Response): void {
		var routerRequestObject: any = <any>request.body;
		try {
			const RouterOSClient = require('routeros-client').RouterOSClient;
			const api = new RouterOSClient({
				host: routerRequestObject.host,
				user: routerRequestObject.user,
				password: routerRequestObject.password,
				keepalive: true
			});
			current = new Router();
			current.host = routerRequestObject.host;
			current.user = routerRequestObject.user;
			current.password = routerRequestObject.password;
			api
				.connect()
				.then((client: any) => {
					if (client) {
						response.status(200).send('Successfully Connected To Host');
					}
				})
				.catch((err: any) => {
					response.status(500).send('Error Connecting To Host');
				});
		} catch (exception) {
			super.InternalServerException(response, exception);
		}
	}

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

	getUsers(request: express.Request, response: express.Response): void {
		try {
			if (current) {
				console.log(current);
				const RouterOSClient = require('routeros-client').RouterOSClient;
				const api = new RouterOSClient({
					host: current.host,
					user: current.user,
					password: current.password
				});
				api
					.connect()
					.then((client: any) => {
						const addressMenu = client.menu('/user print');
						addressMenu
							.get()
							.then((users: any) => {
								console.log(users);
								response.status(200).send('OK');
							})
							.catch((err: any) => {
								console.log(err);
								response.status(500).send('Error');
							});
					})
					.catch((err: any) => {
						response.status(500).send('Error');
					});
			} else {
				response.status(500).send('No Active Device Available');
			}
		} catch (exception) {
			super.InternalServerException(response, exception);
		}
	}

	changeUserPassword(request: express.Request, response: express.Response): void {
		var routerRequestObject: any = <any>request.body;
		try {
			if (current) {
				const RouterOSClient = require('routeros-client').RouterOSClient;
				const api = new RouterOSClient({
					host: current.host,
					user: current.user,
					password: current.password
				});
				api
					.connect()
					.then((client1: any) => {
						api
							.setOptions({
								user: routerRequestObject.user,
								password: routerRequestObject.newPassword
							})
							.close()
							.then(() => {
								return api.connect();
								response.status(200).send('OK');
							})
							.then((client2: any) => {
								return api.close();
							})
							.then(() => {})
							.catch((err: any) => {
								response.status(500).send('Error');
							});
					})
					.catch((err: any) => {
						response.status(500).send('Error');
					});
			} else {
				response.status(500).send('No Active Device');
			}
		} catch (exception) {
			super.InternalServerException(response, exception);
		}
	}

	addUser(request: express.Request, response: express.Response): void {
		var routerRequestObject: any = <any>request.body;
		try {
			if (current) {
				const RouterOSClient = require('routeros-client').RouterOSClient;
				const api = new RouterOSClient({
					host: current.host,
					user: current.user,
					password: current.password
				});
				api
					.connect()
					.then((client: any) => {
						const menu = client.menu('/user');
						menu
							.add({
								name: routerRequestObject.name,
								group: routerRequestObject.group,
								password: routerRequestObject.password
							})
							.then((users: any) => {
								console.log(users);
							})
							.catch((err: any) => {
								console.log(err);
							});
					})
					.catch((err: any) => {
						response.status(500).send('Error');
					});
			}
		} catch (exception) {
			super.InternalServerException(response, exception);
		}
	}

	getPingReport(request: express.Request, response: express.Response): void {
		var routerRequestObject: any = <any>request.body;
		try {
			if (current) {
				const RouterOSClient = require('routeros-client').RouterOSClient;
				const api = new RouterOSClient({
					host: current.host,
					user: current.user,
					password: current.password
				});
				api
					.connect()
					.then((client: any) => {
						const addressMenu = client.menu('/user print');
						addressMenu
							.get()
							.then((users: any) => {
								console.log(users);
								response.status(200).send('OK');
							})
							.catch((err: any) => {
								console.log(err);
								response.status(500).send('Error');
							});
					})
					.catch((err: any) => {
						response.status(500).send('Error');
					});
			} else {
				response.status(500).send('No Active Device Available');
			}
		} catch (exception) {
			super.InternalServerException(response, exception);
		}
	}
}

export default RouterController;
