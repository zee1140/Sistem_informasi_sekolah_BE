const siswaModel = require('../models/siswa.model')

// GET ALL
exports.getAll = async (req, res) => {
  try {
    const data = await siswaModel.findAll()
    res.json(data)
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

// GET BY ID
exports.getById = async (req, res) => {
  try {
    const data = await siswaModel.findById(req.params.id)

    if (!data) {
      return res.status(404).json({
        message: 'Siswa not found'
      })
    }

    res.json(data)
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

// CREATE
exports.create = async (req, res) => {
  try {
    await siswaModel.create(req.body)

    res.status(201).json({
      message: 'Siswa created'
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

// UPDATE
exports.update = async (req, res) => {
  try {
    const siswa = await siswaModel.findById(req.params.id)

    if (!siswa) {
      return res.status(404).json({
        message: 'Siswa not found'
      })
    }

    await siswaModel.update(req.params.id, req.body)

    res.json({
      message: 'Siswa updated'
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

// DELETE
exports.delete = async (req, res) => {
  try {
    const siswa = await siswaModel.findById(req.params.id)

    if (!siswa) {
      return res.status(404).json({
        message: 'Siswa not found'
      })
    }

    await siswaModel.delete(req.params.id)

    res.json({
      message: 'Siswa deleted'
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}