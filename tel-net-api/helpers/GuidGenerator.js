"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function CreateNewGuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
        var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}
exports.CreateNewGuid = CreateNewGuid;
//# sourceMappingURL=GuidGenerator.js.map