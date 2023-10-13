import { FaSistrix } from "react-icons/fa";
import "./search.css";

function Search() {
    return (
        <div className="search">
            <div className="search-box">
                <span className="search-icon">
                    <FaSistrix />
                </span>
                <input className="search-input" type="text" placeholder="Search" />
            </div>
        </div>
    );
}

export default Search;