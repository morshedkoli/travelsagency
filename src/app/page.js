import BarChart from "@/components/BarChart";
import Card, { CardContent } from "@/components/Card";
import PlainLayout from "@/components/Layouts/PlainLayout";
import Login from "@/components/Login";
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
    <PlainLayout>
      <Login />
    </PlainLayout>
  );
}
