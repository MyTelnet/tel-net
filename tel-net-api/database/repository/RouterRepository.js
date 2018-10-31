"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RepositoryBase_1 = require("./RepositoryBase");
const Router_1 = require("./../schemas/Router");
class RouterRepository extends RepositoryBase_1.default {
    constructor() {
        super(Router_1.default);
    }
}
Object.seal(RouterRepository);
exports.default = RouterRepository;
//# sourceMappingURL=RouterRepository.js.map