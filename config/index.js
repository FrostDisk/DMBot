// Environment Variables
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

// Logger verbosity
process.env.VERBOSITY = process.env.VERBOSITY || 'info';

// Load local development variables
if (process.env.NODE_ENV === 'dev') {
    require('./env-dev.js');
}