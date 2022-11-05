import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <div className="text-center">
        <p className="text-lg font-bold text-success">Services</p>
        <h2 className="font-bold text-5xl mt-5">Our Services Area</h2>
        <p className="mt-5 mb-12">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.{" "}
        </p>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
      <div className="flex justify-center mt-12 mb-32">
        <button className="btn btn-outline btn-success font-semibold">
          More Services
        </button>
      </div>
    </div>
  );
};

export default Services;
