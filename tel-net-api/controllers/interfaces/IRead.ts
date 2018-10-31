import * as express from "express";
interface IRead {
	getById: express.RequestHandler;
	getList: express.RequestHandler;
	getByFilter: express.RequestHandler;
	getListByFilter: express.RequestHandler;
}
export default IRead;
