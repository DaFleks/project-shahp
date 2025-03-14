"use client";

import { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import IProduct, { Dimension } from "@/types/productTypes"; // Import the IProduct interface
import Heading from "../Heading";
import Container from "../Container";
import Image from "next/image";
import Card from "../card/Card";
import CardContent from "../card/CardContent";

// Example component for editing a product
const ProductForm = ({ initialProduct }: { initialProduct: IProduct }) => {
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
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic Information */}

      <Container className="!p-0 grid grid-cols-2 gap-4">
        <Heading type="h4" className="font-bold col-span-full">
          Basic Information
        </Heading>
        <div className="col-span-full">
          <label htmlFor="name">Product Name</label>
          <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full bg-white py-6" />
        </div>
        <div>
          <label htmlFor="sku">SKU</label>
          <Input id="sku" name="sku" value={formData.sku} onChange={handleChange} required className="w-full bg-white py-6" />
        </div>
        <div className="col-span-full">
          <label htmlFor="description">Description</label>
          <Textarea id="description" name="description" value={formData.description || ""} onChange={handleChange} className="w-full bg-white py-4" />
        </div>
        <div className="col-span-full">
          <label htmlFor="categories">Categories (comma separated)</label>
          <Input id="categories" name="categories" value={formData.categories.join(", ")} onChange={handleChange} className="w-full bg-white py-6" />
        </div>
        <div className="col-span-full">
          <label htmlFor="brands">Brands (comma separated)</label>
          <Input id="brands" name="brands" value={formData.brands.join(", ")} onChange={handleChange} className="w-full bg-white py-6" />
        </div>
      </Container>

      {/* Pricing & Discounts */}

      <Container className="!p-0 grid grid-cols-2 gap-4">
        <Heading type="h4" className="font-bold  col-span-full">
          Pricing & Discounts
        </Heading>
        <div>
          <label htmlFor="costPrice">Cost Price</label>
          <Input id="costPrice" name="costPrice" value={formData.costPrice} onChange={handleChange} required className="w-full bg-white py-6" />
        </div>
        <div>
          <label htmlFor="sellingPrice">Selling Price</label>
          <Input
            id="sellingPrice"
            name="sellingPrice"
            value={formData.sellingPrice}
            onChange={handleChange}
            required
            className="w-full bg-white py-6"
          />
        </div>
        <div>
          <label htmlFor="discountAmount">Discount Amount</label>
          <Input
            id="discountAmount"
            name="discountAmount"
            value={formData.sellingPrice}
            onChange={handleChange}
            required
            className="w-full bg-white py-6"
          />
        </div>
        <div>
          <label htmlFor="onSale">On Sale?</label>
          <Checkbox id="onSale" name="onSale" checked={formData.isFeatured || false} onChange={handleChange} />
        </div>
      </Container>

      {/* Stock & Inventory */}
      <Container className="!p-0 grid grid-cols-2 gap-4">
        <Heading type="h4" className="font-bold  col-span-full">
          Stock & Inventory
        </Heading>
        <div>
          <label htmlFor="stockCount">Stock Count</label>
          <Input
            type="number"
            id="stockCount"
            name="stockCount"
            value={formData.stockCount}
            onChange={handleChange}
            required
            className="w-full bg-white py-6"
          />
        </div>
        <div>
          <label htmlFor="supplier">Supplier</label>
          <Input type="text" id="supplier" name="supplier" value={formData.supplier || ""} onChange={handleChange} className="w-full bg-white py-6" />
        </div>
        <div>
          <label htmlFor="restockDate">Restock Date</label>
          <Input
            type="date"
            id="restockDate"
            name="restockDate"
            value={formData.restockDate}
            onChange={handleChange}
            className="w-full bg-white py-6"
          />
        </div>
        <div>
          <label htmlFor="lastRestocked">Last Restocked</label>
          <Input
            type="date"
            id="lastRestocked"
            name="lastRestocked"
            value={formData.lastRestocked instanceof Date ? formData.lastRestocked.toISOString().split("T")[0] : ""}
            onChange={handleChange}
            className="w-full bg-white py-6"
          />
        </div>
      </Container>

      {/* Sales & Analytics */}
      <Container className="!p-0 grid grid-cols-2 gap-4">
        <Heading type="h4" className="font-bold  col-span-full">
          Sales & Analytics
        </Heading>
        <div>
          <label htmlFor="pageViews">Page Views</label>
          <Input
            type="number"
            id="pageViews"
            name="pageViews"
            value={formData.pageViews}
            onChange={handleChange}
            required
            className="w-full bg-white py-6"
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
            className="w-full bg-white py-6"
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
            className="w-full bg-white py-6"
          />
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
            className="w-full bg-white py-6"
          />
        </div>
      </Container>

      {/* Shipping & Dimensions */}
      <Container className="!p-0 grid grid-cols-2 gap-4">
        <Heading type="h4" className="font-bold  col-span-full">
          Shipping & Dimensions
        </Heading>
        <div>
          <label htmlFor="length">Length</label>
          <Input
            type="number"
            id="length"
            name="dimensions[0].length"
            value={formData.dimensions[0]?.length || ""}
            onChange={handleChange}
            className="w-full bg-white py-6"
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <Input
            type="number"
            id="width"
            name="dimensions[0].width"
            value={formData.dimensions[0]?.width || ""}
            onChange={handleChange}
            className="w-full bg-white py-6"
          />
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <Input
            type="number"
            id="height"
            name="dimensions[0].height"
            value={formData.dimensions[0]?.height || ""}
            onChange={handleChange}
            className="w-full bg-white py-6"
          />
        </div>

        <div>
          <label htmlFor="weight">Weight</label>
          <Input
            type="number"
            id="weight"
            name="dimensions[0].weight"
            value={formData.dimensions[0]?.weight || ""}
            onChange={handleChange}
            className="w-full bg-white py-6"
          />
        </div>
      </Container>

      <Container className="!p-0 grid grid-cols-2 gap-4">
        <Heading type="h4" className="font-bold col-span-full">
          Media
        </Heading>
        <Container className="!p-0 col-span-full grid grid-cols-4 gap-4">
          <Card className="p-4 col-span-full">
            <CardContent className="relative w-full h-[15rem] bg-white">
              <Image src={formData.images[0]} alt={formData.name} fill className="object-contain" />
            </CardContent>
          </Card>
          {formData.images.map((image: string) => (
            <Card key={image} className="p-2">
              <CardContent className="relative w-full aspect-square bg-white">
                <Image src={image} alt={formData.name} fill className="object-contain" />
              </CardContent>
            </Card>
          ))}
        </Container>
        <div className="col-span-full">
          <label htmlFor="images">Image Links (comma seprated)</label>
          <Textarea id="images" name="images" value={formData.images.join(", ")} onChange={handleChange} className="w-full bg-white py-4" />
        </div>
      </Container>
    </form>
  );
};

export default ProductForm;
