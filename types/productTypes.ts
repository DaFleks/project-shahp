interface IProduct {
  _id: string;
  name: string;
  categories: string[];
  brands: string[];
  sku: string;
  description?: string;
  isFeatured?: boolean;
  onSale?: boolean;
  costPrice?: number;
  sellingPrice?: number;
  discountAmount?: number;
  stockCount: number;
  restockDate?: Date;
  lastRestocked?: Date;
  supplier?: string;
  salesCount: number;
  wishlistCount: number;
  pageViews: number;
  totalRevenue: number;
  dimensions: Dimension[];
  shippingCost?: number;
  returnCount: number;
  images: string[];
  rating?: number;
  reviews: Review[];
  createdAt?: Date; // Optional, will be set automatically by Mongoose
  updatedAt?: Date; // Optional, will be set automatically by Mongoose
}

export interface Dimension {
  length?: number;
  width?: number;
  height?: number;
  weight?: number;
}

export interface Review {
  review_id: string;
  customer_id: string;
  customer_firstName?: string;
  customer_lastName?: string;
  customer_avatar?: string;
  rating?: number;
  comment?: string;
}

export default IProduct;
