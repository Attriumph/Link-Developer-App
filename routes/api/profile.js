const express = require('express');
const router = express.Router();
const Profile = require('../../models/Profile');
const auth = require('../../middleware/auth');

// @router  GET api/profile/me
// @desc    Get the profile of current user
// @access  Private
router.get('/me', auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id
    }).populate('user', ['name', 'avatar']);

    if (!profile) {
      return res.status(400).json({ msg: 'No profile for this user.' });
    }

    res.send(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
