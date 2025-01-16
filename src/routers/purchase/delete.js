const Data = require('../../models/data');

exports.routes = {
    category: 'purchase',
    path: '/purchase/:id',
    method: 'delete',
    execution: async (req, res) => {
        const { id } = req.params;
        await Data.findOneAndDelete({ purchase_id: id })
        res.status(200).send('Datos eliminados')
    },
    error: false
};