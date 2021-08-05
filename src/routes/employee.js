const express = require('express');
const router = express.Router();
const employeeController = require('../controllers/employee.controller');

router.get('/listEmployee',employeeController.list);
router.post('/createEmployee',employeeController.save);
router.delete('/deleteEmployee/:id',employeeController.delete);
router.get('/editEmployee/:id',employeeController.edit);
router.put('/updateEmployee/:id',employeeController.update);

module.exports = router;