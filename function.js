// write a loop write it prints  1 -20;

// for (let count = 1; count <= 10; count++) {
//     console.log(count);

// }
// for (let count = 20; count <= 30; count++) {
//     console.log(count);

// }

//.........countinue...

// wrining our first function


// function forLoop(countStart = 0, countEnd = 10) {
//     // console.log('First Value', 10);
//     for (let count = countStart; count <= countEnd; count++) {
//         console.log('For Loop', count);

//     }


// }
// forLoop()
// forLoop(1, 20);
// forLoop(100, 200);

//write a function that prints out our name

// function userNameGenerator() {
//     console.log('User Name is  Jamal');

// }
// userNameGenerator()
// userNameGenerator()
// userNameGenerator()

// / let temperature = 31;

// if (temperature > 30) {
//     console.log('Weather is hot');

// }
// else if (temperature <= 22) {
//     console.log(' Weather is cold');

// }
// else {
//     console.log('Weather is normal');

// }

// let temperature = 31;

// function temperatureCount(temperature) {
//     if (temperature > 30) {
//         console.log('Weather is hot');

//     }
//     else if (temperature <= 22) {
//         console.log(' Weather is cold');

//     }
//     else {
//         console.log('Weather is normal');

//     }
// }
// temperatureCount(21)

// function userNameGenerator(firstName = 'Md', lastName, age) {
//     console.log(`User Name is ${firstName} ${lastName}  and his age is ${age}`);

// }
// userNameGenerator('nahida', 'sultana', 31)

//////////////////////////

// let myName = 'nasrin';

// let age = 50;

// console.log(" Hello my Name is" + myName + 'her Agr' + age);

// console.log(`${myName}ia sn

//     sdnsjhgdfjhdh
//     asafnsndfmg
//     dfmndn`);// templet literals


// let randomNumber = Math.floor((Math.random() * 100) + 1)// 0 to 1 -> value
// console.log('Roll a dice:', randomNumber);

// let newNumber = 10;
// function randomDice() {
//     let randomNumber = parseInt(Math.random() * 6 + 1);
//     console.log('Roll a dice:', randomNumber, newNumber);

// }
// console.log(newNumber);
// randomDice();
// randomDice();
// randomDice();
// randomDice();
// randomDice();
// randomDice();
// randomDice();

// let randomNumber;

// function randomDice() {
//     randomNumber = parseInt(Math.random() * 6 + 1);
//     console.log('Roll a dice:', randomNumber);
// }
// randomDice()

function avarageMark(mathMarks = 0, englishMark = 0, scienceMarks = 0) {
    // let mathMarks = 78;
    // let englishMark = 50;
    // let scienceMarks = 35;

    const averageMark = (mathMarks + englishMark + scienceMarks) / 3;
    // console.log('Avarage Mark:', averageMark);

    if (averageMark >= 90) {
        console.log('Result is A+');

    }
    else if (averageMark >= 80) {
        console.log('Result is A');

    }
    else if (averageMark >= 60) {
        console.log('Result is B+');

    }
    else if (averageMark >= 50) {
        console.log('Result is C');

    }
    else if (averageMark >= 40) {
        console.log('Result is D');

    }
    else {
        console.log('Failed');

    }
}
avarageMark(78, 88, 99);


// function add(num1, num2) {

//     // console.log('Add', num1 + num2);
//     return num1 + num2

// }


// let addition = add(12, 45);

// console.log(addition);

// console.log(add(12, 45));

// add(12, 45)

//Arrow Function

// const addNumber = (a, b) => a + b;
// console.log(addNumber(52, 12));


// const addNumber =(a,b,c)=>{
//     let total = a+b+c;
//     return total;
// }
// // addNumber(12,55,58)
// const result = addNumber(12,55,58);
// console.log( result);

function addNumber(a, b, c) {
    return a + b + c
}
const Result = addNumber(66, 55, 88);
console.log(Result);
