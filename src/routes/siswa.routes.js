const express = require('express')
const router = express.Router()

const authMiddleware = require('../middlewares/auth.middleware')
const siswaController = require('../controllers/siswa.controller')

router.get('/siswa', authMiddleware, siswaController.getAll)
router.get('/detail/:id', authMiddleware, siswaController.getById)
router.post('/', authMiddleware, siswaController.create)

module.exports = router