const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Users = require("../users/users-model");

//for endpoints beginning with /api/auth
router.post("/register", (req, res) => {
  const user = req.body;
  const hash = bcrypt.hashSync(user.password, 10);
  user.password = hash;
  Users.add(user)
    .then(saved => {
      res.status(201).json(saved);
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

router.post("login", (req, res) => {
  const { username, password } = req.body;
  Users.findBy({ username })
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const payload = {
          sub: user.indexOf,
          username: user.username,
          department: ["recearch & destroy"]
        };
        const options = {
          expiresIn: 90
        };
        const token = jwt.sign(
          payload,
          process.env.JWT_SECRET || "secret",
          options
        );
        res.json({ message: "This token will self-destruct:!BOOM!", token });
      } else {
        res.status(401).json({ message: "Unknown Credentials" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
