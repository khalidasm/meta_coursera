import React from "react";
import { TailwindClasses } from "../Constants/Constants";
import OrderItem from "./OrderItem";
import Salad from "../Assets/Salad.jpg";
import Bruschetta from "../Assets/Bruchetta.svg";
import LemonDessert from "../Assets/LemonDessert.jpg";

const Orders = () => {
  const Menu = [
    {
      title: "Greek Salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      price: "$12.99",
      img: Salad,
    },
    {
      title: "Bruschetta",
      description:
        "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
      price: "$5.99",
      img: Bruschetta,
    },
    {
      title: "Lemon Dessert",
      description:
        "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
      price: "$5",
      img: LemonDessert,
    },
  ];

  return (
    <section id="menu" className="px-60 py-40 flex gap-10 flex-col">
      <h1 className="text-4xl font-bold capitalize text-[50px]">
        This weeks specials!
      </h1>
      <button className={TailwindClasses.button}>Online Menu</button>
      <ul
        className="
        grid grid-cols-3 gap-5 place-items-center
        "
      >
        {Menu.map((item) => {
          return <OrderItem {...item} />;
        })}
      </ul>
    </section>
  );
};

export default Orders;
