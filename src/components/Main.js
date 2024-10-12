import { Routes, Route, useNavigate } from 'react-router-dom';
import Homepage from './Homepage';
import BookingPage from './BookingPage';
import ConfirmedBooking from './ConfirmedBooking';
import { useReducer, useState } from 'react';

export const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

export const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};

export const submitAPI = function(formData) {
    return true;
};

export const initializeTimes = () => {
    const today = new Date()
    return {times: fetchAPI(today)};
};

export const updateTimes = (state, date) => {
    return {...state, times: fetchAPI(new Date(date))};
};



const Main = () => {

    const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
    const navigate = useNavigate();

    const submitForm = (formData) => {
        if (submitAPI(formData)) {
            navigate('/confirmed');
        }
    }
    return (
        <>
            <Routes>
                <Route path='/' element={<Homepage />} />
                <Route
                path='/booking'
                element={<BookingPage
                 availableTimes={availableTimes}
                 dispatch={dispatch}
                 submitForm={submitForm}/>} />
                <Route path='/confirmed' element={<ConfirmedBooking />} />
            </Routes>
        </>
    )
}

export default Main;