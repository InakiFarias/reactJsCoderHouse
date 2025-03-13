import { useState } from "react";
import "./itemListContainer.css";
import { useEffect } from "react";
import ProductCard from "../../common/productCard/ProductCard.jsx";
import { useParams } from "react-router";
import { PropagateLoader } from "react-spinners";
import { db } from "../../../firebaseConfig.js";
import { getDocs, collection, query, where } from "firebase/firestore";

export default function ItemListContainer() {
  const { cat } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const productsCollection = collection(db, "products");
    let queryDb = productsCollection;
    if (cat) {
      queryDb = query(productsCollection, where("category", "==", cat));
    }
    const getProducts = getDocs(queryDb);
    getProducts.then((res) => {
      let newArray = res.docs.map((element) => {
        return { id: element.id, ...element.data() };
      });
      setProducts(newArray);
    });
  }, [cat]);

  return (
    <div className="item-list">
      <h1 className="item-list-title">Productos</h1>
      {products.length === 0 ? (
        <PropagateLoader size={15} />
      ) : (
        <div className="item-list-container">
          {products.map((product) => {
            return (
              <ProductCard
                key={product.id}
                title={product.title}
                imgUrl={product.imageUrl}
                price={product.price}
                id={product.id}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
