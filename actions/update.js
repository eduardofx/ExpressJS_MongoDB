module.exports = ( Model ) => ( req, res ) =>
  Model.update( { _id: req.params.id }, req.body )
  .then( (data) => res.json( data ) )
  .catch( ( err ) => res.status(400).json({}) )