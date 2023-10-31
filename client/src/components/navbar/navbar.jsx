import Logo from "../logo/logo";
import Menu from "../menu/menu";
import Search from "../search/search";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="nav">
            <Link to={`/`}>
                <Logo />
            </Link>
            <Search />
            <Menu />
        </nav>
    )
}

export default Navbar;