const express = require('express')
const router = express.Router()

const { auth } = require('../middlewares/auth.middleware')
const siswaController = require('../controllers/siswa.controller')

router.get('/', auth, siswaController.getAll)
router.get('/detail/:id', auth, siswaController.getById)
router.post('/', auth, siswaController.create)

module.exports = router