import {
  BadgeDollarSignIcon,
  BanknoteIcon,
  BoxIcon,
  Building2Icon,
  CalculatorIcon,
  Calendar1Icon,
  CheckIcon,
  ChevronDownCircleIcon,
  CircleMinusIcon,
  Edit2Icon,
  HeartIcon,
  TagIcon,
  Undo2Icon,
  ViewIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";

import Container from "@/components/Container";
import Heading from "@/components/Heading";
import SingleStat from "@/components/SingleStat";

import BasicInformation from "@/components/products/BasicInformation";

import IProduct from "@/types/productTypes";
import { getProductById } from "@/lib/fetchProducts";
import formatDate from "@/lib/formatDate";
import ProductForm from "@/components/products/ProductForm";

const page = async ({ params }: { params: { _id: string } }) => {
  const { _id } = await params;
  const product: IProduct = await getProductById(_id);

  return (
    <>
      <Container scroll className="space-y-12 pb-12">
        <Heading type="h4" className="font-bold mb-4">
          Basic Information
        </Heading>
        <BasicInformation
          images={product.images}
          name={product.name}
          sku={product.sku}
          description={product.description}
          categories={product.categories}
          brands={product.brands}
        />
        <Heading type="h4" className="font-bold mb-4">
          Pricing & Discounts
        </Heading>
        <Container className="!p-0 grid grid-cols-2 gap-4">
          <SingleStat
            icon={<CalculatorIcon className="size-6" />}
            title="Cost"
            value={Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(Number(product.costPrice))}
          />
          <SingleStat
            icon={<BadgeDollarSignIcon className="size-6" />}
            title="Selling"
            value={Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(Number(product.sellingPrice))}
          />
          <SingleStat
            icon={<ChevronDownCircleIcon className="size-6" />}
            title="Discount"
            value={Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(Number(product.discountAmount))}
          />
          <SingleStat icon={<TagIcon className="size-6" />} title="On Sale" value={product.onSale ? "Yes" : "No"} />
        </Container>

        <Heading type="h4" className="font-bold mb-4">
          Stock & Inventory
        </Heading>
        <Container className="!p-0 grid grid-cols-2 gap-4">
          <SingleStat icon={<BoxIcon className="size-6" />} title="Stock" value={`${product.stockCount}`} />
          <SingleStat className="col-span-2" icon={<Building2Icon className="size-6" />} title="Supplier" value={`${product.supplier}`} />
          <SingleStat
            className="col-span-2"
            icon={<Calendar1Icon className="size-6" />}
            title="Restock"
            value={`${formatDate(product.restockDate)}`}
          />
          <SingleStat
            className="col-span-2"
            icon={<CheckIcon className="size-6" />}
            title="Last Restocked"
            value={`${formatDate(product.lastRestocked)}`}
          />
        </Container>

        <Heading type="h4" className="font-bold mb-4">
          Sales & Analytics
        </Heading>
        <Container className="!p-0 grid grid-cols-2 gap-4">
          <SingleStat icon={<ViewIcon className="size-6" />} title="Views" value={`${product.pageViews}`} />
          <SingleStat icon={<HeartIcon className="size-6" />} title="Wishlist" value={`${product.wishlistCount}`} />
          <SingleStat icon={<Undo2Icon className="size-6" />} title="Returns" value={`${product.returnCount}`} />
          <SingleStat icon={<CircleMinusIcon className="size-6" />} title="Sold" value={`${product.salesCount}`} />
          <SingleStat
            icon={<CheckIcon className="size-6" />}
            title="Revenue"
            value={`${Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(Number(product.totalRevenue))}`}
          />
        </Container>

        <Heading type="h4" className="font-bold mb-4">
          Shipping & Dimensions
        </Heading>
        <Container className="!p-0 grid grid-cols-2 gap-4">
          <SingleStat
            icon={<BanknoteIcon className="size-6" />}
            title="Cost"
            value={`${Intl.NumberFormat("en-CA", { style: "currency", currency: "CAD" }).format(Number(product.shippingCost))}`}
          />
          <SingleStat icon={<TagIcon className="size-6" />} title="Length" value={`${product.dimensions[0].length} cm`} />
          <SingleStat icon={<TagIcon className="size-6" />} title="Width" value={`${product.dimensions[0].width}cm `} />
          <SingleStat icon={<TagIcon className="size-6" />} title="Weight" value={`${product.dimensions[0].weight} lbs`} />
        </Container>

        <Heading type="h4" className="font-bold mb-4">
          Metadata
        </Heading>
        <Container className="!p-0 grid grid-cols-2 gap-4">
          <SingleStat
            className="col-span-2"
            icon={<Calendar1Icon className="size-6" />}
            title="Last Updated"
            value={`${formatDate(product.updatedAt)}`}
          />
          <SingleStat
            className="col-span-2"
            icon={<Calendar1Icon className="size-6" />}
            title="Date Added"
            value={`${formatDate(product.createdAt)}`}
          />
        </Container>

        <Button className="fixed bottom-4 right-4 w-[4rem] h-[4rem] rounded-xl">
          <Edit2Icon className="size-8" />
        </Button>
      </Container>
      {/* <Container scroll>
        <ProductForm initialProduct={product} />
      </Container> */}
    </>
  );
};

export default page;
