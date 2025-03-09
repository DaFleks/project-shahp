import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"
import Image from "next/image";
import ff7Cover from '../public/ff7.png';
import { ChevronRightIcon, CirclePowerIcon, DollarSignIcon, FilterIcon, SortAscIcon, TrendingDownIcon, TrendingUpDownIcon, TrendingUpIcon } from "lucide-react";
import Product from "@/components/products/Product";
import CardList from "@/components/card/CardList";
import Pagination from "@/components/Pagination";
import Customer from "@/components/customers/Customer";
import FilterSortButtons from "@/components/FilterSortButtons";
import Heading from "@/components/Heading";
import Card from "@/components/card/Card";
import CardContent from "@/components/card/CardContent";
import SingleStat from "@/components/SingleStat";
import WeeklyChart from "@/components/temp/WeeklyChart";
import OrderTypeDonutChart from "@/components/temp/CustomerVSGuest";
import OverviewTable from "@/components/temp/OverviewOrdersTable";
import Container from "@/components/Container";
import OrderStatusChart from "@/components/temp/OrderStatus";





export default function Home() {
  const salesData = [
    { week: "Week 1", revenue: 5000 },
    { week: "Week 2", revenue: 7000 },
    { week: "Week 3", revenue: 4500 },
    { week: "Week 4", revenue: 6200 },
  ];

  const orderData = {
    customerOrders: 120, // Total orders placed by registered customers
    guestOrders: 80, // Total orders placed by guests
  };

  const orderStatusData = {
    complete: 120,
    incomplete: 80,
    cancelled: 30,
  };


  return (
    <Container className="overflow-y-scroll">
      <Heading type="h3">Today</Heading>
      <CardList className="grid-cols-2 md:grid-cols-6 w-full">
        <SingleStat icon={<TrendingUpIcon className="size-12 text-emerald-300" />} value="$420,000" title="Sales" />
        <SingleStat icon={<TrendingUpIcon className="size-12 text-emerald-300" />} value="$420,000" title="Profit" />
        <SingleStat icon={<TrendingDownIcon className="size-12 text-rose-300" />} value="64" title="Orders" />
        <SingleStat icon={<TrendingUpIcon className="size-12 text-emerald-300" />} value="$420,000" title="AVO" />
        <SingleStat icon={<TrendingDownIcon className="size-12 text-rose-300" />} value="1254" title="Visitors" />
        <SingleStat icon={<CirclePowerIcon className="size-12 text-emerald-300" />} value="1254" title="Online" />
      </CardList>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <WeeklyChart data={salesData} />
        <OrderTypeDonutChart customerOrders={orderData.customerOrders} guestOrders={orderData.guestOrders} />
        <OverviewTable />
        <OrderStatusChart data={orderStatusData} />
      </div>

      {/* <form>
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
      </CardList> */}
    </Container>

  );
}
