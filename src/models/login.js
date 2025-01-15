const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    username: { type: String, required: true },
    password: { type: String, required: true },
    user: { type: String }
});

const Login = mongoose.model('logins', loginSchema)

module.exports = Login
