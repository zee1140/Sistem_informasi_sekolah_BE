const asyncHandler = require('../utils/asyncHandler')
const kelasService = require('../services/kelas.service')

exports.getAll = asyncHandler(async (req, res) => {
  const data = await kelasService.getAll()
  res.json(data)
})

exports.getById = asyncHandler(async (req, res) => {
  const data = await kelasService.getById(req.params.kode_kelas)

  if (!data) {
    return res.status(404).json({ message: 'Kelas not found' })
  }

  res.json(data)
})

exports.create = asyncHandler(async (req, res) => {
  const { kode_kelas, nama_kelas } = req.body

  if (!kode_kelas || !nama_kelas) {
    return res.status(400).json({ message: 'Data tidak lengkap' })
  }

  await kelasService.create(req.body)
  res.status(201).json({ message: 'Kelas created' })
})

exports.update = asyncHandler(async (req, res) => {
  const { nama_kelas } = req.body

  if (!nama_kelas) {
    return res.status(400).json({ message: 'nama_kelas wajib diisi' })
  }

  await kelasService.update(req.params.kode_kelas, req.body)
  res.json({ message: 'Kelas updated' })
})

exports.delete = asyncHandler(async (req, res) => {
  const existing = await kelasService.getById(req.params.kode_kelas)

  if (!existing) {
    return res.status(404).json({ message: 'Kelas not found' })
  }

  await kelasService.delete(req.params.kode_kelas)
  res.json({ message: 'Kelas deleted' })
})