import React, { useEffect, useState } from "react";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("services.json")
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
      <div>
        <h2>Services: {services.length}</h2>
      </div>
    </div>
  );
};

export default Services;
