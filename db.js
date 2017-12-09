/*
 |--------------------------------------------------------------------------
 | Import the mongoose module.
 |--------------------------------------------------------------------------
 */
import mongoose from 'mongoose';

/*
 |--------------------------------------------------------------------------
 | Get Mongoose to use the global promise library.
 |--------------------------------------------------------------------------
 */
mongoose.Promise = global.Promise;

/*
 |--------------------------------------------------------------------------
 | Export default mongoose connection.
 |--------------------------------------------------------------------------
 */
export function connect() {
    return mongoose.connect(process.env.MLAB, {
        useMongoClient: true
    })
}