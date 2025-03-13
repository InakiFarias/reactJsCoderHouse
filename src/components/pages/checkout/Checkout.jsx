import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartContext";
import { db } from "../../../firebaseConfig";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";
import { PropagateLoader } from "react-spinners";
import "./Checkout.css";

const Checkout = () => {
  const { cart, getTotalAmount, finalizePurchase } = useContext(CartContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [orderId, setOrderId] = useState(null);
  const [isLoading, setLoading] = useState(false);

  const handleSubmit = (evento) => {
    evento.preventDefault();
    setLoading(true);

    const order = {
      buyer: user,
      items: cart,
      total: getTotalAmount(),
    };

    const refCollection = collection(db, "orders");
    const response = addDoc(refCollection, order);
    response.then((res) => {
      setOrderId(res.id);
      finalizePurchase();
      setLoading(false);
    });

    const productsCollection = collection(db, "products");
    order.items.forEach((item) => {
      const productsRef = doc(productsCollection, item.id);
      updateDoc(productsRef, { stock: item.stock - item.quantity });
    });
  };

  const handleChange = (evento) => {
    const { value, name } = evento.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <div className="checkout-container">
      {orderId ? (
        <h1>Gracias por su compra, su ticket es: {orderId}</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="nombre"
            name="name"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="telefono"
            name="phone"
            onChange={handleChange}
          />

          <button type="submit" disabled={isLoading}>
            Comprar
          </button>
          <button type="button">Cancelar</button>
        </form>
      )}
      {isLoading && (
        <div className="loader">
          <PropagateLoader size={15} />
        </div>
      )}
    </div>
  );
};

export default Checkout;
