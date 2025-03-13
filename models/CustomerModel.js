const mongoose = require('mongoose');

const addressSchema = new mongoose.Schema({
  street: { type: String, required: true },
  unit: String,
  city: { type: String, required: true },
  state: { type: String, required: true },
  postal_code: { type: String, required: true },
  country: { type: String, required: true },
})

const CartItemSchema = new mongoose.Schema({
  product_id: { type: String, required: true },
  quantity: { type: Number, required: true, min: 1 },
  price: { type: Number, required: true }, // Price at the time the item was added
  total_price: { type: Number, required: true }, // quantity * price
});

const CartSchema = new mongoose.Schema(
  {
    customer_id: { type: String, required: true },
    items: [CartItemSchema], // Array of items in the cart
    total_quantity: { type: Number, default: 0 }, // Total number of items in the cart
    total_price: { type: Number, default: 0 }, // Total price of all items in the cart
  },
  { timestamps: true }
);

const customerSchema = new mongoose.Schema({
  //  Personal 
  customerNumber: { type: Number, required: true, unique: true }, // Start from 100000
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  companyName: String,

  // Contact
  shippingAddresses: { type: [addressSchema], required: true },
  billingAddresses: [addressSchema],
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },

  //  Purchasing 
  cart: CartSchema,
  wishlist: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }],
  order_history: [{ type: mongoose.Schema.Types.ObjectId, ref: "Order" }], // References orders
  clv: Number,
  preferredPaymentMethod: String,

  // Security
  password_hash: { type: String, required: true },
  two_factor_enabled: { type: Boolean, default: false },
  failed_login_attempts: { type: Number, default: 0 },
  password_reset_token: { type: String, default: null },
  password_reset_expiry: { type: Date, default: null },

  //  Misc
  profile_picture: { type: String },
  status: { type: String, enum: ['Online', 'Offline'], required: true, default: 'Offline' },
  employeeNotes: String, // Comments used by employees to describe the customer

}, { timestamps: true });

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;