/*
 |--------------------------------------------------------------------------
 | Import the packages
 |--------------------------------------------------------------------------
 */
import express    from 'express';
import bodyParser from 'body-parser';
import morgan     from 'morgan';
import path       from 'path';
import erc        from 'express-route-controller';
import rootPath   from 'app-root-path';
import dotdev     from 'dotenv';

const app = express();
dotdev.config();

/*
 |--------------------------------------------------------------------------
 | Import and set up default mongoose connection.
 |--------------------------------------------------------------------------
 */
import { connect } from './db';
connect()
    .then(() => {
        console.log('connected to MLAB')
    });

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
import routeControl from './routes';
erc(app, routeControl);

/*
 |--------------------------------------------------------------------------
 | Start server
 |--------------------------------------------------------------------------
 */
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
});