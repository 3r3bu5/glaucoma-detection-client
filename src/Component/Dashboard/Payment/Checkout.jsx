import React from "react";
import {
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { withRouter } from "react-router";
import CheckoutForm from './CheckoutForm'
const Checkout = ({setCredits}) => {
  const stripe = loadStripe(
    process.env.REACT_APP_PK_KEY
  );
  return (
    <Elements stripe={stripe}>
      <CheckoutForm setCredits={setCredits} />
    </Elements>
  );
};

export default withRouter(Checkout);
