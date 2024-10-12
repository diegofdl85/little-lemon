import { render, screen } from '@testing-library/react';
import App from './App';
import BookingForm from './components/BookingForm';
import {initializeTimes, updateTimes} from './components/Main'

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={{times:[]}} dispatch={expect.anything()}/>);
  const headingElement = screen.getByText("Reserve your table");
  expect(headingElement).toBeInTheDocument();
});

test('initializeTimes function returns the correct value', () => {
  const initialState = initializeTimes();
  const expectResult = {times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']};
  expect(initialState).toEqual(expectResult);
});

test('updateTimes function returns the correct value', () => {
  const state = {times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00']};
  const date = new Date();
  const newState = updateTimes(state, date);
  expect(newState).toEqual(state);
});
