'use strict';// helps for debugging 

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


const yearUntilRetirement = (birthyear, firstname) =>{
const Age = 2025 - birthyear;
const retire = 65 - Age;
return `${firstname} retires in ${retire} years`;
}

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