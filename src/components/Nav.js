import Logo from "../images/Logo.svg"

const Nav = () => {
    return (
        <nav className="main-nav">
            <img src={Logo} alt="little lemon logo"></img>
            <ul className="main-nav-list">
                <li><a className="nav-link" href="/home">Home</a></li>
                <li><a className="nav-link" href="/about">About</a></li>
                <li><a className="nav-link" href="/menu">Menu</a></li>
                <li><a className="nav-link" href="/reservations">Reservations</a></li>
                <li><a className="nav-link" href="/order-online">Order Online</a></li>
                <li><a className="nav-link" href="/login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;