import CartWidget from "../cartWidget/CartWidget";
import "./navBar.css";

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <img
        className="nav-bar-img"
        src="../../../public/img/logotipo.png"
        alt="Bodega Farias"
      />
      <ul>
        <li>
          <a href="">Tintos</a>
        </li>
        <li>
          <a href="">Blancos</a>
        </li>
        <li>
          <a href="">Espumantes</a>
        </li>
      </ul>
      <CartWidget />
    </nav>
  );
}
