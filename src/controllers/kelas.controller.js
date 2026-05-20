const asyncHandler = require('../utils/asyncHandler')
const kelasService = require('../services/kelas.service')

// ambil semua kelas
exports.getAll = asyncHandler(async (req, res) => {
  const data = await kelasService.getAll()
  res.json(data)
})

// ambil kelas by id
exports.getById = asyncHandler(async (req, res) => {
  const data = await kelasService.getById(req.params.kode_kelas)

  if (!data) {
    return res.status(404).json({ message: 'Kelas not found' })
  }

  res.json(data)
})

// tambah kelas
exports.create = asyncHandler(async (req, res) => {
  const { kode_kelas, wali_kelas, kapasitas_siswa } = req.body

  if (!kode_kelas || !wali_kelas || !kapasitas_siswa) {
    return res.status(400).json({
      message: 'Data tidak lengkap'
    })
  }

  await kelasService.create(req.body)

  res.status(201).json({
    message: 'Kelas created'
  })
})

// update kelas
exports.update = asyncHandler(async (req, res) => {
  const { wali_kelas, kapasitas_siswa } = req.body

  if (!wali_kelas || !kapasitas_siswa) {
    return res.status(400).json({
      message: 'Data tidak lengkap'
    })
  }

  await kelasService.update(
    req.params.kode_kelas,
    req.body
  )

  res.json({
    message: 'Kelas updated'
  })
})

// hapus kelas
exports.delete = asyncHandler(async (req, res) => {
  const existing = await kelasService.getById(
    req.params.kode_kelas
  )

  if (!existing) {
    return res.status(404).json({
      message: 'Kelas not found'
    })
  }

  await kelasService.delete(req.params.kode_kelas)

  res.json({
    message: 'Kelas deleted'
  })
})