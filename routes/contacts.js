const express = require('express');
const router = express.Router();

const contControl = require('../controllers/contacts');

router.get('/', contControl.getAll);

router.get('/:id', contControl.getSingle);

router.post('/', contControl.createContact);

router.put('/:id', contControl.updateContact);

router.delete('/:id', contControl.deleteContact);


module.exports = router;