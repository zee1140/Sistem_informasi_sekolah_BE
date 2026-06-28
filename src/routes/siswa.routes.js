const express = require('express')
const router = express.Router()

const { auth } = require('../middlewares/auth.middleware')
const siswaController = require('../controllers/siswa.controller')

router.get('/', auth, siswaController.getAll)
router.get('/kelas/:kelas', auth, siswaController.getByKelas)
router.get('/:id', auth, siswaController.getById)
router.post('/', auth, siswaController.create)
router.put('/:id', auth, siswaController.update)
router.delete('/:id', auth, siswaController.delete)

module.exports = router