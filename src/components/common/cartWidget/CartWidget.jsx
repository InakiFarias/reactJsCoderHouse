import "./cartWidget.css";

export default function CartWidget() {
  return (
    <div className="cart-container">
      <div className="cart-icon-wrapper">
        <img
          src="https://res.cloudinary.com/dxebfpyws/image/upload/v1738623232/carrito_k6rhts.png"
          alt="Carrito"
          className="cart-icon"
        />
        <div className="cart-counter">3</div>
      </div>
    </div>
  );
}
