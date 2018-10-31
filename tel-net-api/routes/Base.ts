import * as express from 'express';
import Router from './Router';
var router = express.Router();
var app = express();
class BaseRoutes {
	get Routes() {
		app.use(
			router.get('/ping', (req, res) => {
				res.status(200).send('pong');
			})
		);
		app.use('/router', new Router().Routes);
		return app;
	}
}
export default BaseRoutes;
