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
*/

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


/* exercise code here 🙂 */

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