import { useEffect, useState } from "react";
import Logo from '../images/Logo.svg';
import {Link} from 'react-router-dom';

const ConfirmedBooking = () => {
    const [reservedDetails, setReservedDetails] = useState('');

    useEffect( () => {
        const data = localStorage.getItem('bookings');
        if (data !== null) {
            setReservedDetails(JSON.parse(data));
        }
    })
    return(
    <section name='booking-confirmation' className='booking-confirmation'>
      <img src={Logo} alt='logo' className='confirmation-logo' />
      <h1 className='confirmation-confirmed'>Your reservation is confirmed!</h1>
      <div className='confirmation-details-container'>
        <h2>
          DATE:{' '}
          <span className='confirmation-details'>{reservedDetails.date}</span>
        </h2>
        <h2>
          TIME:{' '}
          <span className='confirmation-details'>{reservedDetails.time}</span>
        </h2>
        <h2>
          GUESTS:{' '}
          <span className='confirmation-details'>{reservedDetails.guests}</span>
        </h2>
        <h2>
          OCCASION:
          <span className='confirmation-details'>
            {' '}
            {reservedDetails.occasion}
          </span>
        </h2>
       </div>
       <Link to='/'><button>Return to the Homepage</button></Link>
    </section>

    )
}

export default ConfirmedBooking;