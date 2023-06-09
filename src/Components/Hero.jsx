import React from "react";
import Food from "../Assets/Food.jpg";
import { TailwindClasses } from "../Constants/Constants";

const Hero = () => {
  return (
    <section className="md:px-60 py-5 bg-primary h-full md:h-[400px] w-full flex justify-between gap-20 align-center ">
      <div className="flex flex-col gap-10 w-[50%]">
        <div>
            <h1 className="text-secondary font-bold text-[4rem]">Little Lemon</h1>
            <h2 className="text-white text-[2rem]">Chicago</h2>
        </div>
        <p className="text-white">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <button className={TailwindClasses.button}>
          <a href="/booking">Reserve a table</a>
        </button>
      </div>
      <div className="w-full md:w-[50%]">
        <img className="md:float-right
        md:aspect-[5/6] md:translate-y-[10%]
        rounded-3xl md:w-[400px]
        " src={Food} alt="Food" />
      </div>
    </section>
  );
};

export default Hero;
