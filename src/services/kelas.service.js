const AppError = require('../errors/AppError')
const kelasModel = require('../models/kelas.model')

// ambil semua kelas
exports.getAll = async () => {
  return await kelasModel.findAll()
}

// ambil kelas by id
exports.getById = async (kode_kelas) => {
  const kelas = await kelasModel.findById(kode_kelas)

  if (!kelas) {
    throw new AppError('KELAS_NOT_FOUND', 404)
  }

  return kelas
}

// tambah kelas
exports.create = async (data) => {
  const {
    kode_kelas,
    wali_kelas,
    kapasitas_siswa
  } = data

  // validasi
  if (
    !kode_kelas ||
    !wali_kelas ||
    !kapasitas_siswa
  ) {
    throw new AppError('INVALID_PAYLOAD', 400)
  }

  // cek kelas sudah ada
  const existing = await kelasModel.findById(kode_kelas)

  if (existing) {
    throw new AppError('KELAS_ALREADY_EXISTS', 400)
  }

  await kelasModel.create(data)
}

// update kelas
exports.update = async (kode_kelas, data) => {
  const kelas = await kelasModel.findById(kode_kelas)

  if (!kelas) {
    throw new AppError('KELAS_NOT_FOUND', 404)
  }

  await kelasModel.update(kode_kelas, data)
}

// hapus kelas
exports.delete = async (kode_kelas) => {
  const kelas = await kelasModel.findById(kode_kelas)

  if (!kelas) {
    throw new AppError('KELAS_NOT_FOUND', 404)
  }

  await kelasModel.softDelete(kode_kelas)
}