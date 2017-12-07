/*
 |--------------------------------------------------------------------------
 | Call the packages
 |--------------------------------------------------------------------------
 */
require('dotenv').config();

/*
 |--------------------------------------------------------------------------
 | Call the packages
 |--------------------------------------------------------------------------
 */
const express    = require('express');
const bodyParser = require('body-parser');
const morgan     = require('body-parser');
const path       = require('path');
const app        = express();
const erc        = require('express-route-controller');
const rootPath   = require('app-root-path');

/*
 |--------------------------------------------------------------------------
 | Configure app to use bodyParser() and morgan
 |--------------------------------------------------------------------------
 |
 | This will let us get the data from a POST
 |
 | Morgan is a HTTP request logger middleware for node.js
 */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan("compined"));
app.use(express.static(rootPath.resolve('public')));

/*
 |--------------------------------------------------------------------------
 | Pug configuration
 |--------------------------------------------------------------------------
 */
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

/*
 |--------------------------------------------------------------------------
 | Initialize routes
 |--------------------------------------------------------------------------
 */
const routeControl = require('./routes');
erc(app, routeControl);

/*
 |--------------------------------------------------------------------------
 | Start server
 |--------------------------------------------------------------------------
 */
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
});