'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
};

const account2 = {
  owner: 'Ifeanyi Ojukwu',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const displayMovements = function (movements) {
  containerMovements.innerHTML = '';
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `<div class="movements__row">
          <div class="movements_ _type movements__type--${type}"> ${
      i + 1
    } ${type}</div>
          <div class="movements__value">${mov}</div>
        </div>`;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
//console.log(createUsernames(accounts));

const updateUI = function (acc) {
  //Display movements
  displayMovements(acc.movements);
  //Display balance
  calcDisplayBalance(acc);
  //Display summary
  calcDisplaySummary(acc);
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov);
  labelBalance.textContent = `$${acc.balance}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `$${incomes}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `$${Math.abs(out)}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter(int => int >= 1)
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `$${interest}`;
};

//Event Handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // prevents form from submitting
  e.preventDefault();
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  //console.log(currentAccount);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // Display UI and welcome message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    Number(inputClosePin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    //DELETE account
    accounts.splice(index, 1);

    //Hide UI
    containerApp.style.opacity = 0;
  }
  inputCloseUsername.value = inputClosePin.value = '';
});
//////-----------Testing with movements below----------------////////

console.log(`--- Test Code starts here ---`);
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;

console.log(accounts);
const accountA = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(accountA);

const firstWithdrawal = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawal);

//PIPELINE
const totalDepositUSD = movements
  .filter(mov => mov > 0)
  .map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);
console.log(totalDepositUSD);

const deposits = movements.filter(function (mov) {
  return mov > 0;
});

console.log(deposits);
const withdrawals = movements.filter(function (mov) {
  return mov < 0;
});

console.log(withdrawals);

console.log(`--- Im here ---`);
// accumulator is like SNOWBALL
// const balance = movements.reduce(function (acc, cur, i, arr) {
//   console.log(`Iteration ${i}: ${acc}`);
//   return acc + cur;
// }, 0); // if 100 its starts with 100

const balance = movements.reduce((acc, cur) => acc + cur, 0); // if 100 its starts with 100
console.log(balance);

const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

///////////////////////////////////////
// Coding Challenge #1

/* 
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners about their dog's age, and stored the data into an array (one array for each). For now, they are just interested in knowing whether a dog is an adult or a puppy. A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years old.

Create a function 'checkDogs', which accepts 2 arrays of dog's ages ('dogsJulia' and 'dogsKate'), and does the following things:

1. Julia found out that the owners of the FIRST and the LAST TWO dogs actually have cats, not dogs! So create a shallow copy of Julia's array, and remove the cat ages from that copied array (because it's a bad practice to mutate function parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1 is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy 🐶")
4. Run the function for both test datasets


TEST DATA 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
TEST DATA 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]

*/

const fakedogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];
const dogJulia = fakedogsJulia.slice(1, -2);
//console.log(dogJulia.join(','));

const checkDogs = function (dogs) {
  dogs.forEach(function (arr, i) {
    const check =
      arr >= 3
        ? `Dog number ${i + 1} is an adult, and is ${arr} years old`
        : `Dog number ${i + 1} is still a puppy 🐶`;
    console.log(check);
  });
};

console.log(`---Kate's Dog below---`);
checkDogs(dogsKate);
console.log(`---Julia's Dog below---`);
checkDogs(dogJulia);

///////////////////////////////////////
// Coding Challenge #2

/* 
Let's go back to Julia and Kate's study about dogs. This time, they want to convert dog ages to human ages and calculate the average age of the dogs in their study.

Create a function 'calcAverageHumanAge', which accepts an arrays of dog's ages ('ages'), and does the following things in order:

1. Calculate the dog age in human years using the following formula: if the dog is <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old, humanAge = 16 + dogAge * 4.
2. Exclude all dogs that are less than 18 human years old (which is the same as keeping dogs that are at least 18 years old)
3. Calculate the average human age of all adult dogs (you should already know from other challenges how we calculate averages 😉)
4. Run the function for both test datasets

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

*/
console.log(`----Dog's AGE----`);
const dogAge = [5, 2, 4, 1, 15, 8, 3];
// const calcAverageHumanAge = function (ages) {
//   // 1. Calculate human ages
//   //const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
//   const humanAges = ages.map(function (age) {
//     return age <= 2 ? 2 * age : 16 + age * 4;
//   });
//   return humanAges;
// };

// console.log(calcAverageHumanAge(dogAge));

// const excludeDogs = calcAverageHumanAge(dogAge);

// const NewDogAge = excludeDogs.filter(function (mov) {
//   return mov > 18;
// });
// console.log(NewDogAge);

// const calAvg = NewDogAge.reduce((arr, acc) => arr + acc, 0) / NewDogAge.length;

// console.log(calAvg);

const calcAverageHumanAge = function (ages) {
  // 1. Calculate human ages
  //const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const humanAges = ages.map(function (age) {
    return age <= 2 ? 2 * age : 16 + age * 4;
  });
  const NewDogAge = humanAges.filter(function (mov) {
    return mov >= 18;
  });

  const calAvg =
    NewDogAge.reduce((acc, cur) => acc + cur, 0) / NewDogAge.length;
  return calAvg;
};

console.log(calcAverageHumanAge(dogAge));

console.log(`----Chaining-calcage func------`);
///////////////////////////////////////
// Coding Challenge #3

/* 
Rewrite the 'calcAverageHumanAge' function from the previous challenge, but this time as an arrow function, and using chaining!

TEST DATA 1: [5, 2, 4, 1, 15, 8, 3]
TEST DATA 2: [16, 6, 10, 5, 6, 1, 4]

 😀
*/
const newAgeMehn = [5, 2, 4, 1, 15, 8, 3];
const calcAverageHumanAgeChain = function (ages) {
  // 1. Calculate human ages
  //const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const humanAges = ages =>
    ages
      .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
      .filter(age => age >= 18)
      .reduce((acc, cur) => acc + cur / ages.length, 0);
  //return humanAges;
};
console.log(calcAverageHumanAge(newAgeMehn));
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);
/*
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;
const movementUSD = movements.map(function (mov) {
  return mov * eurToUsd;
});
const movementUS = movements.map(mov => mov * eurToUsd); //arrow function
console.log(movements);
console.log(movementUSD);
console.log(movementUS);

const movementDescription = movements.map(
  (mov, i, arr) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(
      mov
    )}`
);
console.log(movementDescription);
/////////////////////////////////////////////////

let arr = ['a', 'b', 'c', 'd', 'e'];
console.log(arr.join('-'));
console.log(arr.slice(2));
console.log(arr.slice(2, 4));
console.log(arr.slice(-2));
console.log(arr.slice(-1)); //last element of array
console.log(arr.slice(1, -2));
console.log(arr.slice());
console.log(...arr);

//SPLICE
//console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);
arr.splice(1, 2);
console.log(arr);

//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2);

//CONCAT
const letters = arr.concat(arr2);
console.log(letters);
console.log(...arr, ...arr2);
console.log(letters.join(' - '));


const arr = [23, 11, 64];
console.log(arr[0]);
console.log(arr.at(0));
console.log(arr.slice(-1)[0]);
console.log(arr.at(-1)); //last element
console.log('Ifeanyi'.at(-1)); //last element

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// let i;
// for (i = 0; i <= movements.length - 1; i++) {
//   console.log(movements[i]);
// }
//console.log(movements.join(', '));
let counter = 1;
for (const message of movements) {
  console.log(`${counter}: ${message}`);
  counter++;
}

for (const [i, movement] of movements.entries()) {
  //console.log(movement);
  if (movement > 0) {
    console.log(`You deposited ${i + 1}: ${movement}`);
  } else {
    console.log(`You Withdrew ${i + 1}: ${Math.abs(movement)}`);
  }
}
console.log('------Foreach loop below------');

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You Withdrew ${Math.abs(movement)}`);
  }
});

console.log('------Foreach loop with index below------');

movements.forEach(function (move, index, arr) {
  if (move > 0) {
    console.log(`You deposited ${index + 1}: ${move}`);
  } else {
    console.log(`You Withdrew ${index + 1}: ${Math.abs(move)}`);
  }
});

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, _, map) {
  console.log(value);
});
*/
