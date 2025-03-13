import ItemListContainer from "./components/pages/itemListContainer/ItemListContainer.jsx";
import NavBar from "./components/layouts/navBar/navBar.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import Cart from "./components/pages/cart/cart.jsx";
import ItemDetail from "./components/pages/itemDetail/ItemDetail.jsx";
import CartContextProvider from "./context/CartContext.jsx";
import { Toaster } from "sonner";
import Checkout from "./components/pages/checkout/Checkout.jsx";

function App() {
  return (
    <BrowserRouter>
      <CartContextProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:cat" element={<ItemListContainer />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/product/:id" element={<ItemDetail />} />
          <Route path="/checkout" element={<Checkout />} />

          <Route path="*" element={<h2>ERROR 404</h2>} />
        </Routes>
      </CartContextProvider>
      <Toaster duration={2000} />
    </BrowserRouter>
  );
}

export default App;
