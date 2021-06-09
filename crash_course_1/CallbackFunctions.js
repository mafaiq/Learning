//passing a function, as an argument to another function is known as a callback function
// this arg_func wil be invoked by the outer function to finish the job


function double(num, callback){
    // Double the first argument and store as newNum.
    const newNum = num * 2;

    // Run the callback function, using the doubled number as the first argument,
    // and the original number as the second

    callback(newNum, num)
    return newNum;
}

// Run the function using 2 as the input, and store the result as doubledNum.
// the function passed will be executed by double(), and the arguments will be passed by the callback function from double()
const doubledNum = double(2, function(result, originalNum){
    console.log(result)
    console.log(originalNum)
})

console.log(doubledNum)

//the above can also be achieved by using normal functions of course.
const logResult = function (result, originalNum) {
    console.log(result) // => 4
    console.log(originalNum) // => 2
  }
  
const doubledNum = double(2, logResult)