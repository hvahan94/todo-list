/*
 |--------------------------------------------------------------------------
 | Set up express route control
 |--------------------------------------------------------------------------
 */

let resolve = require('app-root-path').resolve;

module.exports = {
    controllers: resolve('controllers'),
    routes: require('./todo.routes')
};