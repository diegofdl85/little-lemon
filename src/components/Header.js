import restfood from "../images/restauranfood.jpg"

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
            <button>Reserve a table</button>
            </div>
            <div>
                <img src={restfood} alt="food restaurant"></img>
            </div>
            </section>
        </header>
    )
}

export default Header;