const express = require('express');
const router = express.Router();

// @router  GET api/users
// @desc    Test router
// @access  Public
router.get('/', (req, res) => res.send('User router'));

module.exports = router;
