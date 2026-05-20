const AppError = require('../errors/AppError')
const siswaModel = require('../models/siswa.model')

// GET ALL
exports.getAll = async () => {
  return await siswaModel.findAll()
}

// GET BY ID
exports.getById = async (id) => {
  const siswa = await siswaModel.findById(id)

  if (!siswa) {
    throw new AppError('SISWA_NOT_FOUND', 404)
  }

  return siswa
}

// CREATE
exports.create = async (data) => {
  const { id, nama, nis, kode_kelas } = data

  // validasi
  if (!id || !nama || !nis || !kode_kelas) {
    throw new AppError('INVALID_PAYLOAD', 400)
  }

  // cek siswa sudah ada
  const existing = await siswaModel.findById(id)

  if (existing) {
    throw new AppError('SISWA_ALREADY_EXISTS', 400)
  }

  await siswaModel.create(data)
}

// UPDATE
exports.update = async (id, data) => {
  const siswa = await siswaModel.findById(id)

  if (!siswa) {
    throw new AppError('SISWA_NOT_FOUND', 404)
  }

  await siswaModel.update(id, data)
}

// DELETE
exports.delete = async (id) => {
  const siswa = await siswaModel.findById(id)

  if (!siswa) {
    throw new AppError('SISWA_NOT_FOUND', 404)
  }

  await siswaModel.delete(id)
}

// GET BY KELAS
exports.getByKelas = async (kodeKelas) => {
  return await siswaModel.findByKelas(kodeKelas)
}