// for of use on array or string not in object 
// for in use on object 



// array ar opor for of loop chalano 

const numbers = [1, 6, 5, 5];
// for(let i = 0; i < numbers.length; i++){}
// while 

for(const num of numbers){
    // console.log(num);
}


// string ar opor for of loop chalano 

const nobab = 'siraj Ud Doula';
for(const char of nobab){
    // console.log(char);
}


const glass = {
    name: 'glass',
    color: 'golden', 
    price: 12, 
    isCleaned: true
};

// for(const key of glass){
//     console.log(key);
// }

for(const key in glass){
    const value = glass[key];
    // console.log(key,value);
}


// optional 

const keys = Object.keys(glass);
console.log(keys);

for(const key of keys){
    const value = glass[key]
    console.log(key, value);
}



