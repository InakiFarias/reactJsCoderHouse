import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import NavBar from "./components/layouts/navBar/navBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Cart from "./components/pages/cart/cart.jsx";
import ItemDetail from "./components/pages/itemDetail/ItemDetail.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:cat" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ItemDetail />} />

        <Route path="*" element={<h2>ERROR 404</h2>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
