const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
    street: { type: String, required: true },
    unit: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    postal_code: { type: String, required: true },
    country: { type: String, required: true },
})


const userSchema = new mongoose.Schema({
    //  Personal
    employeeNumber: { type: Number, required: true, unique: true }, // Start from 500000
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },

    //  Contact
    email: { type: String, required: true },
    company_email: { type: String, required: true },
    phoneNumbers: { type: [{ type: String }], required: true },
    addresses: { type: [addressSchema], required: true },

    //  Security
    password_hash: { type: String, required: true },
    two_factor_enabled: { type: Boolean, default: false },
    failed_login_attempts: { type: Number, default: 0 },
    password_reset_token: { type: String, default: null },
    password_reset_expiry: { type: Date, default: null },
    role: { type: String, required: true },
    permissions: {
        type: [String], required: true
    },

    //  Misc
    profile_picture: { type: String },
    status: { type: String, enum: ['Online', 'Offline', 'Busy', 'Away'], required: true, default: 'Offline' },
    last_login: { type: Date },
}, { timestamps: true })

const User = mongoose.model('User', userSchema);

module.exports = User;