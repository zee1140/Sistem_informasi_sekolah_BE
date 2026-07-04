const express = require('express')
const router = express.Router()

const kelasController = require('../controllers/kelas.controller')
const { auth } = require('../middlewares/auth.middleware')

router.get('/', auth, kelasController.getAll)
router.get('/:kode_kelas', auth, kelasController.getById)
router.post('/', auth, kelasController.create)
router.put('/:kode_kelas', auth, kelasController.update)
router.delete('/:kode_kelas', auth, kelasController.delete)

module.exports = router