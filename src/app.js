// we reqiure the logger
const Logger = require('./services/logger_service');
// Creating a spcial logger for app.js
const logger = new Logger('app');

// Some testing
logger.info('App.js launched...');
logger.debug('Debugging....');
logger.error('An error occurred.');