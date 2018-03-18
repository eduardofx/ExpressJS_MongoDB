const Model = require('./../models/model')

const find = ( req, res, query = {} ) =>
  Model.find( query, (err, data) => {
    if (err) return console.log('ERRO: ', err)

    return res.json(data)
  })

const findOne = ( req, res ) => {
  const query = {
    _id: req.params.id
  }

  return Model.findOne( query, (err, data) => {
    if (err) return console.log('ERRO: ', err)

    return res.json(data)
  })
}

const create = ( req, res ) => {
  const body = req.body

  return Model.create(body, (err, data) => {
    if (err) return console.log('ERRO: ', err)

    return res.json(data)
  })
}

const update = ( req, res ) => {
  const query = {
    _id: req.params.id
  }
  const mod = req.body

  return Model.update(query, mod, (err, data) => {
    if (err) return console.log('ERRO: ', err)

    return res.json(data)
  })
}

const remove = ( req, res ) => {
  const query = {
    _id: req.params.id
  }

  return Model.remove(query, (err, data) => {
    if (err) return console.log('ERRO: ', err)

    return res.json(data)
  })
}

module.exports = {
  find,
  findOne,
  create,
  update,
  remove
}