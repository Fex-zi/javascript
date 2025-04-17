'use strict';// helps for debugging 
/*
let HasDriversLicense = false;

const passTest = true;

 if(passTest) HasDriversLicense = true;
 if(HasDriversLicense) console.log('I can drive well :D');

 //functions
 function logger() {
    console.log('My name is Ifeanyi');
 }

 // calling / running/ invoking the function
 logger();

 function fruitProcessor1(apples, oranges){
   // console.log(apples, oranges);
    const juice =`Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
 }
 
 const appleJuice = fruitProcessor1(5, 0);
 console.log(appleJuice);

const appleOrangeJuice = fruitProcessor1(2,4);
console.log(appleOrangeJuice);

//function declarations
function calcAge1(birthYear){
    return 2037 - birthYear;
}

const age1 =  calcAge1(1991);

//function expressions
const calcAge2 = function(birthyear){
    return 2037 - birthyear;
}

const age2 =  calcAge1(1991);
console.log(age1, age2);

//arrow function
const calcAge3 = birthyear => 2037 - birthyear;
const age3 = calcAge3(1991);
console.log(age3);


 

console.log(yearUntilRetirement(1993, 'Ifeanyi'));
console.log(yearUntilRetirement(1992, 'Paige'));

function cutfruits(fruits){

    return fruits * 4;
}

function fruitProcessor(apples, oranges){
    const cutApple = cutfruits(apples);
    const cutOranges = cutfruits(oranges);
     const juice =`Juice with ${cutApple} pieces of apples and ${cutOranges} pieces of oranges.`
     return juice;
  }
  
  //const fruitCuter = fruitProcessor(2, 5); //8, 20

  console.log(fruitProcessor(2, 5));

 

  ///////////////////////////////////////
// Reviewing Functions
const calcAge = function (birthYear) {
    return 2037 - birthYear;
  }
  
  const yearsUntilRetirement = function (birthYear, firstName) {
    const age = calcAge(birthYear);
    const retirement = 65 - age;
  
    if (retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`); // won't work if placed after return.
      return retirement;
    } else {
      console.log(`${firstName} has already retired 🎉`); // won't work if placed after return.
      return `retired`;
    }
  }
  
  console.log(yearsUntilRetirement(1991, 'Jonas'));
  console.log(yearsUntilRetirement(1950, 'Mike'));
  
  
  ///////////////////////////////////////

//code challenge

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(3, 4, 5));
 
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
 
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log('No team wins...');
  }
};
 
checkWinner(scoreDolphins, scoreKoalas);


const friends = ['Michael', 'steven', 'peter']; 
console.log(friends);
console.log(friends.length);
console.log(friends[friends.length-1]); // the last item in array 3 -1 =2, peter is 2 in array( 0,1,2)

 friends[2] = 'Jay'; // const with array can chnage so you dont need let
 console.log(friends); //'Michael', 'steven', 'Jay'

 const ify = ['ifeanyi', 'ojukwu', 2025 - 1993, 'teachers', friends];
 console.log(ify);

 const calcAge2 = function(birthyear){
  return 2037 - birthyear;
}

const years = [1990, 1967, 2002, 2010, 2018];

const age1= calcAge2(years[0]);
const age2= calcAge2(years[1]);
const age3= calcAge2(years[years.length -1 ]);

console.log(age1, age2, age3);

const ages = [calcAge2(years[0]), calcAge2(years[1]), calcAge2(years[years.length -1 ])];
console.log(ages);

*/



const friends = ['Michael', 'steven', 'peter']; 
//add elements to the end
const newlength = friends.push('jay'); 
console.log(friends);
console.log(newlength);

//add element to the beginning
friends.unshift('john');
console.log(friends);

//remove elements
friends.pop();//last
const popped =  friends.pop();//remove the last again
console.log(popped);
console.log(friends);

friends.shift();// remove first
console.log(friends);

console.log(friends.indexOf('steven')); //1 

console.log(friends.includes('steven'));

friends.push(23)
console.log(friends.includes(23));// incluses is strict

if (friends.includes('steven')){
    console.log('You have a friend called steven'); 
}

/* code challenge 🙂 */

function calcTip(tip){
    return tip >= 50 && tip <=300 ? tip*0.15 : tip*0.2;
    
   
}

const bills = [125,555,44];

const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];

const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
 
console.log(bills, tips, totals);

//console.log(totals);
