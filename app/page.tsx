import { CirclePowerIcon, TrendingDownIcon, TrendingUpIcon } from "lucide-react";

import Container from "@/components/Container";
import Heading from "@/components/Heading";

import SingleStat from "@/components/SingleStat";
import WeeklyChart from "@/components/temp/WeeklyChart";
import OrderTypeDonutChart from "@/components/temp/CustomerVSGuest";
import OverviewTable from "@/components/temp/OverviewOrdersTable";
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
    <Container grow scroll className="space-y-4">
      <Heading type="h3">Today</Heading>
      <Container className="!p-0 grid grid-cols-2 gap-4 xl:grid-cols-6">
        <SingleStat icon={<TrendingUpIcon className="size-12 text-emerald-300" />} value="$420,000" title="Sales" />
        <SingleStat icon={<TrendingUpIcon className="size-12 text-emerald-300" />} value="$420,000" title="Profit" />
        <SingleStat icon={<TrendingDownIcon className="size-12 text-rose-300" />} value="64" title="Orders" />
        <SingleStat icon={<TrendingUpIcon className="size-12 text-emerald-300" />} value="$420,000" title="AVO" />
        <SingleStat icon={<TrendingDownIcon className="size-12 text-rose-300" />} value="1254" title="Visitors" />
        <SingleStat icon={<CirclePowerIcon className="size-12 text-emerald-300" />} value="1254" title="Online" />
      </Container>

      <Container className="!p-0 grid grid-cols-1 xl:grid-cols-2 gap-4">
        <WeeklyChart data={salesData} />
        <OrderTypeDonutChart customerOrders={orderData.customerOrders} guestOrders={orderData.guestOrders} />
        <OverviewTable />
        <OrderStatusChart data={orderStatusData} />
      </Container>
    </Container>
  );
}
