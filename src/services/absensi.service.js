const AppError = require('../errors/AppError')
const absensiModel = require('../models/absensi.model')

// GET ALL
exports.getAll = async () => {
  return await absensiModel.findAll()
}

// GET BY ID
exports.getById = async (id) => {
  const data = await absensiModel.findById(id)

  if (!data) {
    throw new AppError('ABSENSI_NOT_FOUND', 404)
  }

  return data
}

// CREATE
exports.create = async (data) => {
  const {
    id,
    siswa_id,
    tanggal,
    status
  } = data

  if (!id || !siswa_id || !tanggal || !status) {
    throw new AppError('INVALID_PAYLOAD', 400)
  }

  await absensiModel.create(data)
}

// UPDATE
exports.update = async (id, data) => {
  const existing = await absensiModel.findById(id)

  if (!existing) {
    throw new AppError('ABSENSI_NOT_FOUND', 404)
  }

  await absensiModel.update(id, data)
}

// DELETE
exports.delete = async (id) => {
  const existing = await absensiModel.findById(id)

  if (!existing) {
    throw new AppError('ABSENSI_NOT_FOUND', 404)
  }

  await absensiModel.delete(id)
}