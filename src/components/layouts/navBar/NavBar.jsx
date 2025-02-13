import { Link } from "react-router";
import CartWidget from "../../common/cartWidget/CartWidget";
import "./navBar.css";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <Link to="/">
        <img
          className="nav-bar-img"
          src="https://res.cloudinary.com/dxebfpyws/image/upload/v1738623255/logotipo_scplc3.png"
          alt="Bodega Farias"
        />
      </Link>
      <ul>
        <Link to="/">Todos</Link>
        <Link to="/category/tintos">Tintos</Link>
        <Link to="/category/blancos">Blancos</Link>
        <Link to="/category/espumantes">Espumantes</Link>
      </ul>
      <Link to="cart">
        <CartWidget />
      </Link>
    </nav>
  );
}
