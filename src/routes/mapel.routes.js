const express = require('express')
const router = express.Router()
const mapelController = require('../controllers/mapel.controller')

router.get('/', mapelController.getAll)
router.get('/:id', mapelController.getById)
router.post('/', mapelController.create)
router.put('/:id', mapelController.update)
router.delete('/:id', mapelController.remove)

module.exports = router