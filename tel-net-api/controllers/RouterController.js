"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = require("./BaseController");
const Router_1 = require("../models/router/Router");
var current;
class RouterController extends BaseController_1.default {
    RouterController() {
        current = new Router_1.default();
    }
    connectToDevice(request, response) {
        var routerRequestObject = request.body;
        try {
            const RouterOSClient = require('routeros-client').RouterOSClient;
            const api = new RouterOSClient({
                host: routerRequestObject.host,
                user: routerRequestObject.user,
                password: routerRequestObject.password,
                keepalive: true
            });
            current = new Router_1.default();
            current.host = routerRequestObject.host;
            current.user = routerRequestObject.user;
            current.password = routerRequestObject.password;
            api
                .connect()
                .then((client) => {
                if (client) {
                    response.status(200).send('Successfully Connected To Host');
                }
            })
                .catch((err) => {
                response.status(500).send('Error Connecting To Host');
            });
        }
        catch (exception) {
            super.InternalServerException(response, exception);
        }
    }
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
                if (client) {
                    response.status(200).send('OK');
                }
            })
                .catch((err) => {
                response.status(500).send('Error');
            });
        }
        catch (exception) {
            super.InternalServerException(response, exception);
        }
    }
    getUsers(request, response) {
        try {
            if (current) {
                console.log(current);
                const RouterOSClient = require('routeros-client').RouterOSClient;
                const api = new RouterOSClient({
                    host: current.host,
                    user: current.user,
                    password: current.password
                });
                api
                    .connect()
                    .then((client) => {
                    const addressMenu = client.menu('/user print');
                    addressMenu
                        .get()
                        .then((users) => {
                        console.log(users);
                        response.status(200).send('OK');
                    })
                        .catch((err) => {
                        console.log(err);
                        response.status(500).send('Error');
                    });
                })
                    .catch((err) => {
                    response.status(500).send('Error');
                });
            }
            else {
                response.status(500).send('No Active Device Available');
            }
        }
        catch (exception) {
            super.InternalServerException(response, exception);
        }
    }
}
exports.default = RouterController;
//# sourceMappingURL=RouterController.js.map