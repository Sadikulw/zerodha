import React, { useContext, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import GeneralContext from "./GeneralContext";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const generalContext = useContext(GeneralContext);

  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const handleBuyClick = async () => {
    if (stockQuantity <= 0 || stockPrice <= 0) {
      toast.error("Enter valid Quantity & Price");
      return;
    }

    try {
      setLoading(true);

      await axios.post("http://localhost:3002/newOrder", {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      });

      toast.success(`${uid} Buy Order Placed ✅`);

      setTimeout(() => {
        generalContext.closeBuyWindow();
      }, 800);

    } catch (error) {
      toast.error("Order Failed ❌");
    } finally {
      setLoading(false);
    }
  };

  const handleCancelClick = () => {
    generalContext.closeBuyWindow();
  };

  return (
    <div className="container" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              value={stockQuantity}
              onChange={(e) => setStockQuantity(e.target.value)}
            />
          </fieldset>

          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              value={stockPrice}
              onChange={(e) => setStockPrice(e.target.value)}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹140.65</span>

        <div>
          <button
            className="btn btn-blue"
            onClick={handleBuyClick}
            disabled={loading}
          >
            {loading ? "Buying..." : "Buy"}
          </button>

          <button
            className="btn btn-grey"
            onClick={handleCancelClick}
            disabled={loading}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;