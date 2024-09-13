import small_logo from "../images/small_logo.png"

const Footer = () => {
    return (
        <footer>
            <section>
            <div>
                <img src={small_logo} alt="little lemon logo"/>
            </div>
            <div>
                <h3>Document Navigation</h3>
            <ul>
                <li><a href="/home">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/menu">Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/order-online">Order Online</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
            </div>
            <div>
                <h3>Contact</h3>
                <p>Main Street 256, Chicago, Illinois</p>
                <br/>
                <p>+1 345 6789 738</p>
                <br/>
                <p>little.lemon@gmail.com</p>
            </div>
            <div>
                <h3>Social Media Links</h3>
            <ul>
                <li><a>Facebook</a></li>
                <li><a>Instagram</a></li>
                <li><a>TikTok</a></li>
            </ul>
            </div>
            </section>
        </footer>
    )
}

export default Footer;