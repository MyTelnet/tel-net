"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = require("./BaseController");
const Router_1 = require("./../handlers/router/Router");
const Router_2 = require("../models/router/Router");
const ResponseObject_1 = require("../database/models/ResponseObject");
var current;
class RouterController extends BaseController_1.default {
    RouterController() {
        current = new Router_2.default();
    }
    connectToDevice(request, response) {
        var routerRequestObject = request.body.data;
        try {
            const RouterOSClient = require('routeros-client').RouterOSClient;
            const api = new RouterOSClient({
                host: routerRequestObject.host,
                user: routerRequestObject.user,
                password: routerRequestObject.password,
                keepalive: true
            });
            current = new Router_2.default();
            current.host = routerRequestObject.host;
            current.user = routerRequestObject.user;
            current.password = routerRequestObject.password;
            var responseObject = new ResponseObject_1.default();
            api
                .connect()
                .then((client) => {
                if (client) {
                    responseObject.Data = current;
                    responseObject.Message = 'Device Connected Successfully';
                    responseObject.Success = true;
                    response.status(200).send(responseObject);
                }
                else {
                    responseObject.Data = null;
                    responseObject.Message = 'Device Not Found';
                    responseObject.Success = false;
                    response.status(400).send(responseObject);
                }
            })
                .catch((err) => {
                responseObject.Data = err;
                responseObject.Message = 'An Error Occured';
                responseObject.Success = false;
                response.status(500).send(responseObject);
            });
        }
        catch (exception) {
            super.InternalServerException(response, exception);
        }
    }
    ping(request, response) {
        var routerRequestObject = request.body;
        try {
            if (current) {
                const RouterOSClient = require('routeros-client').RouterOSClient;
                const api = new RouterOSClient({
                    host: current.host,
                    user: current.user,
                    password: current.password,
                    keepalive: true
                });
                var responseObject = new ResponseObject_1.default();
                api
                    .connect()
                    .then((client) => {
                    const addressMenu = client.menu('/ping');
                    addressMenu
                        .where('address', routerRequestObject.address)
                        .get()
                        .then((result) => {
                        responseObject.Data = result;
                        responseObject.Message = 'Device Ponged Successfully';
                        responseObject.Success = true;
                        response.status(200).send(responseObject);
                    })
                        .catch((err) => {
                        responseObject.Data = err;
                        responseObject.Message = 'Cannot Ping Device';
                        responseObject.Success = true;
                        response.status(500).send(responseObject);
                    });
                })
                    .catch((err) => {
                    responseObject.Data = err;
                    responseObject.Message = 'An Error Occured';
                    responseObject.Success = false;
                    response.status(500).send(responseObject);
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
    getUsers(request, response) {
        try {
            if (current) {
                const RouterOSClient = require('routeros-client').RouterOSClient;
                const api = new RouterOSClient({
                    host: current.host,
                    user: current.user,
                    password: current.password,
                    keepalive: true
                });
                var responseObject = new ResponseObject_1.default();
                api
                    .connect()
                    .then((client) => {
                    const addressMenu = client.menu('/user print');
                    addressMenu
                        .get()
                        .then((result) => {
                        let users = [];
                        result.forEach((element) => {
                            let user = {
                                name: element.name,
                                group: element.name,
                                lastLoggedIn: element.lastLoggedIn,
                                disabled: element.disabled
                            };
                            users.push(user);
                        });
                        responseObject.Data = users;
                        responseObject.Message = 'Device Users Retrieved Successfully';
                        responseObject.Success = true;
                        response.status(200).send(responseObject);
                    })
                        .catch((err) => {
                        responseObject.Data = err;
                        responseObject.Message = 'Error Retrieving Users';
                        responseObject.Success = false;
                        response.status(500).send(responseObject);
                    });
                })
                    .catch((err) => {
                    responseObject.Data = err;
                    responseObject.Message = 'Error Retrieving Users';
                    responseObject.Success = false;
                    response.status(500).send(responseObject);
                });
            }
            else {
                responseObject.Data = null;
                responseObject.Message = 'No Active Device Available';
                responseObject.Success = false;
                response.status(500).send(responseObject);
            }
        }
        catch (exception) {
            super.InternalServerException(response, exception);
        }
    }
    changeUserPassword(request, response) {
        var routerRequestObject = request.body;
        try {
            if (current) {
                const RouterOSClient = require('routeros-client').RouterOSClient;
                const api = new RouterOSClient({
                    host: current.host,
                    user: current.user,
                    password: current.password
                });
                api
                    .connect()
                    .then((client1) => {
                    api
                        .setOptions({
                        user: routerRequestObject.user,
                        password: routerRequestObject.password
                    })
                        .close()
                        .then(() => {
                        return api.connect();
                    })
                        .then((client2) => {
                        return api.close();
                    })
                        .then(() => { })
                        .catch((err) => {
                        response.status(500).send('Error');
                    });
                })
                    .catch((err) => {
                    response.status(500).send('Error');
                });
            }
            else {
                response.status(500).send('No Active Device');
            }
        }
        catch (exception) {
            super.InternalServerException(response, exception);
        }
    }
    addUser(request, response) {
        var routerRequestObject = request.body;
        try {
            if (current) {
                const RouterOSClient = require('routeros-client').RouterOSClient;
                const api = new RouterOSClient({
                    host: current.host,
                    user: current.user,
                    password: current.password
                });
                api
                    .connect()
                    .then((client) => {
                    const menu = client.menu('/user');
                    menu
                        .add({
                        name: routerRequestObject.name,
                        group: routerRequestObject.group,
                        password: routerRequestObject.password
                    })
                        .then((users) => {
                        console.log(users);
                    })
                        .catch((err) => {
                        console.log(err);
                    });
                })
                    .catch((err) => {
                    response.status(500).send('Error');
                });
            }
        }
        catch (exception) {
            super.InternalServerException(response, exception);
        }
    }
    getPingReport(request, response) {
        try {
            var routerRequestObject = request.body;
            var handler = new Router_1.default();
            var responseObject = new ResponseObject_1.default();
            handler.findMany((error, result) => {
                if (error) {
                    responseObject.Data = error;
                    responseObject.Success = false;
                    response.status(400).send(responseObject);
                }
                else {
                    responseObject.Data = result;
                    responseObject.Success = true;
                    responseObject.Message = super.SuccessMessage();
                    response.status(200).send(responseObject);
                }
            });
        }
        catch (exception) {
            super.InternalServerException(response, exception);
        }
    }
}
exports.default = RouterController;
//# sourceMappingURL=RouterController.js.map