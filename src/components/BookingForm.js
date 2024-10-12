import { useEffect, useState } from "react";
import "./Booking.css";

const BookingForm = (props) => {
    const {times} = props.availableTimes;
    const [bookings, setBookings] = useState({
        date: '',
        time: '',
        guests: '',
        occasion: ''
    });

    useEffect(() => {
        localStorage.setItem('bookings', JSON.stringify(bookings))
    }, [bookings]);


    const handleSubmit = e => {
        e.preventDefault();
        props.submitForm(e.target);
    }

    const handleChange = e => {
        const {name, value} = e.target
        setBookings({...bookings, [name]: value});
    };

    return (
        <section
          name="reservations"
          className="booking-form"
          onSubmit={handleSubmit}
          aria-label="On Submit">
            <div className="bookings-container">
                <h2 className="booking-header">Little Lemon, Chicago</h2>
                <h2 className="booking-title">Reserve your table</h2>
                <form className="form-container"  aria-label="On Submit">
                    <label htmlFor="res-date">Choose a date</label>
                    <input
                      type="date"
                      name="date"
                      id="res-date"
                      required
                      value={bookings.date}
                      onChange={e => {
                        setBookings({...bookings, date: e.target.value})
                        props.dispatch(e.target.value)}}
                      aria-label="On Change"/>
                    <label htmlFor="res-time">Choose a time</label>
                    <select
                      id="res-time"
                      name="time"
                      required
                      value={bookings.time}
                      onChange={handleChange}
                      aria-label="On Change">
                        {times.map(time => {return <option key={time}>{time}</option>
                        })}
                    </select>
                    <label htmlFor="guests">Number of guests</label>
                    <input
                      type="number"
                      placeholder="1-10"
                      min="1" max="10"
                      id="guests"
                      name="guests"
                      value={bookings.guests}
                      required
                      aria-label="On Change"
                      onChange={handleChange}/>
                    <label htmlFor="occasion">Occasion</label>
                    <select
                      id="occasion"
                      name="occasion"
                      value={bookings.occasion}
                      aria-label="On Change"
                      onChange={handleChange}
                      required>
                        <option>None</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Wedding</option>
                    </select>
                    <input type="submit" className="booking-button" value="Make Your reservation"/>
                </form>
            </div>
        </section>
    );
};

export default BookingForm;