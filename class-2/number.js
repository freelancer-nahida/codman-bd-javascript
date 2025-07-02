// // console.log('test');

// let roundNumber = 54//1,2,3, round number/ natural number / integer number

// let decimalNumber = 34.666 // floating number or Decimal Number
// let addition = roundNumber + decimalNumber;
// console.log('Result', addition);

// console.log('To Fixed', addition.toFixed(3));
// console.log('Integer/ Round number', parseInt(addition));
// console.log('Round Number', Math.round(addition));//.5 are upore gele

// //next value chole jay

let newNumber = 66.58

// let newRoundNumber = Math.round(newNumber);
// console.log(newRoundNumber);

// let ceilNumber = Math.ceil(newNumber);
// console.log(ceilNumber);
//whatever the decible vaiue is the result will alwaysmbe on the upper level 14.15 -> 15 

let floorNumber = Math.floor(newNumber);
console.log('FloorNumber:', floorNumber);//doesn,t take the upper value higher the decimal value is!

let negativeNumber = -65;

let absNumber = Math.abs(negativeNumber);//turns  negative number into positive value

console.log('AbsNumber:', absNumber);


let number = '45.54';
console.log(typeof number);

console.log(parseInt(number));
console.log(parseFloat(number));


let randomNumber = Math.floor((Math.random() * 100) + 1)// 0 to 1 -> value
console.log('Roll a dice:', randomNumber);
