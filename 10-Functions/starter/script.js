'use strict';

/*
const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 5);

console.log(bookings);
*/

const flight = 'LH234';
const ifeanyi = {
  name: 'Ifeanyi Ojuwku',
  passport: 23457162,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;

  if (passenger.passport === 23457162) {
    alert('Check in');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, ifeanyi);
// console.log(flight, ifeanyi);

// const flightNum = flight;
// const passenger = ifeanyi;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};

newPassport(ifeanyi);
checkIn(flight, ifeanyi);
