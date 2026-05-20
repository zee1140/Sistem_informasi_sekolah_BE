const express = require('express')
const router = express.Router()

const absensiController = require('../controllers/absensi.controller')
const { auth } = require('../middlewares/auth.middleware')

router.get('/', auth, absensiController.getAll)
router.get('/:id', auth, absensiController.getById)
router.post('/', auth, absensiController.create)
router.put('/:id', auth, absensiController.update)
router.delete('/:id', auth, absensiController.delete)

module.exports = router