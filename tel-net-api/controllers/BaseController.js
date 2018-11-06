"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Message = require("./../helpers/Message");
class BaseController {
    Unauthorized(response) {
        response.status(401).send('Unauthorized');
    }
    InternalServerException(response, exception) {
        console.log(exception);
        response.status(500).send('Something went Wrong');
    }
    SuccessMessage() {
        return Message.SuccessMessage;
    }
    FailedMessage() {
        return Message.FailedMessage;
    }
}
exports.default = BaseController;
//# sourceMappingURL=BaseController.js.map