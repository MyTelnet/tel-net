"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message = require("./../helpers/Message");
class BaseHandler {
    InternalServerException(exception) {
        console.log(exception);
    }
    SuccessMessage() {
        return Message.SuccessMessage;
    }
    FailedMessage() {
        return Message.FailedMessage;
    }
}
exports.default = BaseHandler;
//# sourceMappingURL=BaseHandler.js.map