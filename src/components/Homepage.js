import Header from "./Header"
import Nav from "./Nav"
import Specials from "./Specials";
import Testimonials from "./Testimonials";
import About from "./About";
import Footer from "./Footer";

const Homepage = () => {
    return (
        <>
        <Nav/>
        <main>
            <Header/>
            <Specials/>
            <Testimonials/>
            <About/>
        </main>
        <Footer/>
        </>
    );
};

export default Homepage;