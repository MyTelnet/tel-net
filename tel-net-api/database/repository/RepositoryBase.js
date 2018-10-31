"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class RepositoryBase {
    constructor(schemaModel) {
        this.model = schemaModel;
    }
    findByPrimaryKey(propertyKey, propertyValue, callback) {
        this.model.findOne({ [propertyKey]: propertyValue, ["IsDeleted"]: false }, callback);
    }
    findOneByProperty(propertyKey, propertyValue, callback) {
        this.model.findOne({ [propertyKey]: propertyValue, ["IsDeleted"]: false }, callback);
    }
    findOneByPropertyList(propertyKeyValueList, callback) {
        this.model.findOne({ propertyKeyValueList }, callback);
    }
    findMany(callback) {
        this.model.find({ ["IsDeleted"]: false }, callback);
    }
    findManyByProperty(propertyKey, propertyValue, callback) {
        this.model.find({ [propertyKey]: propertyValue, ["IsDeleted"]: false }, callback);
    }
    findManyByJsonString(JsonString, callback) {
        this.model.find(JsonString, callback);
    }
    findManyByPropertySorted(propertyKey, propertyValue, sortAttribute, callback) {
        this.model.find({ [propertyKey]: propertyValue, ["IsDeleted"]: false }, callback).sort(sortAttribute);
    }
    findManyByPropertyList(propertyKeyValueList, callback) {
        this.model.find({ propertyKeyValueList }, callback);
    }
    create(item, callback) {
        this.model.create(item, callback);
    }
    createMany(list, callback) {
        list.forEach(item => {
            this.model.create(item, callback);
        });
    }
    update(item, callback) {
        this.model.update({ _id: item._id }, item, callback);
    }
    updateMany(list, callback) {
        list.forEach(item => {
            this.model.update({ _id: item._id }, item, callback);
        });
    }
    updateManyRecursive(item, callback) {
        this.model.update({ _id: item._id }, item, { multi: true }, callback);
    }
    delete(item, callback) {
        this.model.update({ _id: item._id }, item, callback);
    }
    deleteMany(list, callback) {
        list.forEach(item => {
            this.model.update({ _id: item._id }, item, callback);
        });
    }
    hardDeleteByProperty(propertyKey, item, callback) {
        this.model.remove({ [propertyKey]: item }, callback);
    }
}
class RepositoryBaseImpl extends RepositoryBase {
}
exports.default = RepositoryBase;
//# sourceMappingURL=RepositoryBase.js.map