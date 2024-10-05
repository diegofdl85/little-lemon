import small_logo from "../images/small_logo.png"
import {contacts, social} from "../data"
import { Link as LinkS } from 'react-scroll';

const Footer = () => {
    const contactLinks = contacts.map(({link, id, title}) => {
        return(
        <li key={id}>
            <a href={link} className="contact-links">
                {title}
            </a>
        </li>
        );
    });

    const socialLinks = social.map(({id, child, link}) => {
        return (
            <li key={id}>
                <a href={link} target={'_blank'} rel='noreferrer' className="social-links">
                    {child}
                </a>
            </li>
        );
    });

    return (
        <footer name='contact'>
            <nav className="footer-container">
                <div className="footer-photo-container">
                    <img src={small_logo} alt='logo' className="footer-photo" />
                </div>
                <ul className="grid-item-nav">
                    <p className="footer-title">Document Navigation</p>
                    <li key="1">
                        <LinkS to="/home" smooth duration={550} className="footer-links">Home</LinkS>
                    </li>
                    <li key="2">
                        <LinkS to="/about" smooth duration={550} className="footer-links">About</LinkS>
                    </li>
                    <li key="3">
                        <LinkS to="/menu" smooth duration={550} className="footer-links">Menu</LinkS>
                    </li>
                    <li key="4">
                        <LinkS to="/reservations" smooth duration={550} className="footer-links">
                        Reservations
                        </LinkS>
                    </li>
                    <li key="5">
                        <LinkS to="/order-online" smooth duration={550} className="footer-links">
                        Order Online
                        </LinkS>
                    </li>
                    <li key="6">
                        <LinkS to="/login" smooth duration={550} className="footer-links">Login</LinkS>
                    </li>
                </ul>
                <ul className="grid-item-contact">
                    <p className="footer-title">Contact</p>
                    <address>
                        <div className="contacts-address">
                            Little Lemon
                            <br />
                            331 E Chicago
                            <br />
                            LaSalle Street Chicago, Illinois 60602
                            <br />
                            USA
                            <br />
                            <br />
                        </div>
                        <div className='contacts'>{contactLinks}</div>
                    </address>
                </ul>
                <ul className="grid-item-socials">
                    <p className="footer-title">Social Media</p>
                    {socialLinks}
                </ul>
            </nav>
        </footer>
    );
}

export default Footer;