import * as express from 'express';
import * as lodash from 'lodash';
import IBaseController from './interfaces/IBase';
import UtcDateTime = require('../helpers/UtcDateTime');
import Guid = require('../helpers/GuidGenerator');
import BaseController from './BaseController';
import IResponseObject from '../models/IResponseObject';
import ResponseObject from '../models/ResponseObject';
import Handler from './../handlers/router/Router';
class RouterController extends BaseController
	implements IBaseController<Handler> {
	ping(request: express.Request, response: express.Response): void {
		try {
			response.status(200).send('pong');
		} catch (exception) {
			super.InternalServerException(response, exception);
		}
	}
	getById: express.RequestHandler;
	getList: express.RequestHandler;
	getByFilter: express.RequestHandler;
	getListByFilter: express.RequestHandler;
	create: express.RequestHandler;
	update: express.RequestHandler;
	delete: express.RequestHandler;
}

export default RouterController;
