const logs = [];

function addNewLog(id, log) {
    if (logs[id] === undefined) logs[id] = [];
    logs[id].push(log);
    return logs[id];
}

function getUserLog(id) {
    return logs[id];
}

module.exports = {
    addNewLog,
    getUserLog
}