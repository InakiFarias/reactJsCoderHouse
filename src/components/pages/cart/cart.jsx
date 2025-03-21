import { useContext } from "react";
import "./cart.css";
import { CartContext } from "../../../context/CartContext";
import { Link } from "react-router";

const Cart = () => {
  const { cart, clearCart, removeById, getTotalAmount } =
    useContext(CartContext);

  return (
    <div className="cart">
      <div className="cart-items">
        {cart.map((product) => (
          <div className="cart-item" key={product.id}>
            <img src={product.imageUrl} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Cantidad: {product.quantity}</p>
            <p>${product.price * product.quantity}</p>
            <button onClick={() => removeById(product)}>Eliminar</button>
          </div>
        ))}
      </div>

      {cart.length > 0 ? (
        <div>
          <p className="cart-total">Total a pagar: ${getTotalAmount()}</p>
          <div className="cart-buttons">
            <button onClick={clearCart}>Vaciar carrito</button>
            <Link to="/checkout">
              <button>Finalizar compra</button>
            </Link>
          </div>
        </div>
      ) : (
        <h1 className="empty-cart">Carrito vacio</h1>
      )}
    </div>
  );
};

export default Cart;
