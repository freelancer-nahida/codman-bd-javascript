// // Array

// let fruits = ['apple', 'banana', 'lichi', 'mango', 5, 9, 6, 7, true];

// // console.log(fruits);
// // console.log(fruits[6]);
// // console.log(fruits.length);

// // console.log(fruits.indexOf('apple'));

// fruits.pop(); // remove last item
// console.log(fruits);
// fruits.shift();//remove the first item an array
// console.log(fruits);

// fruits.push('berri');
// console.log(fruits);// add item to the array  at the end

// fruits.unshift('blackbari');// add item to the first

// console.log(fruits);

//joining an array

// let arr1 = ['am', 'jam']
// let arr2 = ['banana']


// let newArr = arr1.concat(arr2);
// console.log(newArr);

//slicing an array 

// let animal = ['tiger', 'snake', 'singho']

// let newAnimal = animal.slice(0, 2)
// console.log(newAnimal);

//splice (add/ remove)- change the orginal artray

// start , deleete,item...
// let animal = ['tiger', 'snake', 'singho']

// let newAnimal = animal.splice(2, 1, 'dog')
// console.log(animal);

//sorting

// let animalSort = animal.sort((a, b) => a - b);
// console.log(animalSort.reverse());


// let users = [{ name: 'Amit', age: 25 }, { name: 'Sujon', age: 27 }, { name: 'Jamal', age: 26 }, { name: 'Hosain', age: 24 }];


// console.log(users.sort((a, b) => a.age - b.age));

// console.log(users.name);

// users.forEach((x) => console.log((x))
// )
// animal.forEach((animal) => console.log(animal))

let animals = ['tiger', 'snake', 'singho']
// for (let i = 0; i < animals.length; i++) {
//     console.log(animals[i]);

// }
// animals.map((animals) => console.log(animals)
// );

// filter $ includes
let numbers = [10, 22, 56, 78, 75, 48, 69, 88]

// let evenNumber = numbers.filter((number) => console.log(number)
// )
// let evenNumber = numbers.filter((number) => number % 2 == 0);


let users = [{ name: 'Amit', age: 25 }, { name: 'Sujon', age: 27 }, { name: 'Jamal', age: 26 }, { name: 'Hosain', age: 24 }];

let filterUser = users.filter((user) => user.name == 'Amit');
console.log(filterUser);


// includes

let searchUser = animals.includes('snake');
console.log(searchUser);
