const { addNewUser, getAllUsers } = require('../../models/user.model')

function httpPostUserData(req, res) {
    const user = req.body;
    if (!user.username) {
        return res.status(400).json({
            error: 'Username field is empty'
        });
    } 
    return res.status(200).json(addNewUser(user));
} 

function httpGetAllUsers(req, res) {
    const users = getAllUsers();
    return res.status(200).json(users);
}

module.exports = {
    httpPostUserData,
    httpGetAllUsers
}
