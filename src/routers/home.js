exports.routes = {
    category: 'main',
    path: '/home',
    method: 'get',
    execution: async (req, res) => {
        if (!req.session.user) {
            return res.redirect('/login');
        }
        res.status(200).render("home", { user: req.session.user });
    },
    error: false
};