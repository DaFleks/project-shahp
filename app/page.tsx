import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import Image from "next/image";
import ff7Cover from '../public/ff7.png';
import { ChevronRightIcon, FilterIcon, SortAscIcon } from "lucide-react";
import Product from "@/components/products/Product";
import CardList from "@/components/CardList";
import Pagination from "@/components/Pagination";
import Customer from "@/components/customers/Customer";
import FilterSortButtons from "@/components/FilterSortButtons";




export default function Home() {
  return (
    <div className="p-4 grow flex-col-hidden gap-4">
      <form>
        <Input type="text" id="search" placeholder="Search products" className="py-6 border-none !text-xl shadow-sm bg-white"></Input>
      </form>

      <Pagination />

      <FilterSortButtons />

      <CardList>
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </CardList>
      <CardList>
        <Customer />
        <Customer />
        <Customer />
        <Customer />
        <Customer />
      </CardList>
    </div >

  );
}
