const AppError = require('../errors/AppError')
const mapelModel = require('../models/mapel.model')

// ambil semua mapel
exports.getAllMapel = async () => {
  return await mapelModel.findAll()
}

// ambil mapel by id
exports.getMapelById = async (id) => {
  const mapel = await mapelModel.findById(id)

  if (!mapel) {
    throw new AppError('MAPEL_NOT_FOUND', 404)
  }

  return mapel
}

// tambah mapel
exports.createMapel = async (data) => {
  return await mapelModel.create(data)
}

// update mapel
exports.updateMapel = async (id, data) => {
  const mapel = await mapelModel.findById(id)

  if (!mapel) {
    throw new AppError('MAPEL_NOT_FOUND', 404)
  }

  return await mapelModel.updateById(id, data)
}

// hapus mapel
exports.deleteMapel = async (id) => {
  const mapel = await mapelModel.findById(id)

  if (!mapel) {
    throw new AppError('MAPEL_NOT_FOUND', 404)
  }

  await mapelModel.deleteById(id)
}