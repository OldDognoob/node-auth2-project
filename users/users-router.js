const router = require("express").Router();

const users = require("./users-model");
const restricted = require("../auth/restricted-middleware");

router.get("/", restricted, (req, res) => {
  users
    .find()
    .then(users => {
      res.json(users);
    })
    .catch(error => res.send(error));
});
module.exports = router;
