const mongoose = require('mongoose');

const purchaseSchema = new mongoose.Schema({
    purchase_id: { type: String, unique: true, required: true },
    type: { type: String, required: true },
    service: { type: String, required: true },
    price: { type: Number, required: true },
    status: { type: String, default: 'active' },
    date: { type: Date, default: Date.now },
    details: {
        account: {
            email: { type: String, required: function () { return this.type === 'account'; } },
            password: { type: String, required: function () { return this.type === 'account'; } },
            expiry_date: { type: Date, required: function () { return this.type === 'account'; } }
        },
        profile: {
            name: { type: String, required: function () { return this.type === 'profile'; } },
            pin: { type: String, required: function () { return this.type === 'profile'; } },
            email: { type: String, required: function () { return this.type === 'profile'; } },
            expiry_date: { type: Date, required: function () { return this.type === 'profile'; } }
        }
    }
});

const Data = mongoose.model('services', purchaseSchema);
module.exports = Data;
