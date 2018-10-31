import * as Message from './../helpers/Message';

class BaseHandler {
	InternalServerException(exception: any) {
		console.log(exception);
	}

	SuccessMessage() {
		return Message.SuccessMessage;
	}

	FailedMessage() {
		return Message.FailedMessage;
	}
}

export default BaseHandler;
