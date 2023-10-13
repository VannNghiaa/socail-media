import Logo from "../logo/logo";
import Menu from "../menu/menu";
import Search from "../search/search";
import "./navbar.css";

function Navbar() {
    return (
        <nav className="nav">
            <Logo />
            <Search />
            <Menu />
        </nav>
    )
}

export default Navbar;