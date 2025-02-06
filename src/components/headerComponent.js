import { Link } from "react-router-dom";
import "./header.css"

function HeaderComponent() {
    return (
        <nav className="nav">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/about-us" >About Us</Link>
            <Link className="nav-link" to="/services">Services</Link>
            <Link className="nav-link" to="/doctors">Doctors</Link>
            <Link className="nav-link" to="/news">News</Link>
            <Link className="nav-link" to="/contact">Contact</Link>
        </nav>
    )
}

export default HeaderComponent