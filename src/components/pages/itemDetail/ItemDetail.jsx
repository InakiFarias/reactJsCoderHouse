import "./itemDetail.css";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import Counter from "../../common/counter/Counter.jsx";
import { db } from "../../../firebaseConfig.js";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const productsCollection = collection(db, "products");
    const refDoc = doc(productsCollection, id);
    const getProduct = getDoc(refDoc);
    getProduct.then((res) => {
      setProduct({ id: res.id, ...res.data() });
    });
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
