import * as express from "express";
import * as bodyParser from "body-parser";
import * as morgan from "morgan";
import * as cors from "cors";
import MethodOverride from "./../middleware/MethodOverride";

class MiddlewaresBase {

	static get configuration() {
		var app = express();
		app.use(MethodOverride.configuration());
		return app;
	}
}
Object.seal(MiddlewaresBase);
export default MiddlewaresBase;
