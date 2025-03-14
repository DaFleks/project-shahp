"use client";

import Card from "../card/Card";
import CardImage from "../card/CardImage";
import CardAction from "../card/CardAction";
import CardContent from "../card/CardContent";

interface ProductProps {
  _id: string;
  image?: string;
  name?: string;
  sku: string;
  price?: number;
  stock?: number;
}

const Product = ({ _id, image = "/", name, sku, price, stock }: ProductProps) => {
  return (
    <Card className="h-fit">
      <CardImage src={image} className="rounded-xl" imgClassName="rounded-xl object-contain p-2 " />
      <CardContent className="h-32 max-h-32 space-y-4 overflow-hidden flex-col justify-center">
        <p className="font-bold overflow-hidden max-h-12">{name}</p>
        <div>
          <p className="text-sm">
            <b>SKU: </b>
            {sku}
          </p>
          <p className="text-sm">
            <b>Selling Price: </b>${price}
          </p>
          <p className="text-sm">
            <b>Stock: </b>
            {stock}
          </p>
        </div>
      </CardContent>
      <CardAction href={`/products/${_id}`}/>
    </Card>
  );
};

export default Product;
