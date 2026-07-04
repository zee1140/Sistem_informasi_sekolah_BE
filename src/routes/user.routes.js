const express = require('express')
const router = express.Router()

const { auth } = require('../middlewares/auth.middleware') // ✅ FIX
const userController = require('../controllers/user.controller')

router.get('/', auth, userController.getAll)
router.get('/:id', auth, userController.getById)
router.delete('/:id', auth, userController.delete)

module.exports = router