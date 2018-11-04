"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseController_1 = require("./BaseController");
const Router_1 = require("../models/router/Router");
var current;
class RouterController extends BaseController_1.default {
    RouterController() {
        current = new Router_1.default();
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
                api
                    .connect()
                    .then((client) => {
                    const addressMenu = client
                        .menu('/ping')
                        .then((result) => {
                        response.status(200).send('Ok');
                    })
                        .catch((err) => {
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
                        password: routerRequestObject.newPassword
                    })
                        .close()
                        .then(() => {
                        return api.connect();
                        response.status(200).send('OK');
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