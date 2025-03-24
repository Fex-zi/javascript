/*
let js = 'amazing' ;
console.log(40+8+23-10);

console.log('ifeanyi-E');

let firstname = 'Ifeanyi';

console.log(firstname);
console.log(firstname);
console.log(firstname);

//dont  use uppercase to start variable cuz it will be used in OOP unless formulars like PI

//let Person = 'john';

let PI = 3.14;

let country = 'Portugal';
let continent = 'Europe';
let population = 10;

console.log(country);
console.log(continent);
console.log(population);



let javascriptisFun = true;
console.log(javascriptisFun);

console.log(typeof javascriptisFun);
console.log(typeof true);
console.log(typeof 23);
console.log(typeof 'jonas');

//reassign/mutate variable/
javascriptisFun = 'YES!';
console.log(javascriptisFun);

//undefined
let year;
console.log(year);
console.log(typeof year);

//dynamic typing
year = 1993;
console.log(typeof year);

console.log(typeof null);


//const variable can't be changed, but let can and var is the old let, but dont use it
//example  

let age =30;
age =36;
let ageA; // good

const bithyear = 1992;
//bithyear = 1990; //can't work
//const ageB; // cant work;


//math operator
const now = 2037
const  ageJonas = now -1991;
const ageIfeanyi = now -2002;
console.log(ageJonas, ageIfeanyi);

console.log(ageJonas *2, ageJonas/2, 2**3);
// 2**3 means 2 to the power of 3 = 2 * 2 * 2

const firstName = 'joe';
const lastName = 'eddie';
console.log(firstName + ' ' +lastName);

let x = 10 + 5; //15
x+= 10; //x = x + 10 (15+10 = 25)
x*= 4; //x = x * 4 = 100
x++; // 100 + 1 =101
x--; // 101 - 1 = 100
console.log(x);

//comparison operator
console.log(ageJonas > ageIfeanyi); //>, <, >=, <=
console.log(ageJonas >= 23);

const isFullAge = ageJonas >= 18;

console.log(now - 1991 > now - 2018);


const now = 2037
const  ageJonas = now -1991;
const ageIfeanyi = now -2002;


console.log(now - 1991 > now - 2018);

//operators precedence(like pedmas)
let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10, from right to left
console.log(x,y); // 10, 10

const averageAge = (ageJonas + ageIfeanyi)/2 // the ()calculates first, without the ()calculation would start from the right'55.5 wrong', right ans is 32.5
console.log(ageJonas, ageIfeanyi, averageAge);


// exercise code here 🙂 

const mass = 3;
const height = 5;
const mass2 = 6;
const height2 = 9;
const MassHeight = mass / (height * height);
//or
const MassHeightNew = mass / height ** 2;
const MassHeightNew2 = mass2 / height2 ** 2;
const biggest = MassHeightNew > MassHeightNew2;

console.log(MassHeight, MassHeightNew, MassHeightNew2, biggest);


const firstname = 'Ifeanyi';
const job = 'web developer';
const birthYear = 1993;
const Year = 2037;

const ify = "I'm " + firstname + ', a ' + (Year - birthYear) + ' years old ' + job + '!';

console.log(ify);

//template literal strings
const IfyNew = `I'm ${firstname}, a ${Year-birthYear} years old ${job}`;
console.log(IfyNew);

console.log(`you can also \n\ use this`);
console.log(`you can 
also
use this`);


const age = 19;
const AgeNew = 15;
const IsOldEnough = AgeNew >= 18;
const YearsLeft = 18 - AgeNew;

if(IsOldEnough) {
    console.log(`sarah can start driving 😎`);
} else {
    console.log(`Sarah can't drive now. Wait another ${YearsLeft} Years`);
}

const birthYear = 1998
let century;
if(birthYear <=2000){
    century = 20;
} else {
    century = 21;
}
console.log(`${century} century`);

// practise code below 🙂 
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);


let Bmi;
if(BMIMark > BMIJohn){
    Bmi = `Mark's BMI ${BMIMark} is higher than John's ${BMIJohn}!`;
} else {
    Bmi = `John's BMI ${BMIJohn} is higher than Mark's ${BMIMark}!`;
}
console.log(Bmi);

*/

//Type conversion 
const inputYear = 1991;
console.log(Number(inputYear) + 18);

console.log(String(23)); //NOT RELEVANT
//NUMBER, STRING, BOOLEAN

//Type coercion
console.log('I am ' + 23 + ' years old');
console.log('23' - '10' - 3);
console.log('23'/'2');


let n = '1' + 1; //11 //'' is for strings & concanate +  
n = n - 1; //11-1
console.log(n); //10

let n1 = 1 + 1; //2
console.log(n1);
