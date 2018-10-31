import IRead from "./../../database/interfaces/IRead";
import IWrite from "./../../database/interfaces/IWrite";
import IPropertyKeyValueList from "./../../database/interfaces/IPropertyKeyValue";
import * as mongoose from "mongoose";

class RepositoryBase<T extends mongoose.Document> implements IRead<T>, IWrite<T> {

	private model: mongoose.Model<mongoose.Document>;

	constructor(schemaModel: mongoose.Model<mongoose.Document>) {
		this.model = schemaModel;
	}

	findByPrimaryKey(propertyKey: string, propertyValue: string, callback: (error: any, result: T) => void) {
		this.model.findOne({ [propertyKey]: propertyValue, ["IsDeleted"]: false }, callback);
	}

	findOneByProperty(propertyKey: string, propertyValue: string, callback: (error: any, result: T) => void) {
		this.model.findOne({ [propertyKey]: propertyValue, ["IsDeleted"]: false }, callback);
	}

	findOneByPropertyList(propertyKeyValueList: IPropertyKeyValueList, callback: (error: any, result: T) => void) {
		this.model.findOne({ propertyKeyValueList }, callback);
	}

	findMany(callback: (error: any, result: T[]) => void) {
		this.model.find({ ["IsDeleted"]: false }, callback);
	}

	findManyByProperty(propertyKey: string, propertyValue: string, callback: (error: any, result: T[]) => void) {
		this.model.find({ [propertyKey]: propertyValue, ["IsDeleted"]: false }, callback);
	}

	findManyByJsonString(JsonString: string, callback: (error: any, result: T[]) => void) {
		this.model.find(JsonString, callback);
	}

	findManyByPropertySorted(propertyKey: string, propertyValue: string, sortAttribute: string, callback: (error: any, result: T[]) => void) {
		this.model.find({ [propertyKey]: propertyValue, ["IsDeleted"]: false }, callback).sort(sortAttribute);
	}

	findManyByPropertyList(propertyKeyValueList: any, callback: (error: any, result: T) => void) {
		this.model.find({ propertyKeyValueList }, callback);
	}

	create(item: T, callback: (error: any, result: any, isNewRegistration: boolean) => void) {
		this.model.create(item, callback);
	}

	createMany(list: [T], callback: (error: any, result: any, isNewRegistration: boolean) => void) {
		list.forEach(item => {
			this.model.create(item, callback);
		});
	}

	update(item: T, callback: (error: any, result: any) => void) {
		this.model.update({ _id: item._id }, item, callback);
	}

	updateMany(list: [T], callback: (error: any, result: any) => void) {
		list.forEach(item => {
			this.model.update({ _id: item._id }, item, callback);
		});
	}

	updateManyRecursive(item: T, callback: (error: any, result: any) => void) {
		this.model.update({ _id: item._id }, item, { multi: true }, callback);
	}

	delete(item: T, callback: (error: any, result: any) => void) {
		this.model.update({ _id: item._id }, item, callback);
	}

	deleteMany(list: [T], callback: (error: any, result: any) => void) {
		list.forEach(item => {
			this.model.update({ _id: item._id }, item, callback);
		});
	}

	hardDeleteByProperty(propertyKey: string, item: any, callback: (error: any) => void) {
		this.model.remove({ [propertyKey]: item }, callback);
	}

}

class RepositoryBaseImpl<T extends mongoose.Document> extends RepositoryBase<T> {
}

export default RepositoryBase;
