import { Document, Schema, Model, model } from "mongoose";
import * as mongoose from "mongoose";
import IRouter from "../interfaces/IRouter";

class Router {
	static get Schema() {
		var activitySchema = new Schema({
			RouterId: String,
			ExerciseId: String,
			RouterName: String,
			RouterDescription: String,
			RouterTypeId: String,
			RouterTypeName: String,
			RouterTypeDescription: String,
			TenantId: String,
			IsDeleted: Boolean,
			CreatedDateTime: Date,
			LastUpdatedDateTime: Date,
			CreatedBy: String,
			LastUpdatedBy: String
		});
		return activitySchema;
	}
}
var schema = mongoose.model<IRouter>("Router", Router.Schema, "Router");
console.log("Router Schema Created!");
export default schema;
