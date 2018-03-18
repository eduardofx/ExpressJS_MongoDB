module.exports = ( Model ) => ( req, res ) =>
  Model.remove( { _id: req.params.id } )
  .then( ( data ) => res.json( data ) )
  .catch( ( err ) => res.status(400).json({}) )