const Data = require('../../models/data');

exports.routes = {
    category: 'purchase',
    path: '/purchase/:id',
    method: 'put',
    execution: async (req, res) => {
        const { id } = req.params;
        const { service, email, password, pin, expiry_days } = req.body;
        const expiry_date = new Date();
        expiry_date.setDate(expiry_date.getDate() + parseInt(expiry_days));
        await Data.findOneAndUpdate({ purchase_id: id }, {
            service,
            'details.account.email': email,
            'details.account.password': password,
            'details.account.expiry_date': expiry_date,
            'details.profile.pin': pin,
            'details.profile.email': email,
            'details.profile.expiry_date': expiry_date
        });
        res.status(200).send('Datos actualizados');
    },
    error: false
};