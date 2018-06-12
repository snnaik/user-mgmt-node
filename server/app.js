const express = require( 'express' );
const app = express();
const path = require( 'path' );
const cookieParser = require( 'cookie-parser' );
const logger = require( 'morgan' );

const indexRouter = require( './routes/index' );
const userAddRouter = require( './routes/user-add' );

app.use( logger( 'dev' ) );
app.use( express.json() );
app.use( express.urlencoded( { extended: false } ) );
app.use( cookieParser() );
app.use( express.static( path.join( __dirname, '../public' ) ) );
app.use( express.static( path.join( __dirname, '../dist' ) ) );

app.use( indexRouter );
app.use( userAddRouter );

module.exports = app;
