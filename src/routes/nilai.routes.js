const express = require('express')
const router = express.Router()

const { auth } = require('../middlewares/auth.middleware')
const nilaiController = require('../controllers/nilai.controller')

router.get('/', auth, nilaiController.getAll)
router.get('/rekap', auth, nilaiController.rekap)
router.post('/', auth, nilaiController.create)
router.put('/:id', auth, nilaiController.update)
router.delete('/:id', auth, nilaiController.delete)

module.exports = router