// console.log('test');

// database = 50; age = 15

// search -> age?

// let stringValue = '';
// let nameOfUser = 'abdullah';
let sentence = "Bangladesh is hight popular country"

// console.log(nameOfUser.length);
// console.log(sentence.length);

//Make a new string ( add two string)

// let greting = "Good Night";

// let newGretting = greting.concat('Abdullah')
// console.log(newGretting);


// let firstName = "wp";
// let lastName = "Sujon";

// console.log(firstName + " " + lastName);

//subString  take a portion of a string

// let newSentence = sentence.substring(0, 10);

// console.log(newSentence);

//slice

// let slice = sentence.slice(-20, -10);
// console.log(slice);

// let blogPost = ' JavaScript is the world s most popular programming language JavaScript is the programming language of the Web JavaScript is easy to learn';

// console.log(blogPost.slice(0, 40) + '...');

//
// let word = 'Coffee';
// let newWord = word.charAt(4);
// console.log(newWord);


// indexOf(string)


let newSentence = 'I love to drink coffee';
// let searchWord = newSentence.indexOf('love');
// console.log(searchWord);

// includes(string)

let includes = newSentence.includes('coffee');
console.log(includes);

// Care  Changing

let lowerCase = 'Hello, my Name is Blob';

console.log(lowerCase.toLowerCase());// return everything in small letters


let upperCase = 'Hello, my Name is Blob';
console.log(upperCase.toUpperCase());

// trim -> remove spaces from s string

let untidy = 'how are  you ?';

console.log(untidy.trim());// remove all space from start and end;

//find if word  'hello' is the present in the sentence

let giveSentence = " hello , how is bob doing today";

let searchFor = " Hello"

lowerCaseGivenSentence = giveSentence.toLowerCase();
lowerCaseSearceFor = searchFor.toLowerCase();

// if (lowerCaseGivenSentence.includes(lowerCaseSearceFor)) {
//     console.log(searchFor, 'is found');

// } else {
//     console.log(' opps', searchFor, 'is not found');

// }


// if (giveSentence.toLowerCase().includes(searchFor.toLowerCase())) {
//     console.log('found');

// }

// if (giveSentence.indexOf(searchFor)) {
//     console.log('found');

// }
if (lowerCaseGivenSentence.indexOf(lowerCaseSearceFor) !== -1) {
    console.log(searchFor, 'found');

}
else {
    console.log(searchFor, 'no found');

}


// null, 0 ,undifine, NaN, false
let age = 10;
if (age === true) {
    console.log('age is true');

}
else {
    console.log('age is fa;se');

}