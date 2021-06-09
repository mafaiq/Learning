// No parenthesis is fine, BUT ALWAYS PUT

// console.log('Hello World');
// console.warn('Bye World');

//var is pretty much a global variable, so best to avoid that
//const is what you want to use, but it is constant.
//let is a variable, which is not constant



// data types

const name = 'John';
const age = 30;
const rating = 4.5;
const truth = false;
const mt = null;
const y = undefined;
let z;
// console.log(typeof name)
// console.log(typeof age)
// console.log(typeof rating)
// console.log(typeof truth)
// console.log(typeof mt)
// console.log(typeof y)
// console.log(typeof z)

// String concantenation
//template strings, basically format
// const person = `my name is ${name} and I am ${age}`; //dont use ' but use `
// console.log(person);
// console.log(name.length);
// console.log(name.substring(0, 2).toUpperCase());
// console.log(name.substring(0, 2).toLowerCase());

// console.log(name.split('o'))

// arrays
const numbers = new Array(1,2,3,4,5);

const fruits = ['apples', 'oranges', 'pears']
a = fruits[2]
fruits.push('bananas'); //push on to stack
fruits.unshift('kiwis') //adds to front
fruits.pop();

// console.log(Array.isArray(fruits))
// console.log(fruits.indexOf('oranges'))
// console.log(fruits)


//object literals
const person = {
    firstName: 'John',
    lastName: 'Doe',
    hobbies: ['music', 'sports'],
    addr: {
        str: 'pussy',
        num: '3',
        city: 'rackcity'
    }
}

// console.log(person)
// console.log(person.hobbies[0])

//destructuring
// const {firstName, hobbies, addr: {city}} = person;
// console.log(hobbies)

// //add a new field
// person.email = 'fuck@sex.com'
// console.log(person)

/*
An array of objects
*/
const todos = [
    {
        id:1,
        text:'take him out back',
        isCompleted:true
    },
    {
        id:2,
        text:'Buy some dinner',
        isCompleted:true
    },
    {
        id:3,
        text:'fuck bitches',
        isCompleted:false
    }
];
console.log(todos[0].isCompleted);

// convert above to json by making the whole thing a string
const todoJSON = JSON.stringify(todos);
console.log(todoJSON)


