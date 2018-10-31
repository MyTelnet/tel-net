"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RouterRepository_1 = require("../../database/repository/RouterRepository");
class Handler {
    constructor() {
        this._repository = new RouterRepository_1.default();
    }
    findById(routerId, callback) {
        this._repository.findByPrimaryKey("routerId", routerId, callback);
    }
    findOneByProperty(propertyKey, propertyValue, callback) {
        this._repository.findOneByProperty(propertyKey, propertyValue, callback);
    }
    findMany(callback) {
        this._repository.findMany(callback);
    }
    findManyByProperty(propertyKey, propertyValue, callback) {
        this._repository.findManyByProperty(propertyKey, propertyValue, callback);
    }
    findManyByPropertySortable(propertyKey, propertyValue, sortAttribute, callback) {
        this._repository.findManyByPropertySorted(propertyKey, propertyValue, sortAttribute, callback);
    }
    findOneByPropertyList(propertyKeyValueList, callback) {
        this._repository.findOneByPropertyList(propertyKeyValueList, callback);
    }
    findManyByPropertyList(propertyKeyValueList, callback) {
        this._repository.findOneByPropertyList(propertyKeyValueList, callback);
    }
    create(item, callback) {
        this._repository.create(item, callback);
    }
    createMany(list, callback) {
        this._repository.createMany(list, callback);
    }
    update(item, callback) {
        this._repository.findOneByProperty("routerId", item.RouterId, (err, res) => {
            if (err)
                callback(err, res);
            else
                this._repository.update(item, callback);
        });
    }
    updateMany(list, callback) {
        throw "No logic";
    }
    delete(item, callback) {
        this._repository.delete(item, callback);
    }
    deleteMany(list, callback) {
        this._repository.deleteMany(list, callback);
    }
    hardDeleteByProperty(propertyKey, item, callback) {
        this._repository.hardDeleteByProperty(propertyKey, item, callback);
    }
}
Object.seal(Handler);
exports.default = Handler;
//# sourceMappingURL=Router.js.map