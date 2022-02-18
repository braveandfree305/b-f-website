import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js"

import "../index.css";

let stripePromise;

const getStripe = () => {
  if (!stripePromise) {
    stripePromise = loadStripe('pk_test_51KQgJmKoyRYHxifyUsWjuLfRd0lC08xdnb7nJMTaM10KnTbwwv5YM6b2jsoFAAus6Vf6DUlqBnIIxl2wkF0aWbB0004yMDvo9t');
  }

  return stripePromise;
};

const AdditionalCheckout = () => {
  const [stripeError, setStripeError] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const item = {
    price: "price_1KUeFlKoyRYHxifyCVCibA7E",
    quantity: 1
  };

  const checkoutOptions = {
    lineItems: [item],
    mode: "payment",
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`
  };

  const redirectToCheckout = async () => {
    setLoading(true);
    console.log("redirectToCheckout");

    const stripe = await getStripe();
    const { error } = await stripe.redirectToCheckout(checkoutOptions);
    console.log("Stripe checkout error", error);

    if (error) setStripeError(error.message);
    setLoading(false);
  };

  if (stripeError) alert(stripeError);

  return (
    <div className="checkout">
      <h1>Brave and Free Checkout</h1>
      <p className="checkout-title">Group Add On Purchase</p>
      <p className="checkout-description">
        
      </p>
      <h1 className="checkout-price">$35</h1>
      <button
        className="checkout-button"
        onClick={redirectToCheckout}
        disabled={isLoading}
      >
       
        <div className="text-container">
          <p className="text">{isLoading ? "Loading..." : "Buy"}</p>
        </div>
      </button>
    </div>
  );
};

export default AdditionalCheckout;