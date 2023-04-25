let x = ["Steele", "cold", "algo", "b", "dd"].sort();
let y =[6,4, 8,10].sort();
console.log(x); 
console.log(y); //o\p - 10, 4, 6,8
//o/p - ["Steele", "algo", "b", "cold", "dd"] since s is capital of steele
// because converts to string and unicode is compared

// now what we can do is

function numberCompare(num1, num2){
    return num1-num2;
}
let z = [6,4,8, 10].sort(numberCompare); //if negaive, inserted ulta
console.log(z);