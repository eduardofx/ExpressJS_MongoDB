module.exports = ( Model ) => ( req, res, query = {} ) => {
  Model.find({ "name": { $regex: req.query.name, $options: 'i' } })
  .then( ( data ) => res.json( data ) )
  .catch( ( err ) => res.status(400).json({}) )
}