import * as methodOverride from "method-override";
import * as express from "express";
import * as cors from "cors";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";


class MethodOverride {

	static configuration(): any {
		var app = express();
		app.use(cors());
		app.use((req, res, next) => {
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
			next();
		});
		app.use(morgan('dev'));
		app.use(bodyParser.urlencoded({ extended: true,limit: '80mb' }));
		app.use(bodyParser.json({limit: '80mb'}));

		return app;
	}
}

Object.seal(MethodOverride);
export default MethodOverride;
