import React from "react";
import { MdDeliveryDining } from "react-icons/md";

const OrderItem = ({ img, title, price, description }) => {
  return (
    <li className="h-[500px] bg-[#edefee] w-[300px] rounded-t-lg flex flex-col gap-5">
      <div className="w-full rounded-xl">
        <img
          className="h-[200px] w-full object-cover rounded-t-xl"
          src={img}
          alt={title}
        />
      </div>
      <div className="flex justify-between px-4 items-center">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="font-bold text-xl text-orange-500">{price}</p>
      </div>
      <div className="px-4 w-full">
        <p>{description}</p>
      </div>
      <div className="px-4 w-full h-full flex flex-col justify-end items-start pb-5">
        <button className="flex justify-center items-center gap-3">
          Order a delivery
          <MdDeliveryDining />
        </button>
      </div>
    </li>
  );
};

export default OrderItem;
