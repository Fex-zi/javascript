'use strict';// helps for debugging 

let HasDriversLicense =false;

const passTest = true;

 if(passTest) HasDriversLicense = true;
 if(HasDriversLicense) console.log('I can drive well :D');

 //functions
 function logger() {
    console.log('My name is Ifeanyi');
 }

 // calling / running/ invoking the function
 logger();

 function fruitProcessor(apples, oranges){
   // console.log(apples, oranges);
    const juice =`Juice with ${apples} apples and ${oranges} oranges.`
    return juice;
 }
 
 const appleJuice = fruitProcessor(5, 0);
 console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2,4);
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
