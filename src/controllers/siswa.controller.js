const siswaModel = require('../models/siswa.model')

exports.getAll = async (req, res) => {
  try {
    const data = await siswaModel.findAll()
    res.json(data)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.getById = async (req, res) => {
  try {
    const data = await siswaModel.findById(req.params.id)

    if (!data) {
      return res.status(404).json({ message: 'Siswa not found' })
    }

    res.json(data)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

exports.create = async (req, res) => {
  try {
    await siswaModel.create(req.body)
    res.status(201).json({ message: 'Siswa created' })
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}