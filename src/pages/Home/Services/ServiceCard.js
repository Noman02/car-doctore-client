import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
  const { _id, img, price, title } = service;
  return (
    <div className="card card-compact h-80 bg-base-100 shadow-xl">
      <figure>
        <img className="h-52" src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="card-actions justify-between text-success  text-xl">
          <p className=" font-semibold">Price: ${price}</p>
          <button>
            <Link to={`/checkout/${_id}`}>
              <FaArrowRight></FaArrowRight>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
