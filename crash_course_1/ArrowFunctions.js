/*
Understanding Arrow Functions on JS
*/

function sum(a, b){
    return a + b;
}
//its arr func version
let sum2= (a, b) => a+ b;


function isPositive(num){
    return num >= 0;
}

let isPositive2 = num => num >= 0;


function randomNumber(){
    return Math.random();
}

let rand = () => Math.random();


// document.addEventListener('click', function(){
//     console.log('Click')
// })

console.log(randomNumber())
console.log(rand())
