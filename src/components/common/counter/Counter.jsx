import { useState } from "react";
import "./counter.css";

const Counter = ({ product }) => {
  const [count, setCount] = useState(1);

  const sumar = () => {
    if (count < product.stock) setCount(count + 1);
  };

  const restar = () => {
    if (count > 1) setCount(count - 1);
  };

  const addToCart = () => {
    let prodToCart = { ...product, quantity: count };
    console.log(prodToCart);
    setCount(1);
  };

  return (
    <div>
      <div className="counter">
        <button onClick={restar}>-</button>
        <p>{count}</p>
        <button onClick={sumar}>+</button>
      </div>
      <button onClick={addToCart} className="button-add">
        Agregar al carrito
      </button>
    </div>
  );
};

export default Counter;
