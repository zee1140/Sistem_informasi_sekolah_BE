const express = require('express')
const router = express.Router()

const { auth } = require('../middlewares/auth.middleware') // ✅ BENAR
const mapelController = require('../controllers/mapel.controller') // ✅ WAJIB

router.get('/', auth, mapelController.getAll)
router.get('/:id', auth, mapelController.getById)
router.post('/', auth, mapelController.create)
router.put('/:id', auth, mapelController.update)
router.delete('/:id', auth, mapelController.remove)

module.exports = router