import { Link } from 'react-router-dom';
import logo from './assets/logo.png'; 

function Nav() {
    return (
        <nav>
            <img src={logo} alt="Little Lemon Logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/booking">Reservations</Link></li>
                {/* Add other links from your Figma design here */}
            </ul>
        </nav>
    );
}

export default Nav;