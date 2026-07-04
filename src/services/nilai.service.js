const AppError = require('../errors/AppError')
const nilaiModel = require('../models/nilai.model')

// ambil semua nilai
exports.getAllNilai = async () => {
  return await nilaiModel.findAll()
}

// ambil nilai by id
exports.getNilaiById = async (id) => {
  const nilai = await nilaiModel.findById(id)

  if (!nilai) {
    throw new AppError('NILAI_NOT_FOUND', 404)
  }

  return nilai
}

// tambah nilai
exports.createNilai = async (data) => {
  return await nilaiModel.create(data)
}

// update nilai
exports.updateNilai = async (id, data) => {
  const nilai = await nilaiModel.findById(id)

  if (!nilai) {
    throw new AppError('NILAI_NOT_FOUND', 404)
  }

  return await nilaiModel.update(id, data)
}

// hapus nilai
exports.deleteNilai = async (id) => {
  const nilai = await nilaiModel.findById(id)

  if (!nilai) {
    throw new AppError('NILAI_NOT_FOUND', 404)
  }

  await nilaiModel.delete(id)
}

// rekap nilai
exports.getRekapNilai = async () => {
  return await nilaiModel.rekap()
}