const x = 10;


if(x == 10){
    console.log('x = 10 first');
} // this returns true, as they dont check for the type


if(x === 10){ // will match datatype as well
    console.log('x = 10');
}
else if(x >= 10){ // will match datatype as well
    console.log('x = 10');
} 

const color = x > 10 ? 'red': 'blue';

console.log(color)