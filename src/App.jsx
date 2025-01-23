import ItemListContainer from "./components/itemListContainer/ItemListContainer";
import NavBar from "./components/navBar/navBar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Bienvenido a Bodega Farías" />
    </div>
  );
}

export default App;
