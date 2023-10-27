import {Link, NavLink} from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">Torres de Buenos Aires</Link>

                <ul className="nav justify-content-center">
                    <li className="nav-item">
                        <NavLink to="/category/arañas" className="nav-link">Arañas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/lamparas" className="nav-link">Lamparas</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/category/sconces" className="nav-link">Apliques</NavLink>
                    </li>
                </ul>

                    <NavLink to="/cart">
                        <CartWidget />
                    </NavLink>
            
            </div>
        </nav>
    )
};

export default NavBar;