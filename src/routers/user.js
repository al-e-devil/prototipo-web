const Login = require('../models/login');

exports.routes = {
    category: 'main',
    path: '/login/user',
    method: 'post',
    execution: async (req, res) => {
        const { username, password } = req.body;
        const user = await Login.findOne({ username, password });
        if (user) {
            req.session.user = user;
            res.status(200).send('Inicio de sesión exitoso');
        } else {
            res.status(401).send('Credenciales incorrectas');
        }
    },
    error: false
}