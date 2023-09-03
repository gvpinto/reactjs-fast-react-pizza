import { Link } from "react-router-dom";
import SearchOrder from "../features/order/searchOrder";

function Header() {
    return (
        <header>
            <Link to="/">Fast React Pizze Co.</Link>
            <SearchOrder />
        </header>
    );
}

export default Header;
