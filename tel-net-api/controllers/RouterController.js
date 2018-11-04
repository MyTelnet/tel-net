"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = require("./BaseController");
class RouterController extends BaseController_1.default {
    ping(request, response) {
        var routerRequestObject = request.body;
        try {
            const RouterOSClient = require('routeros-client').RouterOSClient;
            const api = new RouterOSClient({
                host: routerRequestObject.host,
                user: routerRequestObject.user,
                password: routerRequestObject.password
            });
            api
                .connect()
                .then((client) => {
                console.log('OK');
                if (client) {
                    console.log(client);
                    response.status(200).send('OK');
                }
            })
                .catch((err) => {
                console.log(err);
                response.status(500).send('Error');
            });
        }
        catch (exception) {
            super.InternalServerException(response, exception);
        }
    }
}
exports.default = RouterController;
//# sourceMappingURL=RouterController.js.map