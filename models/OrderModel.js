const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    orderNumber: Number,
    orderStatus: String,    // e.g., Incomplete, Complete, Cancelled (if every item has its status as 'Cancelled')
    customer: {
        customerId: String, // ID of the customer, if its a guest order replace with 'GUEST'
        firstName: String,
        lastName: String,
        companyName: String,
        email: String,
        phone: String,
        shippingAddress: {
            street: String,
            unit: String,
            city: String,
            province: String,
            postal: String,
            country: String
        },
        billingAddress: {
            street: String,
            unit: String,
            city: String,
            province: String,
            postal: String,
            country: String
        }
    },
    items: [
        {
            linNumber: String, // A concatenated string composing of the orderNumber followed by a '-' and starting with the letter 'A' and incrementing for each following item, e.g. '100000-A'
            productId: String,
            productName: String,
            sku: String,
            quantity: Number,
            unitPrice: Number,
            discountPerUnit: Number,
            totalPrice: Number,  // (unitPrice - discountPerUnit) * quantity,
            trackingNumbers: [{ number: String, courier: String }], // each quantity may have different tracking numbers
            image: String, // The product's main image
            status: String, // Pending, Processing, Shipped, Cancelled
        }
    ],
    shippingMethod: [{ number: String, courier: String }], // An array accumulating each items' trackingNumbers values.
    paymentMethod: String,  // e.g., Credit Card, PayPal
    orderDiscount: Number, // any discounts towards the order entirely
    subTotal: Number,  // Total of every item before tax and shipping, accumulation of each items' totalPrice
    taxPercentage: Number, // Tax calculated based on the percentage
    shippingCost: Number,
    totalAmount: Number, // Subtotal + tax + shippingCost
    customerNotes: String, // Notes or instructions provided by customer
    employeeNotes: String, // Employee provided notes regarding the order
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;