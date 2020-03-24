const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

//routes
//const authRouter = require
//const userRouter = require

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

//server.use('/api/auth', authRouter);
//server.use('/api/users', userRouter);

server.get("/", (req, res) => {
  res.send("we are alive!");
});

module.exports = server;
