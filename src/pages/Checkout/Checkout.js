import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const Checkout = () => {
  const { _id, price, title } = useLoaderData();
  const { user } = useContext(AuthContext);
  console.log(user);
  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = `${form.firstName.value}${form.lastName.value}`;
    const email = user?.email || "unregistered";
    const phone = form.phone.value;
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price: price,
      customer: name,
      email: email,
      phone: phone,
      message: message,
    };

    fetch("https://genius-car-server-neon-theta.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("genius token")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Order Placed Successfully");
          form.reset();
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <form onSubmit={handlePlaceOrder}>
      <h2 className="text-4xl">{title}</h2>
      <h4 className="text-2xl">{price}</h4>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-bordered input-success w-full"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-bordered input-success w-full"
            required
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-bordered input-success w-full"
            required
          />
          <input
            name="email"
            defaultValue={user?.email}
            readOnly
            type="text"
            placeholder="Your Email"
            className="input input-bordered input-success w-full"
            required
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-success w-full h-60 my-6"
          placeholder="Type Your Message"
          required
        ></textarea>
        <input className="btn" type="submit" value="Place Your Order" />
      </div>
    </form>
  );
};

export default Checkout;
