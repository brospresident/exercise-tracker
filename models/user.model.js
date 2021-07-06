const { addNewLog } = require('./log.model')

const users = [];

function addNewUser(user) {
    user._id = users.length;
    users.push(user);
    return user;
}

function getAllUsers() {
    return users;
}

function addExercise(id, fields) {
    users[id].date = fields.date;
    users[id].duration = fields.duration;
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