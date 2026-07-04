const express = require('express')
const router = express.Router()

const { auth } = require('../middlewares/auth.middleware')
const guruController = require('../controllers/guru.controller')

router.get('/', auth, guruController.getAll)
router.get('/:id', auth, guruController.getById)
router.post('/', auth, guruController.create)
router.put('/:id', auth, guruController.update)
router.delete('/:id', auth, guruController.remove)

module.exports = router