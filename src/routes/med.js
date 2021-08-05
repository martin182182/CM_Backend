const express = require('express');
const router = express.Router();
const medController = require('../controllers/med.controller');

router.get('/listMed',medController.list);
router.post('/createMed',medController.save);
router.delete('/deleteMed/:id',medController.delete);
router.get('/editMed/:id',medController.edit);
router.put('/updateMed/:id',medController.update);

module.exports = router;