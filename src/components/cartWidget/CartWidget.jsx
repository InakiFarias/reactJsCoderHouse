import "./cartWidget.css";

export default function CartWidget() {
  return (
    <div className="cart-widget">
      <img
        className="cart-widget-img"
        src="../../../public/img/carrito.png"
        alt="Carrito"
      />
      <p>99+</p>
    </div>
  );
}
