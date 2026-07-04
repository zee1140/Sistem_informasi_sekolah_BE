const express = require('express')
const router = express.Router()

const { auth } = require('../middlewares/auth.middleware')
const authController = require('../controllers/auth.controller')

router.post('/login', authController.login)
router.post('/logout', auth, authController.logout)

module.exports = router