import React from "react";

import { GiReturnArrow, GiDeliveryDrone, GiPayMoney } from "react-icons/gi";


export const links = [
  { id: 1, text: "Home", url: "/" },
  { id: 2, text: "Products", url: "/products" },
  { id: 3, text: "About", url: "/about" },
];

export const services = [
  {
    id: 1,
    name: "Business-to-Business",
    text: "We've already defined B2B ecommerce as involving transactions between two or more businesses. B2C ecommerce , by contrast, covers transactions between businesses and individual end consumers",
    icon: <GiDeliveryDrone />,
  },
  {
    id: 2,
    name: "Business-to-Cunsumer",
    text: "B2C (business-to-consumer) ecommerce is a business model where a business sells products or services directly to consumers online:",
    icon: <GiPayMoney />,
  },
  {
    id: 3,
    name: "Consumer-to-Consumer",
    text: "customer to customer”; it's a business model that fosters commerce between private individuals, usually in an online environment.",
    icon: <GiReturnArrow />,
  },
];
