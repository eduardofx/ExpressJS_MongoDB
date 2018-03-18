module.exports = ( Model ) => ( req, res ) =>
  Model.create( req.body )
  .then( ( data ) => res.json( data ) )
  .catch( ( err ) => res.status(400).json({}) )