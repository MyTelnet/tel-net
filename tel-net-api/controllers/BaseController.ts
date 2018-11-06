import * as express from 'express';
import * as Message from './../helpers/Message';

class BaseController {
	Unauthorized(response: express.Response) {
		response.status(401).send('Unauthorized');
	}

	InternalServerException(response: express.Response, exception: any) {
		console.log(exception);
		response.status(500).send('Something went Wrong');
	}

	SuccessMessage() {
		return Message.SuccessMessage;
	}

	FailedMessage() {
		return Message.FailedMessage;
	}
}

export default BaseController;
