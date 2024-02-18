import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <h1>Tienda Sin Nombre </h1>
      </Link>

        <nav>
            <ul>
           
            <li>
                  <NavLink to="/categoria/1">
                    Almacenamiento
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/2">
                    Cables
                  </NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/3">
                    Refrigeracion
                  </NavLink>
                </li>

            </ul>
        </nav>
        
        <CartWidget/>

    </header>
  )
}

export default NavBar