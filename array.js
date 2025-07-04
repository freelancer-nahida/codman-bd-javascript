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
let animal = ['tiger', 'snake', 'singho', 1, 2, 5, 8, 7, 22, 99, 22, 66, 44, 55, 77]

// let newAnimal = animal.splice(2, 1, 'dog')
// console.log(animal);

//sorting

let animalSort = animal.sort((a, b) => a - b);
console.log(animalSort.reverse());





