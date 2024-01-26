import BarChart from "@/components/BarChart";
import Card, { CardContent } from "@/components/Card";
import DashboardLayout from "@/components/Layouts/DashboardLayout";
import PageTitle from "@/components/PageTitle";
import RequestCard from "@/components/RequestCard";
import { CreditCard, DollarSign, Users } from "lucide-react";
import Image from "next/image";

const cardData = [
  {
    label: "Total Revenue",
    amount: "4321321",
    discription: "asjdf;lk alsdf",
    icon: <DollarSign />,
  },

  {
    label: "Total Done",
    amount: "4321321",
    discription: "asjdf;lk alsdf",
    icon: <Users />,
  },

  {
    label: "Total Sales",
    amount: "4321321",
    discription: "asjdf;lk alsdf",
    icon: <CreditCard />,
  },
];

const reqData = [
  {
    name: "Murshed",
    serviceName: "Passport",
    phone: "01781981486",
  },

  {
    name: "Murshed",
    serviceName: "Passport",
    phone: "01781981486",
  },
  {
    name: "Murshed",
    serviceName: "Passport",
    phone: "01781981486",
  },
];

export default function Home() {
  return (
    <DashboardLayout>
      <div className="flex flex-col gap-5 w-full">
        <PageTitle title="Dashboard" />
        <section className="grid w-full grid-cols-1 gap-4 gap-x-8 transition-all sm:grid-cols-2 xl:grid-cols-4">
          {cardData.map((data, i) => (
            <Card key={i} data={data} />
          ))}
        </section>

        <section className="grid grid-cols-1 gap-4 transition-all lg:grid-cols-2">
          <CardContent>
            <p className="p-4 font-semibold">Overview</p>
            <BarChart />
          </CardContent>
          <CardContent className="flex justify-between gap-4">
            <section>
              <p>Recent Request</p>
              <p className="text-sm text-gray-400">
                You got 10 request this month
              </p>
            </section>

            {reqData.map((data, i) => (
              <RequestCard key={i} data={data} />
            ))}
          </CardContent>
        </section>
      </div>
    </DashboardLayout>
  );
}
