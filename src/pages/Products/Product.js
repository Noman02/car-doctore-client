import React from "react";
import { FaStar } from "react-icons/fa";

const Product = ({ product }) => {
  const { picture, title, price } = product;
  return (
    <div className="card bg-base-100 shadow-xl h-96 w-64">
      <figure className="px-10 pt-10">
        <img
          src={picture}
          alt="Shoes"
          className="rounded-xl h-56 w-80 bg-slate-300"
        />
      </figure>
      <p className="flex justify-center text-yellow-300 mt-5">
        {" "}
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
        <FaStar></FaStar>
      </p>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p className="text-success font-semibold text-xl">${price}</p>
      </div>
    </div>
  );
};

export default Product;
