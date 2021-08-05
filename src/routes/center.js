const express = require('express');
const router = express.Router();
const centerController = require('../controllers/center.controller');

router.get('/listCenter',centerController.list);
router.post('/createCenter',centerController.save);
router.delete('/deleteCenter/:id',centerController.delete);
router.get('/editCenter/:id',centerController.edit);
router.put('/updateCenter/:id',centerController.update);

module.exports = router;