// Load config according to environment

/**
 * ES6 modules and require can not be combined because the "export default ..."
 * statements is transpiled to "module.default = ...".
 * With require it's necessary to access the default property.
 */
const config = require('../config/' + process.env.NODE_ENV).default;

export default config;
