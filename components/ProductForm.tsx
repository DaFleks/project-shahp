"use client";

import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import IProduct, { Dimension } from "../types/productTypes"; // Import the IProduct interface

// Example component for editing a product
const EditProductForm = ({ initialProduct }: { initialProduct: IProduct }) => {
  const [formData, setFormData] = useState<IProduct>(initialProduct);

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: checked });
    } else if (name === "categories" || name === "brands" || name === "images") {
      setFormData({
        ...formData,
        [name]: value.split(",").map((item) => item.trim()),
      });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle submit
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Submit form logic (e.g., make API call to update product)
    console.log("Updated product data:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name">Product Name</label>
        <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white" />
      </div>

      <div>
        <label htmlFor="categories">Categories (comma separated)</label>
        <Input id="categories" name="categories" value={formData.categories.join(", ")} onChange={handleChange} className="w-full bg-white" />
      </div>

      <div>
        <label htmlFor="brands">Brands (comma separated)</label>
        <Input id="brands" name="brands" value={formData.brands.join(", ")} onChange={handleChange} className="w-full bg-white" />
      </div>

      <div>
        <label htmlFor="sku">SKU</label>
        <Input id="sku" name="sku" value={formData.sku} onChange={handleChange} required className="w-full bg-white" />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <Textarea id="description" name="description" value={formData.description || ""} onChange={handleChange} className="w-full bg-white" />
      </div>

      <div>
        <label htmlFor="isFeatured">Is Featured?</label>
        <Checkbox id="isFeatured" name="isFeatured" checked={formData.isFeatured || false} onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="onSale">On Sale?</label>
        <Checkbox id="onSale" name="onSale" checked={formData.isFeatured || false} onChange={handleChange} />
      </div>

      <div>
        <label htmlFor="costPrice">Cost Price</label>
        <Input id="costPrice" name="costPrice" value={formData.costPrice} onChange={handleChange} required className="w-full bg-white" />
      </div>

      <div>
        <label htmlFor="sellingPrice">Selling Price</label>
        <Input id="sellingPrice" name="sellingPrice" value={formData.sellingPrice} onChange={handleChange} required className="w-full bg-white" />
      </div>

      <div>
        <label htmlFor="discountAmount">Discount Amount</label>
        <Input id="discountAmount" name="discountAmount" value={formData.sellingPrice} onChange={handleChange} required className="w-full bg-white" />
      </div>

      <div>
        <label htmlFor="stockCount">Stock Count</label>
        <Input
          type="number"
          id="stockCount"
          name="stockCount"
          value={formData.stockCount}
          onChange={handleChange}
          required
          className="w-full bg-white"
        />
      </div>

      <div>
        <label htmlFor="restockDate">Restock Date</label>
        <Input type="date" id="restockDate" name="restockDate" value={formData.restockDate} onChange={handleChange} className="w-full bg-white" />
      </div>

      <div>
        <label htmlFor="lastRestocked">Last Restocked</label>
        <Input
          type="date"
          id="lastRestocked"
          name="lastRestocked"
          value={formData.lastRestocked instanceof Date ? formData.lastRestocked.toISOString().split("T")[0] : ""}
          onChange={handleChange}
          className="w-full bg-white"
        />
      </div>

      <div>
        <label htmlFor="supplier">Supplier</label>
        <Input type="text" id="supplier" name="supplier" value={formData.supplier || ""} onChange={handleChange} className="w-full bg-white" />
      </div>

      <div>
        <label htmlFor="salesCount">Sales Count</label>
        <Input
          type="number"
          id="salesCount"
          name="salesCount"
          value={formData.salesCount}
          onChange={handleChange}
          required
          className="w-full bg-white"
        />
      </div>

      <div>
        <label htmlFor="wishlistCount">Wishlist Count</label>
        <Input
          type="number"
          id="wishlistCount"
          name="wishlistCount"
          value={formData.wishlistCount}
          onChange={handleChange}
          required
          className="w-full bg-white"
        />
      </div>

      <div>
        <label htmlFor="pageViews">Page Views</label>
        <Input
          type="number"
          id="pageViews"
          name="pageViews"
          value={formData.pageViews}
          onChange={handleChange}
          required
          className="w-full bg-white"
        />
      </div>

      <div>
        <label htmlFor="totalRevenue">Total Revenue</label>
        <Input
          type="number"
          id="totalRevenue"
          name="totalRevenue"
          value={formData.totalRevenue}
          onChange={handleChange}
          required
          className="w-full bg-white"
        />
      </div>

      <div>
        <label htmlFor="dimensions">Dimensions</label>

        {/* Length Input */}
        <div className="space-y-2">
          <label htmlFor="length">Length</label>
          <Input
            type="number"
            id="length"
            name="dimensions[0].length"
            value={formData.dimensions[0]?.length || ""}
            onChange={handleChange}
            className="w-full bg-white"
          />
        </div>

        {/* Width Input */}
        <div className="space-y-2">
          <label htmlFor="width">Width</label>
          <Input
            type="number"
            id="width"
            name="dimensions[0].width"
            value={formData.dimensions[0]?.width || ""}
            onChange={handleChange}
            className="w-full bg-white"
          />
        </div>

        {/* Height Input */}
        <div className="space-y-2">
          <label htmlFor="height">Height</label>
          <Input
            type="number"
            id="height"
            name="dimensions[0].height"
            value={formData.dimensions[0]?.height || ""}
            onChange={handleChange}
            className="w-full bg-white"
          />
        </div>

        {/* Weight Input */}
        <div className="space-y-2">
          <label htmlFor="weight">Weight</label>
          <Input
            type="number"
            id="weight"
            name="dimensions[0].weight"
            value={formData.dimensions[0]?.weight || ""}
            onChange={handleChange}
            className="w-full bg-white"
          />
        </div>
      </div>

      <div>
        <label htmlFor="shippingCost">Shipping Cost</label>
        <Input
          type="number"
          id="shippingCost"
          name="shippingCost"
          value={formData.shippingCost || ""}
          onChange={handleChange}
          className="w-full bg-white"
        />
      </div>

      <div>
        <label htmlFor="returnCount">Return Count</label>
        <Input
          type="number"
          id="returnCount"
          name="returnCount"
          value={formData.returnCount}
          onChange={handleChange}
          required
          className="w-full bg-white"
        />
      </div>

      <div>
        <label htmlFor="images">Images (comma separated URLs)</label>
        <Input type="text" id="images" name="images" value={formData.images.join(", ")} onChange={handleChange} className="w-full bg-white" />
      </div>

      {/* Add more fields as needed for other properties in IProduct */}

      <div className="mt-4">
        <Button type="submit">Update Product</Button>
      </div>
    </form>
  );
};

export default EditProductForm;
