const badRequestError = require('./badRequest');
const customApiError = require('./custom-error');
const unauthenticatedError = require('./unauthenticated');

module.exports = {
    badRequestError,
    customApiError,
    unauthenticatedError
}