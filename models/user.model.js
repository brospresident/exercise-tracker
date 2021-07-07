const { addNewLog } = require('./log.model')

const users = [];

function addNewUser(user) {
    const newUser = {
        _id: users.length.toString(),
        username: user.username
    }
    users.push(newUser);
    return newUser;
}

function getAllUsers() {
    return users;
}

function addExercise(id, fields) {
    id = Number(id);
    users[id].date = new Date(fields.date).toDateString();
    users[id].duration = +fields.duration;
    users[id].description = fields.description
    const log = {
        description: fields.description,
        date: fields.date,
        duration: fields.duration
    } 
    addNewLog(id, log);
    return users[id];
}

function getUser(id) {
    return users[id];
}


module.exports = {
    addNewUser,
    getAllUsers,
    addExercise,
    getUser
}