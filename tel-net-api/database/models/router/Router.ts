import IRouter from "./IRouter";
import Base from "./../Base";

export default class Router extends Base implements IRouter {
	user: string;
	host: string;
	password: string;

	constructor() {
		super();

	}
}
