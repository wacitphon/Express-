const express = require('express')
const router = express.Router()
const authenticate = require('../middlewares/authenticate')
const repairController = require('../controllers/repair-controller')

router.get('/', authenticate, repairController.getByUser)
router.get('/all-status', authenticate, repairController.getAllStatus)
router.post('/', authenticate, repairController.createRepair)
router.put('/:id', authenticate, repairController.createRepair)
// router.delete('/:id', authenticate, todoController.deleteTodo )

module.exports = router