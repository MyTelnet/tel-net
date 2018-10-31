import IResponseObject from "./IResponseObject";

class ResponseObject<T> implements IResponseObject<T> {
	Success: boolean;
	Message: string;
	Data: T;

	constructor() {

	}
}

Object.seal(ResponseObject);
export default ResponseObject;
