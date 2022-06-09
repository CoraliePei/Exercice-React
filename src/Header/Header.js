import './Header.css';
import { Outlet,Link } from 'react-router-dom'

function Header() {
  return (
    <div className="Header">
        <header className="App-header">
            <div id="logoHeader">

            </div>
            <nav>
                <ul>
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/message">Message</Link>
                    </li>
                    <li>
                      <Link to="/produit">Produit</Link>
                    </li>
                </ul>
            </nav>
        </header>
      <Outlet />
    </div>
  );
}

export default Header;