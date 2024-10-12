import Logo from "../images/Logo.svg"
import {Link as LinkS} from 'react-scroll'

const Nav = () => {
    return (
        <nav className="main-nav">
            <img src={Logo} alt="little lemon logo"></img>
            <ul className="main-nav-list">
                <li key="1"><a className="nav-link" href="/">Home</a></li>
                <li key="2">
                    <LinkS to="about" smooth duration={550} className="nav-link">About</LinkS>
                </li>
                <li key="3"><a className="nav-link" href="/menu">Menu</a></li>
                <li key="4"><a className="nav-link" href="/booking">Reservations</a></li>
                <li key="5"><a className="nav-link" href="/order-online">Order Online</a></li>
                <li key="6"><a className="nav-link" href="/login">Login</a></li>
            </ul>
        </nav>
    )
}

export default Nav;