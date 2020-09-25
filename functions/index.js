const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { request, response } = require("express");
const stripe = require("stripe")(
  "sk_test_51HUqnOIJT2zXhNg6jLcqxz2NH396d2hjIKnl0P6S7JCwFZk3US3y0BMYrxVTWsoIegg6IWzTevpearuYpJ0jC2yQ00uPjGXjXg"
);

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payment/create", async (request, response) => {
  const total = request.query.total;
  console.log("payment request recieved >>>", total);
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "inr",
  });
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
exports.api = functions.https.onRequest(app);

// (http://localhost:5001/challenge-94597/us-central1/api)
