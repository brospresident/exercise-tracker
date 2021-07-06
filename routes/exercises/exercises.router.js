const express = require('express');

const exerciseRouter = express.Router();

const { httpPostExercise, httpGetAllUsersExercises } = require('./exercises.controller')

exerciseRouter.post('/:_id/exercises', httpPostExercise);
exerciseRouter.get('/:_id/logs', httpGetAllUsersExercises);

module.exports = exerciseRouter;