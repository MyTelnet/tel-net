import { Document, Schema, Model, model } from "mongoose";
import * as mongoose from "mongoose";
import IRouter from "../interfaces/IRouter";

class Router {
	static get Schema() {
		var routerSchema = new Schema({
		});
		return routerSchema;
	}
}
var schema = mongoose.model<IRouter>("Router", Router.Schema, "Router");
console.log("Router Schema Created!");
export default schema;
