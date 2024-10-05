import Cards from "./Cards"

const Specials = () => {
    return (
        <section className="specials">
            <div className="specials-header">
                <h2 className="specials-title">This week's Specials!</h2>
                <button>Online Menu</button>
            </div>
            <Cards/>
        </section>
    );
};

export default Specials;