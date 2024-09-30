import React from "react";

const Card = (props: { name: string; Roll: number; day: string }) => {
  return (
    <div className="w-[400px] h-72 mx-auto bg-emerald-600 px-10 flex justify-center items-center rounded-[23px]">
      <div className="text-4xl font-semibold">
        <h1>Name: {props.name}</h1>
        <h2 className="text-4xl font-semibold text-center">
          Roll: {props.Roll}
        </h2>
        <span className="text-4xl font-semibold flex justify-center">
          Day: {props.day}
        </span>
      </div>
    </div>
  );
};

export default Card;
