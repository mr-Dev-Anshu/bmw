import express from "express";
import "dotenv/config";
import Razorpay from "razorpay";
import crypto from "crypto";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post("/order", async (req, res) => {
  try {
    //  Test Code----------------------------->
    // const instance = new Razorpay({
    //   key_id: process.env.RAZORPAY_KEY_ID,
    //   key_secret: process.env.RAZORPAY_SECRET,
    // });

    // const order = instance.paymentLink.create({
    //   amount: 500,
    //   currency: "INR",
    //   accept_partial: true,
    //   first_min_partial_amount: 100,
    //   description: "For XYZ purpose",
    //   customer: {
    //     name: "Gaurav Kumar",
    //     email: "gaurav.kumar@example.com",
    //     contact: "+919000090000",
    //   },
    //   notify: {
    //     sms: true,
    //     email: true,
    //   },
    //   reminder_enable: true,
    //   options: {
    //     checkout: {
    //       method: {
    //         netbanking: 1,
    //         card: 1,
    //         upi: 1,
    //         wallet: 1,
    //       },
    //     },
    //   },
    // });

    //  actual code
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_SECRET,
    });

    const options = req.body;
    const order = await razorpay.orders.create(options);

    if (!order) {
      return res.status(500).send("Error");
    }

    res.json(order);
  } catch (error) {
    console.log(err);
    res.status(500).send("Error");
  }
});

app.post("/order/validate", async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  const sha = crypto.createHmac("sha256", process.env.RAZORPAY_KEY_ID);

  sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);

  const digest = sha.digest("hex");

  if (digest !== razorpay_signature) {
    return res.status(400).json({ msg: "Transaction not legit!" });
  }

  res.json({
    message: "success",
    orderId: razorpay_order_id,
    payment: razorpay_payment_id,
  });
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Listening at port", process.env.PORT);
});
