const AppError = require('../errors/AppError')
const nilaiModel = require('../models/nilai.model')

// GET ALL
exports.getAllNilai = async () => {
  return await nilaiModel.findAll()
}

// GET BY ID
exports.getNilaiById = async (id) => {
  const nilai = await nilaiModel.findById(id)

  if (!nilai) {
    throw new AppError('NILAI_NOT_FOUND', 404)
  }

  return nilai
}

// CREATE
exports.createNilai = async (data) => {
  return await nilaiModel.create(data)
}

// UPDATE
exports.updateNilai = async (id, data) => {
  const nilai = await nilaiModel.findById(id)

  if (!nilai) {
    throw new AppError('NILAI_NOT_FOUND', 404)
  }

  return await nilaiModel.updateById(id, data)
}

// DELETE
exports.deleteNilai = async (id) => {
  const nilai = await nilaiModel.findById(id)

  if (!nilai) {
    throw new AppError('NILAI_NOT_FOUND', 404)
  }

  await nilaiModel.deleteById(id)
}

// REKAP NILAI
exports.rekapNilai = async () => {
  return await nilaiModel.rekap()
}