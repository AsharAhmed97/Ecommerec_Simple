import React, { useState } from "react";
import { ContextCreate } from "./ContextCreate";
// import ContextCreate from './ContextCreate'
import ShowCards from "./ShowCards";
const FakeApi = () => {
  const data = [
    {
      id: 0,
      Name: "Sneakers",
      Price: 500,
      Image:
        "https://cdn.shopify.com/s/files/1/0052/7237/1293/products/1024x1024-Women-LowTop-White-111822-3_1024x1024.jpg?v=1669166324",
    },
    {
      id: 1,
      Name: "shirt",
      Price: 500,
      Image:
        "https://d10mm2gps7of7f.cloudfront.net/product_files/262_7_59b05fed-3151-4cfc-9bc3-77b2691e89e3.jpg",
    },
    {
      id: 2,
      Name: "Pant",
      Price: 1000,
      Image:
        "https://static-01.daraz.pk/p/f25c3e3e98c2d4f99b6c218649432ab3.jpg",
    },
  ];
  const [sendApi, setSendApi] = useState(data);
  return (
    <>
      <ContextCreate.Provider value={{ sendApi }}>
        <ShowCards />
      </ContextCreate.Provider>
    </>
  );
};

export default FakeApi;
