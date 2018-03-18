module.exports = ( Model ) => ( req, res ) => {
  const query = {
    _id: req.params.id
  }
  return Model.findOne( query, (err, data) => {
    if (err) return res.status(400).json({})
    return res.json(data)
  })
}