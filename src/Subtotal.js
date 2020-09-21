import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Subtotal ({basket.length} items); */}
              Subtotal (0 items);
              {/* <storng>{` ${value}`}</storng> */}
              <storng>0</storng>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" />
              This order conatains a gift
            </small>
          </>
        )}
        decimalScale={2}
        // value={getBasketTotal(basket)}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
