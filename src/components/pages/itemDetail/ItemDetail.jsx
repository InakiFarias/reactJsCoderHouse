import "./itemDetail.css";
import { useParams } from "react-router";
import products from "../../../products.js";
import { useEffect, useState } from "react";
import Counter from "../../common/counter/Counter.jsx";

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    let productId = products.find((product) => product.id === Number(id));
    setProduct(productId);
  }, [id]);

  return (
    <div className="item-detail">
      <h1>{product.title}</h1>
      <img src={product.imageUrl} alt="" />
      <p>{product.price}</p>
      <Counter product={product} />
    </div>
  );
};

export default ItemDetail;
