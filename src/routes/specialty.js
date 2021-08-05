const express = require('express');
const router = express.Router();
const specialtyController = require('../controllers/specialty.controller');

router.get('/listSpecialty',specialtyController.list);
router.post('/createSpecialty',specialtyController.save);
router.delete('/deleteSpecialty/:id',specialtyController.delete);
router.get('/editSpecialty/:id',specialtyController.edit);
router.put('/updateSpecialty/:id',specialtyController.update);

module.exports = router;