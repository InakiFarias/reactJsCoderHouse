import "./itemListContainer.css";

export default function ItemListContainer({ greeting }) {
  return (
    <div className="item-list-container">
      <h1>{greeting}</h1>
    </div>
  );
}
