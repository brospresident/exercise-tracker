const { addExercise, getUser } = require('../../models/user.model');
const { getUserLog } = require('../../models/log.model');
 
function httpPostExercise(req, res) {
    const userId = +req.params._id;
    const fields = req.body; 
    if (fields.date === '') {
        fields.date = new Date().toDateString();
    }
    const newUser = addExercise(userId, fields);
    return res.status(200).json(newUser);

}

function httpGetAllUsersExercises(req, res) {
    const logs = req.query;

    const userId = +req.params._id;
    const user = getUser(userId);

    if (!logs.from || !logs.to || !logs.limit) {
        const show = {
            _id: userId,
            username: user.username,
            count: getUserLog(userId).length,
            log: getUserLog(userId)
        }
        return res.status(200).json(show);
    }
    else {
        const limit = +logs.limit;
        const from = new Date(logs.from);
        const to = new Date(logs.to);

        const showLogs = [];

        const logs = getUserLog(userId);
        for (let log of logs) {

        }
    }

    
}

module.exports = {
    httpPostExercise,
    httpGetAllUsersExercises
}