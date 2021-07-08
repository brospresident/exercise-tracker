const { addExercise, getUser } = require('../../models/user.model');
const { getUserLog } = require('../../models/log.model');
const dates = require('../../models/date.model');
 
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
    let logs = undefined;
    if (req.query.from === undefined || req.query.to === undefined || req.query.limit === undefined) {
        logs = false;
    }
    else logs = req.query;

    const userId = +req.params._id;
    const user = getUser(userId);

    if (!logs) {
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
        let from = new Date(logs.from).getTime();
        let to = new Date(logs.to).getTime();

        const userLogs = getUserLog(userId);

        const showLogs = userLogs.filter((elem) => {
            let elemDate = new Date(elem.date).getTime();
            return elemDate >= from && elemDate <= to;
        });

        if (limit) {
            showLogs = showLogs.slice(0, limit);
        }

        return res.status(200).json(showLogs); 
    }
}

module.exports = {
    httpPostExercise,
    httpGetAllUsersExercises
}