/*
for loops
*/
// for(let i = 0; i<=10; i++){
//     console.log(`For Loop Number: ${i} `);
// }

//while loops
// let i = 0
// while(i != 2){
//     console.log(`For Loop Number: ${i} `);
//     i++;
// }

//looping throuh arrays
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

// for(let i = 0; i<=todos.length; i++){
//         console.log(`tasks: ${todos[i].id} `);
// }

// console.log(`tasks: ${todos[0].text} `);

//loop
// for(let t of todos){
//     console.log(t.text)
// }

// for each loop - most recommended from tutoriak
// todos.forEach(
//     function(todos) {
//         console.log(todos.text)
// });

// // map
// const todoText = todos.map(
//     function(todos) {
//         return todos.text;
// });
// console.log(todoText);

// filter
const todoCompleted = todos.filter(function(todos) {
        return todos.isCompleted == true;
}).map(function(todo){
    return todos.text;
});
console.log(todoCompleted);