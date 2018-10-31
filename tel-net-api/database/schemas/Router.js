"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const mongoose = require("mongoose");
class Router {
    static get Schema() {
        var activitySchema = new mongoose_1.Schema({
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
var schema = mongoose.model("Router", Router.Schema, "Router");
console.log("Router Schema Created!");
exports.default = schema;
//# sourceMappingURL=Router.js.map