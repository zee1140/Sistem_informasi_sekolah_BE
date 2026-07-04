const asyncHandler = require('../utils/asyncHandler')
const absensiService = require('../services/absensi.service')

// GET ALL
exports.getAll = asyncHandler(async (req, res) => {
  const data = await absensiService.getAll()
  res.json(data)
})

// GET BY ID
exports.getById = asyncHandler(async (req, res) => {
  const data = await absensiService.getById(req.params.id)
  res.json(data)
})

// CREATE
exports.create = asyncHandler(async (req, res) => {
  await absensiService.create(req.body)

  res.status(201).json({
    message: 'Absensi created'
  })
})

// UPDATE
exports.update = asyncHandler(async (req, res) => {
  await absensiService.update(req.params.id, req.body)

  res.json({
    message: 'Absensi updated'
  })
})

// DELETE
exports.delete = asyncHandler(async (req, res) => {
  await absensiService.delete(req.params.id)

  res.json({
    message: 'Absensi deleted'
  })
})

exports.rekapNilai = asyncHandler(async (req, res) => {
  const data = await absensiService.rekapNilai()
  res.json(data)
})