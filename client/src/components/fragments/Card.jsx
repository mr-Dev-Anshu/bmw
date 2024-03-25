import React from "react";
import { HashLink } from "react-router-hash-link";
import logo from "../../assets/logobmw.png";

const Card = ({ price, dincome, title, tincome, cycle, src, src2 }) => {
  const amount = price * 100;
  const currency = "INR";
  const receiptId = "qwsaq1";

  const paymentHandler = async (e) => {
    const response = await fetch("http://localhost:4000/order", {
      method: "POST",
      body: JSON.stringify({ amount, currency, receipt: receiptId }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const order = await response.json();
    console.log(order);

    var options = {
      key: "rzp_test_OMGxYYAK8Ggdm9",
      amount, 
      currency,
      name: "BMW",
      description: "Test Transaction",
      image: logo,
      order_id: order?.id,
      handler: async function (response) {
        const body={
          ...response
        };

        const validateResponse = await fetch("http://localhost:4000/order/validate",{
          method:"POST",
          body:JSON.stringify(body),
          headers:{
            "Content-Type":"application/json",
          },
        })
        const jsonRes = await validateResponse.json();
        console.log(jsonRes);
      },
      prefill: {
        name: "Test_User",
        email: "Test@gmail.com",
        contact: "9786890000",
      },
      notes: {
        address: "BMW Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };

    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();
  };

  return (
    <div className="flex justify-between bg-gray-200 rounded-xl">
      <div className="flex gap-6">
        <div className=" grid place-items-center py-2 p-4">
          <img src={src} className="h-24 w-40 object-cover" alt="" />
          <p className="font-bold text-2xl ">₹{price}</p>
        </div>
        <div className="grid place-items-start py-4 font-semibold">
          <p className="font-extrabold tracking-wider">{title}</p>
          <p>Daily Income: ₹{dincome}</p>
          <p>Totoal Income: ₹{tincome}</p>
          <p>Cycle: {cycle}</p>
        </div>
      </div>
      <div className="grid place-items-center  h-full pr-12 ">
        <HashLink
          onClick={paymentHandler}
          className="p-4 bg-blue-700 rounded-xl text-white font-semibold"
        >
          Buy Now
        </HashLink>
      </div>
    </div>
  );
};

export default Card;
