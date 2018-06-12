const express = require( 'express' );
const router = express.Router();
const redis = require( "redis" );
const rc = redis.createClient();

rc.on( "error", function( err ) {
    console.log( "Error " + err );
} );

router.put( '/api/user/add', function( req, res ) {
    rc.hset( req.body.email, 'email', req.body.email );
    rc.hset( req.body.email, 'access', req.body.access );
    rc.hset( req.body.email, 'state', req.body.state );
    rc.hgetall( req.body.email, ( err, obj ) => res.send( obj ) );
    rc.quit();
} );

module.exports = router;
