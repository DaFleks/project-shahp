import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import Image from "next/image";
import ff7Cover from '../public/ff7.png';
import { ChevronRightIcon, FilterIcon, SortAscIcon } from "lucide-react";
import Product from "@/components/products/Product";
import ProductList from "@/components/products/ProductList";
import Pagination from "@/components/Pagination";




export default function Home() {
  return (
    <div className="p-4 grow flex-col-hidden gap-4">
      <form>
        <Input type="text" id="search" placeholder="Search products" className="py-6 border-none !text-xl shadow-sm bg-white"></Input>
      </form>

      <Pagination />
      <div className="grid grid-cols-2 gap-4">
        <Button className="font-bold"><FilterIcon />Filters</Button>
        <Button className="font-bold"><SortAscIcon /> Sort</Button>
      </div>


      <ProductList>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </ProductList>
    </div >

  );
}
