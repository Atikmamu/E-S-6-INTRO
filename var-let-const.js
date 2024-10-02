// var : no reason to use var 
// let : allow it to reassign 
// const : do not allow it to reassign 


// const money = 25;
// // money = 50; ... error diye dibe 
// const rich = money + 25;
// // console.log(rich);


// const count = 9;
// count = count +10;
// console.log(count);


// array 

// numbers = [3, 4, 5, 4];
const number = [23, 4, 23, 12, 56];
number[1] = 55;
number.push(5, 's', 5);
// console.log(number);


// Object

let student = {
    name: 'moina pakhi',
    class: 12
}

student = {name: 'kokil konthi'}

// console.log(student);


// loop

let sum = 0;
for(let i = 0; i < 10; i++){
    const num = i;
    sum = sum + i;
}
console.log(sum);



