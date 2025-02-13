import { useState } from "react";
import "./itemListContainer.css";
import { useEffect } from "react";
import productsData from "../../../products.js";
import ProductCard from "../../common/productCard/ProductCard.jsx";
import { useParams } from "react-router";

export default function ItemListContainer() {
  const { cat } = useParams();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (cat) {
      let productosFiltrados = productsData.filter(
        (product) => product.category === cat
      );
      setProducts(productosFiltrados);
    } else {
      setProducts(productsData);
    }
  }, [cat]);

  return (
    <div className="item-list">
      <h1 className="item-list-title">Productos</h1>
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
    </div>
  );
}
