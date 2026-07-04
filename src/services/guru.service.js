const AppError = require('../errors/AppError')
const guruModel = require('../models/guru.model')

// ambil semua guru
exports.getAllGuru = async () => {
  return await guruModel.findAll()
}

// ambil guru by id
exports.getGuruById = async (id) => {
  const guru = await guruModel.findById(id)

  if (!guru) {
    throw new AppError('GURU_NOT_FOUND', 404)
  }

  return guru
}

// tambah guru
exports.createGuru = async (data) => {
  return await guruModel.create(data)
}

// update guru
exports.updateGuru = async (id, data) => {
  const guru = await guruModel.findById(id)

  if (!guru) {
    throw new AppError('GURU_NOT_FOUND', 404)
  }

  return await guruModel.updateById(id, data)
}

// hapus guru
exports.deleteGuru = async (id) => {
  const guru = await guruModel.findById(id)

  if (!guru) {
    throw new AppError('GURU_NOT_FOUND', 404)
  }

  await guruModel.deleteById(id)
}