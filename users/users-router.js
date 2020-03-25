const router = require('express').Router();

const Users = require('./users-model.js');
const restricted = require('../auth/restricted-middleware.js');

router.get('/', restricted, (req, res) => {
  Users.find()
    .then(users => {
      // only if req.decodedToken.roles.includes('student')
      res.json(users);
    })
    .catch(err => {
      res.status(500).json({ message: "you shall not pass" });
    });
});


module.exports = router;
