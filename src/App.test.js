import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import BookingForm from './components/BookingForm';
import {fetchAPI, initializeTimes, updateTimes, submitAPI} from './components/Main'

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={{times:[]}} dispatch={expect.anything()}/>);
  const headingElement = screen.getByText("Reserve your table");
  expect(headingElement).toBeInTheDocument();
});

test('initializeTimes function returns the correct value', () => {
  const initialState = initializeTimes();
  const today = new Date();
  const expectResult = {times: fetchAPI(today)};
  expect(initialState).toEqual(expectResult);
});

test('updateTimes function returns the correct value', () => {
  const state = initializeTimes();
  const date = new Date();
  const newState = updateTimes(state, date);
  expect(newState).toEqual(state);
});

test('submitAPI returns true', () => {
  const formData = {
    date: '2024-10-12',
    time: '19:00',
    guests: '3',
    occasion: 'Wedding',
  };
  const result = submitAPI(formData);
  expect(result).toBe(true);
});

test('Check if local storage is working', () => {
  const formData = {
    date: '2024-10-12',
    time: '19:00',
    guests: '3',
    occasion: 'Wedding',
  };
  localStorage.setItem('data', JSON.stringify(formData));
  const checkData = localStorage.getItem('data');
  const jsonData = JSON.parse(checkData);
  expect(jsonData).toEqual(formData);
});

test('Check if the field guest is invalid', async () => {
  render(<BookingForm availableTimes={{times:[]}} dispatch={expect.anything()}/>);
  const guestElement = screen.getByRole('guests');
  await userEvent.type(guestElement, '12');
  expect(guestElement).toBeInvalid();
});

test('Check if the field guest is valid', async () => {
  render(<BookingForm availableTimes={{times:[]}} dispatch={expect.anything()}/>);
  const guestElement = screen.getByRole('guests');
  await userEvent.type(guestElement, '6');
  expect(guestElement).toBeValid();
});

