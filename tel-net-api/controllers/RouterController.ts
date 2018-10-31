import * as express from 'express';
import * as lodash from 'lodash';
import IBaseController from './interfaces/IBase';
import UtcDateTime = require('../helpers/UtcDateTime');
import Guid = require('../helpers/GuidGenerator');
import BaseController from './BaseController';
import IResponseObject from '../models/IResponseObject';
import ResponseObject from '../models/ResponseObject';
import Handler from './../handlers/router/Router';
import IRouter from '../models/router/IRouter';
import Router from '../models/router/Router';
class RouterController extends BaseController
	implements IBaseController<Handler> {
	getById: express.RequestHandler;
	getList: express.RequestHandler;
	getByFilter: express.RequestHandler;
	getListByFilter: express.RequestHandler;
	create: express.RequestHandler;
	update: express.RequestHandler;
	delete: express.RequestHandler;
}

export default RouterController;
