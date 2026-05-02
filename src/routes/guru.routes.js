const express = require('express')
const router = express.Router()
const guruController = require('../controllers/guru.controller')

// GET semua guru
router.get('/', guruController.getAll)

// GET by id
router.get('/:id', guruController.getById)

// POST tambah guru
router.post('/', guruController.create)

// PUT update guru
router.put('/:id', guruController.update)

// DELETE guru
router.delete('/:id', guruController.remove)

module.exports = router