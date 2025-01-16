const Data = require('../../models/data');
const { v4: uuidv4 } = require('uuid');

exports.routes = {
    category: 'purchase',
    path: '/purchase',
    method: 'post',
    execution: async (req, res) => {
        const { type, service, price, email, password, name, pin, expiry_days } = req.body;
        const expiry_date = new Date();
        expiry_date.setDate(expiry_date.getDate() + parseInt(expiry_days));
        const newData = new Data({
            purchase_id: uuidv4(),
            type,
            service,
            price,
            status: 'active',
            date: new Date(),
            details: type === 'profile' ? {
                profile: {
                    name,
                    pin,
                    email,
                    expiry_date
                }
            } : {
                account: {
                    email,
                    password,
                    expiry_date
                }
            }
        });
        await newData.save();
        res.status(201).send('Datos agregados');
    },
    error: false
};