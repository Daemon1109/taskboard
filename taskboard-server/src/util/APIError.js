const status = require("http-status");

class APIError extends Error {
	statusCode;
	description;
	isOperational;

	constructor(args) {
		const { statusCode, description, isOperational } = args;
		super(description);
		this.statusCode = statusCode;
		this.description = description ?? status[statusCode];
		this.isOperational =
			isOperational ?? status[`${statusCode}_CLASS`] !== "5xx";
	}
}

module.exports = APIError;
