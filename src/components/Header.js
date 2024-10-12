import restfood from "../images/restauranfood.jpg"
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <section>
            <div id="header-script">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>We are a family owned Mediterranean restaurant, focused on traditional
               recipes served with a modern twist.
            </p>
            <Link to='/booking'><button>Reserve a table</button></Link>
            </div>
            <div>
                <img src={restfood} alt="food restaurant"></img>
            </div>
            </section>
        </header>
    )
}

export default Header;