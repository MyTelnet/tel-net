var configuration = require('./../configuration.json');

export default (mongoose: any) => {
	mongoose.Promise = global.Promise;

	const gracefulExit: () => void = () => {
		mongoose.connection.close(() => {
			console.log(
				'Mongoose connection has disconnected through app termination'
			);
			process.exit(0);
		});
	};

	mongoose.connection.on('connected', (ref: any) => {
		console.log(
			`Successfully connected to ${process.env.NODE_ENV} database on startup `
		);
	});

	mongoose.connection.on('error', (err: any) => {
		console.error(
			`Failed to connect to ${process.env.NODE_ENV}  database on startup. `,
			err
		);
	});

	mongoose.connection.on('disconnected', () => {
		console.log(
			`Mongoose default connection to ${
				process.env.NODE_ENV
			} database disconnected`
		);
	});

	process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);

	mongoose
		.connect(
			configuration['ConnectionString'],
			{ useMongoClient: true }
		)
		.then(() => {})
		.catch((error: any) => {
			console.error('App starting error:', error.stack);
			process.exit(1);
		});
};
