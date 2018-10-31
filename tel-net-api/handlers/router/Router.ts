import RouterRepository from "../../database/repository/RouterRepository";
import IRouter from "./IRouter";
import IRouterDatabaseModel from "../../database/interfaces/IRouter";
import IPropertyKeyValueList from "../../database/interfaces/IPropertyKeyValue";

class Handler implements IRouter {
	private _repository: RouterRepository;

	constructor() {
		this._repository = new RouterRepository();
	}

	findById(routerId: string, callback: (error: any, result: IRouterDatabaseModel) => void) {
		this._repository.findByPrimaryKey("routerId", routerId, callback);
	}

	findOneByProperty(propertyKey: string, propertyValue: string, callback: (error: any, result: IRouterDatabaseModel) => void) {
		this._repository.findOneByProperty(propertyKey, propertyValue, callback);
	}

	findMany(callback: (error: any, result: IRouterDatabaseModel[]) => void) {
		this._repository.findMany(callback);
	}

	findManyByProperty(propertyKey: string, propertyValue: string, callback: (error: any, result: IRouterDatabaseModel[]) => void) {
		this._repository.findManyByProperty(propertyKey, propertyValue, callback);
	}

	findManyByPropertySortable(propertyKey: string, propertyValue: string, sortAttribute: string, callback: (error: any, result: IRouterDatabaseModel[]) => any) {
		this._repository.findManyByPropertySorted(propertyKey, propertyValue, sortAttribute, callback);
	}

	findOneByPropertyList(propertyKeyValueList: IPropertyKeyValueList, callback: (error: any, result: IRouterDatabaseModel) => void) {
		this._repository.findOneByPropertyList(propertyKeyValueList, callback);
	}

	findManyByPropertyList(propertyKeyValueList: IPropertyKeyValueList, callback: (error: any, result: IRouterDatabaseModel) => void) {
		this._repository.findOneByPropertyList(propertyKeyValueList, callback);
	}

	create(item: IRouterDatabaseModel, callback: (error: any, result: any) => void) {
		this._repository.create(item, callback);
	}

	createMany(list: [IRouterDatabaseModel], callback: (error: any, result: any) => void) {
		this._repository.createMany(list, callback);
	}

	update(item: IRouterDatabaseModel, callback: (error: any, result: any) => void) {
		this._repository.findOneByProperty("routerId", item.RouterId, (err, res) => {
			if (err) callback(err, res);
			else this._repository.update(item, callback);
		});
	}

	updateMany(list: [IRouterDatabaseModel], callback: (error: any, result: any) => void) {
		throw "No logic"
	}

	delete(item: IRouterDatabaseModel, callback: (error: any, result: any) => void) {
		this._repository.delete(item, callback);
	}

	deleteMany(list: [IRouterDatabaseModel], callback: (error: any, result: any) => void) {
		this._repository.deleteMany(list, callback);
	}

	hardDeleteByProperty(propertyKey: string, item: any, callback: (error: any) => void) {
		this._repository.hardDeleteByProperty(propertyKey, item, callback);
	}
}

Object.seal(Handler);
export default Handler;
