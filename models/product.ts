import mongoose, { Schema } from "mongoose";

import IProduct from "@/types/productTypes";

const productSchema = new Schema(
  {
    name: { type: String, required: true },
    categories: { type: [String], required: true },
    brands: [{ type: String, required: true }],
    sku: { type: String, required: true, unique: true },
    description: String,
    isFeatured: { type: Boolean, default: false },
    onSale: { type: Boolean, default: false },
    costPrice: Number,
    sellingPrice: Number,
    discountAmount: Number,
    stockCount: { type: Number, required: true, default: 0 },
    restockDate: Date,
    lastRestocked: Date,
    supplier: String,
    salesCount: { type: Number, required: true, default: 0 },
    wishlistCount: { type: Number, required: true, default: 0 },
    pageViews: { type: Number, required: true, default: 0 },
    totalRevenue: { type: Number, required: true, default: 0 },
    dimensions: [
      {
        length: Number,
        width: Number,
        height: Number,
        weight: Number,
      },
    ],
    shippingCost: { type: Number, default: 0 },
    returnCount: { type: Number, required: true, default: 0 },
    images: [String],
    rating: { type: Number, default: 0 },
    reviews: [
      {
        review_id: String,
        customer_id: String,
        customer_firstName: String,
        customer_lastName: String,
        customer_avatar: String,
        rating: Number,
        comment: String,
      },
    ],
  },
  { timestamps: true }
);

const Product = mongoose.models.Product || mongoose.model<IProduct>("Product", productSchema);

export default Product;
