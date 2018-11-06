// for demo purposes i did not yet strongly type request objects coming through and just used any type.
// mongo db has not been connected yet
import * as express from 'express';
import IBaseController from './interfaces/IBase';
import BaseController from './BaseController';
import Handler from './../handlers/router/Router';
import Router from '../models/router/Router';
import IResponseObject from '../database/models/IResponseObject';
import ResponseObject from '../database/models/ResponseObject';
var current: Router;
class RouterController extends BaseController
	implements IBaseController<Handler> {
	RouterController() {
		current = new Router();
	}

	connectToDevice(request: express.Request, response: express.Response): void {
		var routerRequestObject: any = <any>request.body.data;
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
			var responseObject: IResponseObject<any> = new ResponseObject<any>();
			api
				.connect()
				.then((client: any) => {
					if (client) {
						responseObject.Data = current;
						responseObject.Message = 'Device Connected Successfully';
						responseObject.Success = true;
						response.status(200).send(responseObject);
					} else {
						responseObject.Data = null;
						responseObject.Message = 'Device Not Found';
						responseObject.Success = false;
						response.status(400).send(responseObject);
					}
				})
				.catch((err: any) => {
					responseObject.Data = err;
					responseObject.Message = 'An Error Occured';
					responseObject.Success = false;
					response.status(500).send(responseObject);
				});
		} catch (exception) {
			super.InternalServerException(response, exception);
		}
	}

	ping(request: express.Request, response: express.Response): void {
		var routerRequestObject: any = <any>request.body.data;
		try {
			if (current) {
				const RouterOSClient = require('routeros-client').RouterOSClient;
				const api = new RouterOSClient({
					host: current.host,
					user: current.user,
					password: current.password,
					keepalive: true
				});
				var responseObject: IResponseObject<any> = new ResponseObject<any>();
				api
					.connect()
					.then((client: any) => {
						const addressMenu = client
							.menu('/ping')
							.where('address', routerRequestObject.address)
							.then((result: any) => {
								responseObject.Data = result;
								responseObject.Message = 'Device Pongged Successfully';
								responseObject.Success = true;
								response.status(200).send(responseObject);
							})
							.catch((err: any) => {
								responseObject.Data = err;
								responseObject.Message = 'Cannot Ping Device';
								responseObject.Success = true;
								response.status(500).send(responseObject);
							});
					})
					.catch((err: any) => {
						responseObject.Data = err;
						responseObject.Message = 'An Error Occured';
						responseObject.Success = false;
						response.status(500).send(responseObject);
					});
			} else {
				response.status(500).send('No Active Device Available');
			}
		} catch (exception) {
			super.InternalServerException(response, exception);
		}
	}

	getUsers(request: express.Request, response: express.Response): void {
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

	changeUserPassword(
		request: express.Request,
		response: express.Response
	): void {
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
		try {
			var routerRequestObject: any = <any>request.body;
			var handler = new Handler();
			var responseObject: IResponseObject<any[]> = new ResponseObject<any[]>();
			handler.findMany((error, result) => {
				if (error) {
					responseObject.Data = error;
					responseObject.Success = false;
					response.status(400).send(responseObject);
				} else {
					responseObject.Data = result;
					responseObject.Success = true;
					responseObject.Message = super.SuccessMessage();
					response.status(200).send(responseObject);
				}
			});
		} catch (exception) {
			super.InternalServerException(response, exception);
		}
	}
}

export default RouterController;
