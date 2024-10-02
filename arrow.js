// function declaration 

// function add (a, b){
//     const result = a + b;
//     return result;
// }

function add (a, b){
    return a + b;
}


// function expression 
const add2 = function(a,b){
    return a + b;
}


// arrow function 
const add3 = (a, b) => a + b;

const sum = add3(5, 93);
// console.log(sum);


const add4 = (num1, num2, num3, num4) => num1 + num2 + num3 + num4

const jhog = add4(3, 4, 6, 5)
// console.log(jhog);

const multiply = (num1, num2) => num1 * num2;
const gun = multiply(3, 12);
// console.log(gun);

const biyog = (num1, num2) => num1 - num2;
const mainus = biyog(56, 34);
console.log(mainus);
