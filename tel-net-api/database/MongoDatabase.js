"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var configuration = require('./../configuration.json');
exports.default = (mongoose) => {
    mongoose.Promise = global.Promise;
    const gracefulExit = () => {
        mongoose.connection.close(() => {
            console.log('Mongoose connection has disconnected through app termination');
            process.exit(0);
        });
    };
    mongoose.connection.on('connected', (ref) => {
        console.log(`Successfully connected to ${process.env.NODE_ENV} database on startup `);
    });
    mongoose.connection.on('error', (err) => {
        console.error(`Failed to connect to ${process.env.NODE_ENV}  database on startup. `, err);
    });
    mongoose.connection.on('disconnected', () => {
        console.log(`Mongoose default connection to ${process.env.NODE_ENV} database disconnected`);
    });
    process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);
    mongoose
        .connect(configuration['ConnectionString'])
        .then(() => { })
        .catch((error) => {
        console.error('App starting error:', error.stack);
        process.exit(1);
    });
};
//# sourceMappingURL=MongoDatabase.js.map