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
    if (Object.keys(req.query).length === 0) {
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
        let from = new Date(0).getTime();
        let to = new Date().getTime();

        if (logs.from) {
            from = new Date(logs.from).getTime();
        }

        if (logs.to) {
            to = new Date(logs.to).getTime();
        }

        const userLogs = getUserLog(userId);

        let showLogs = userLogs.filter((elem) => {
            let elemDate = new Date(elem.date).getTime();
            return elemDate >= from && elemDate <= to;
        });

        if (req.query.limit) {
            showLogs = showLogs.slice(0, req.query.limit);
        }

        const sendObj = {
            _id: userId,
            username: user.username,
            count: showLogs.length,
            log: showLogs 
        }

        return res.status(200).json(sendObj); 
    }
}

module.exports = {
    httpPostExercise,
    httpGetAllUsersExercises
}