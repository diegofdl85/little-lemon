import { testimonials } from "../data";
import star from "../images/star.png"
const Testimonials = () => {
    const testimonialData = testimonials.map(({id, image, name}) => {
        return(
            <div key={id} className="testimonials-map-container">
                <img src={image} className='testimonials-image' />
                <div className='testiomnials-star'>
                    <img src={star} alt='ratings' className='testimonials-star' />
                    <img src={star} alt='ratings' className='testimonials-star' />
                    <img src={star} alt='ratings' className='testimonials-star' />
                    <img src={star} alt='ratings' className='testimonials-star' />
                </div>
                <p className='testimonials-name'>{name}</p>
                <p className='testimonials-description'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto,
                reiciendis. Possimus voluptas perspiciatis nisi eveniet odit
                doloribus.
                </p>
            </div>
        );
    });
    return (
        <section name='testimonials' className='testimonials'>
            <div className='testimonials-header'>
                <h2 className='testimonials-title'>Testimonials</h2>
                <h3 className='testimonials-details'>read what other have to say</h3>
                <div className='testimonials-background'>
                    <div className='testimonials-container'>{testimonialData}</div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;