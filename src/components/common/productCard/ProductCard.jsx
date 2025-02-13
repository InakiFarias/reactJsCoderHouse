import { Link } from "react-router";
import "./productCard.css";

const ProductCard = ({ title, imgUrl, price, id }) => {
  return (
    <div className="product-card">
      <h3 className="product-card-title">{title}</h3>
      <img className="product-card-img" src={imgUrl} alt="" />
      <p className="product-card-price">${price}</p>
      <Link to={`/product/${id}`}>
        <button className="product-details">Ver detalles</button>
      </Link>
    </div>
  );
};

export default ProductCard;
