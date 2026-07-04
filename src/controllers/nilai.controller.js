const nilaiService = require('../services/nilai.service')

// GET ALL
exports.getAll = async (req, res) => {
  try {
    const data = await nilaiService.getAllNilai()
    res.json(data)
  } catch (err) {
    res.status(err.statusCode || 500).json({
      message: err.message
    })
  }
}

// GET BY ID
exports.getById = async (req, res) => {
  try {
    const data = await nilaiService.getNilaiById(req.params.id)
    res.json(data)
  } catch (err) {
    res.status(err.statusCode || 500).json({
      message: err.message
    })
  }
}

// CREATE
exports.create = async (req, res) => {
  try {
    await nilaiService.createNilai(req.body)

    res.status(201).json({
      message: 'Nilai created'
    })
  } catch (err) {
    res.status(err.statusCode || 500).json({
      message: err.message
    })
  }
}

// UPDATE
exports.update = async (req, res) => {
  try {
    await nilaiService.updateNilai(req.params.id, req.body)

    res.json({
      message: 'Nilai updated'
    })
  } catch (err) {
    res.status(err.statusCode || 500).json({
      message: err.message
    })
  }
}

// DELETE
exports.delete = async (req, res) => {
  try {
    await nilaiService.deleteNilai(req.params.id)

    res.json({
      message: 'Nilai deleted'
    })
  } catch (err) {
    res.status(err.statusCode || 500).json({
      message: err.message
    })
  }
}

// REKAP
exports.rekap = async (req, res) => {
  try {
    const data = await nilaiService.getRekapNilai()
    res.json(data)
  } catch (err) {
    res.status(err.statusCode || 500).json({
      message: err.message
    })
  }
}