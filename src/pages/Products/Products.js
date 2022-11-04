import React, { useEffect, useState } from "react";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="mb-12">
      <h5 className="font-bold text-xl text-center text-success">
        Popular Products
      </h5>
      <h2 className="font-bold text-5xl text-center py-5">
        Browse Our Products
      </h2>
      <p className="text-center mb-12">
        the majority have suffered alteration in some form, by injected humour,
        or randomised <br /> words which don't look even slightly believable.{" "}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
      <div className="text-center mt-12">
        <button className="btn btn-outline btn-success text-lg font-semibold">
          More Products
        </button>
      </div>
    </div>
  );
};

export default Products;
