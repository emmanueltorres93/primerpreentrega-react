import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Torres de Buenos Aires Iluminacion</a>

                <ul className="Navbar-nav me-auto">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Arañas</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Apliques</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Lamparas</a>
                    </li>
                </ul>

                <CartWidget/>
            </div>
        </nav>
    );
};

export default NavBar;

