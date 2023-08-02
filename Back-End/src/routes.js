const express = require('express')
const router = express.Router();
const controller = require('./Controller')

router.get('/users', controller.getAll);
router.get('/users/:id', controller.getOne);
router.post('/users', controller.register);
router.put('/users/:nome', controller.update);
router.delete('/users/:id', controller.erase);

module.exports = router;