let isDarkMood = true;

// if (isDarkMood == false) {
//     console.log('Darkmood is disableable');
// }
// else {
//     console.log('darkMood is enable');
// }
//condition?_______ : _________;


// isDarkMood === true ? console.log('Darkmood is disableable') : console.log('darkMood is enable');

// if (isDarkMood == true) {
//     console.log('Darkmood is enable');
//     e
// }
// else {
//     console.log('darkMood is disable');

// }

// let isRainning = true;

// if (isRainning == false) {
//     console.log('it,s not rainning');

// }
// else {
//     console.log('sunnay day');

// }

// if (1 > 2) {
//     console.log(true);

// }
// else {
//     console.log(false);

// }

// if(age > 35){
//     console.log();

// }

// let sentence = `${person} is ${age} years old!
// jklkll;
// ghjkjn
// `;

// console.log(sentence);

// let age = 17;

// let person = 'nahid';

// if (age > 18) {
//     console.log(`${person} is an Adult`);

// }
// else {
//     console.log(`${person}  is an Child`);

// }


//age is greter or equal to 18 => Adult

// age is lass than 18 => child

// age is greater than 40 => old

// let age = 19;

// let person = 'basar';

// if (age >= 40) {
//     console.log(`${person} is an old`);

// }

// else if (age >= 18) {
//     console.log(`${person} is an adult`);

// }
// else {
//     console.log(`${person}  is an Child`);

// }

// tem -> 30 -> "hot";

// tem -> >30 -> "normal";

// tem -> <=22 -> " cold";

// let temperature = 31;

// if (temperature > 30) {
//     console.log('Weather is hot');

// }
// else if (temperature <= 22) {
//     console.log(' Weather is cold');

// }
// else {
//     console.log('Weather is normal');

// }

// Course -> Math  English , Science
//Find out the average marks of 3 courses
//Find the actual grade

// 90-> A+
// 80-> A
// 60->B+
// 50->C
// 40->D
// Below 40 Is Fall

// let mathMarks = 0;
// let englishMark = 50;
// let scienceMarks = 35;

// const averageMark = (mathMarks + englishMark + scienceMarks) / 3;
// console.log('Avarage Mark:', averageMark);

// if (averageMark >= 90) {
//     console.log('Result is A+');

// }
// else if (averageMark >= 80) {
//     console.log('Result is A');

// }
// else if (averageMark >= 60) {
//     console.log('Result is B+');

// }
// else if (averageMark >= 50) {
//     console.log('Result is C');

// }
// else if (averageMark >= 40) {
//     console.log('Result is D');

// }
// else {
//     console.log('Failed');

// }

// const gretting = (person) => {
//     let name = person ? person : 'string'
//     return ` hello ${name}`;
// }
// console.log(gretting('sakib'));

// annonimas function
const userAuthentication = (user) => {
    let auth = user ? 'User is logged in' : " user is not logged in";
    return auth;
}
console.log(userAuthentication('nahida'));
