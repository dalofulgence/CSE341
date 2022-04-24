const express = require('express');

const contactController = require('../controller/contact.js');

const router = express.Router();

// GET /feed/posts
router.get('/', contactController.getData);
// localhost:3000/contact/
module.exports = router;