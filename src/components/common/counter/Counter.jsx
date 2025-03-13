import { useContext, useState } from "react";
import "./counter.css";
import { CartContext } from "../../../context/CartContext";

const Counter = ({ product }) => {
  const [count, setCount] = useState(1);
  const { addToCart } = useContext(CartContext);

  const sumar = () => {
    if (count < product.stock) setCount(count + 1);
  };

  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  const onAdd = () => {
    let prodToCart = { ...product, quantity: count };
    addToCart(prodToCart);
    setCount(1);
  };

  return (
    <div>
      <div className="counter">
        <button onClick={restar}>-</button>
        <p>{count}</p>
        <button onClick={sumar}>+</button>
      </div>
      <button onClick={onAdd} className="button-add">
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
