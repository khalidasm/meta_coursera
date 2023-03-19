import React from "react";
import BookingImage from "../Assets/Restaurant.jpg";
import ApplyForm from "../Components/ApplyForm";

const Booking = () => {
  return (
    <section className="px-60 py-20 w-full h-full flex flex-col gap-10">
      <h1 className="text-4xl font-bold capitalize text-[50px] text-center">
        Reserve a table
      </h1>
      <div className="flex justify-center items-center gap-10">
        <div className="w-[600px] h-[500px]">
          <img
            src={BookingImage}
            alt="Restaurant"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
      <ApplyForm />
    </section>
  );
};

export default Booking;
