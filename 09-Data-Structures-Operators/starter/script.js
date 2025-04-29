'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
// Split and join
console.log('a+very+nice+string'.split('+'));
console.log('Ifeanyi Ojukwu'.split(' '));

const [firstName, lastName] = 'Ifeanyi Ojukwu'.split(' ');

// for arrays join(), and split for non array
const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];

  for (const n of names) {
    namesUpper.push(n[0].toUpperCase() + n.slice(1));
  }
  console.log(namesUpper.join(' '));
};

capitalizeName('jessica ann smith davis');
capitalizeName('ifeanyi ojukwu');

/*
<?php //php version
[$firstName, $lastName] = explode(' ', 'Ifeanyi Ojukwu');

// For arrays use implode(), and explode for strings
$newName = implode(' ', ['Mr.', $firstName, strtoupper($lastName)]);
echo $newName . PHP_EOL;// versatile line break

function capitalizeName($name) {
    $names = explode(' ', $name);
    $namesUpper = [];

    foreach ($names as $n) {
        $namesUpper[] = ucfirst($n); // PHP has ucfirst() for capitalizing first letter
    }
    echo implode(' ', $namesUpper) . PHP_EOL;
}

capitalizeName('jessica ann smith davis');
capitalizeName('ifeanyi ojukwu');
?>
const airline = 'TAP AIR USA';
const plane = 'A320';
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

const email = 'hello@gmail.com';
const logEmail = ' HELLO@gmail.com \n';

const lowerEmail = logEmail.trim().toLowerCase();
console.log(lowerEmail);

//replcae price
const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS);

const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replaceAll('door', 'gate'));
console.log(announcement.replace('door', 'gate'));
console.log(announcement.replace(/door/g, 'gate')); // regular expression, g for global

const planes = 'Airbus A320neo';
console.log(planes.includes('A320'));
console.log(planes.includes('Boeing'));
console.log(planes.startsWith('Airb'));

if (planes.startsWith('Airbus') && planes.endsWith('neo')) {
  console.log('Part of the New Airbus family');
}

//security
const checkBaggage = function (items) {
  const baggage = items.toLowerCase();

  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');


console.log(plane[0]);
console.log(airline.indexOf('A')); //1 CASE SENSITIVE
console.log(airline.lastIndexOf('A')); //10

console.log(airline.slice(4));
console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(' ')));
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B AND E ARE MIDDLE SEATS
  const s = seat.slice(-1); //-1 gets last character 0 is first
  if (s === 'B' || s === 'E') console.log('You got the middle seat');
  else console.log('You got lucky 😎');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');


const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, openingHours, tags);

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//switching variables

// const temp = main;
// main = secondary;
// secondary = temp;

[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//neested destructuring
const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

// Default values
const { p = 1, q = 1, r = 4 } = [8, 9];
console.log(p, q, r);
*/
