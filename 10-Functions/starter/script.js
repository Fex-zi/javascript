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

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstword = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);

  console.log(`Transformed by : ${fn.name}`);
};

transformer('Javascript is the best!', upperFirstword);
transformer('Javascript is the best!', oneWord);

const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

['Jonas', 'Martha', 'Adam'].forEach(high5);

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greeterHey = greet('Hey');

greeterHey('Ifeanyi');
greeterHey('Steven');

greet('Hello')('Ifeanyi');

const greetArr = greeting => name => console.log(`${greeting} ${name}`);
greet('Hey')('Ifeanyi Emmnauel');
*/

const lufthansa = {
  airline: 'Luftansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Ifeanyi Ojukwu');
lufthansa.book(535, 'John Smith');
console.log(lufthansa);

const euroWings = {
  name: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

book(23, 'Sarah Williams');
