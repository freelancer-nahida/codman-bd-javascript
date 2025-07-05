

let text = document.getElementById('text');
// text.innerText = 'Calculator:';
text.innerHTML = " Calculator:";
// document.getElementById('text').innerHTML = 'New Calculator';
// // let btn = document.getElementById("btn");
// btn.i = 'hello'
// console.log(btn);
let num1 = document.getElementById("num1");
// console.log(num1);

let num2 = document.getElementById("num2");
// console.log(num2);

// console.log(parseInt(num1) + parseInt(num2));

let result = document.getElementById("result");
// result.innerHTML = `Result: ${parseInt(num1) + parseInt(num2)}`;

//Addition

let addBtn = document.getElementById("add");
let subtractBtn = document.getElementById("subtract");
let divitionBtn = document.getElementById("divition");
let multificationBtn = document.getElementById("multification");
// add
addBtn.addEventListener("click", () => {
        // console.log("hello");
        // result.innerHTML = `Result: ${parseInt(num1) + parseInt(num2)}`;
        result.innerHTML = parseInt(num1.value) + parseInt(num2.value);
})
//subtract
subtractBtn.addEventListener("click", () => {

        result.innerHTML = parseInt(num1.value) - parseInt(num2.value);

})

//divition
divitionBtn.addEventListener("click", () => {

        result.innerHTML = parseInt(num1.value) / parseInt(num2.value);

})

// multification
multificationBtn.addEventListener("click", () => {

        result.innerHTML = parseInt(num1.value) * parseInt(num2.value);

})


