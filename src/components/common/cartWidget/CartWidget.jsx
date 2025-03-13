import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./cartWidget.css";

const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);
  return (
    <div className="cart-container">
      <div className="cart-icon-wrapper">
        <img
          src="https://res.cloudinary.com/dxebfpyws/image/upload/v1738623232/carrito_k6rhts.png"
          alt="Carrito"
          className="cart-icon"
        />
        <div className="cart-counter">{getTotalQuantity()}</div>
      </div>
    </div>
  );
};

export default CartWidget;
