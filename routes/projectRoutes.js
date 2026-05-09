const express = require('express');

const router = express.Router();

const projectController = require('../controllers/projectController');

router.get('/', projectController.listEntries);

router.get('/:id', projectController.getEntryById);

router.post('/', projectController.createEntry);

router.put('/:id', projectController.updateEntry);

router.delete('/:id', projectController.deleteEntry);

module.exports = router;