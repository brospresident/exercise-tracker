const express = require('express');
const { httpPostUserData, httpGetAllUsers } = require('./users.controller');
const usersRouter = express.Router();

usersRouter.post('/', httpPostUserData);
usersRouter.get('/', httpGetAllUsers);

module.exports = usersRouter;