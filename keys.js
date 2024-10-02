const glass = {
    name: 'glass',
    color: 'golden', 
    price: 12, 
    isCleaned: true
};

// console.log(glass);

// all properties name ghula ka dibe 

const keys = Object.keys(glass); //---> //output
// [ 'name', 'color', 'price', 'isCleaned' ]
// console.log(keys);

// all properties ar values ghula ka dibe 

const values = Object.values(glass);
// [ 'glass', 'golden', 12, true ]
// console.log(values);


const entries = Object.entries(glass);

// array of array, two dimensional array, array of array 

// [
//     [ 'name', 'glass' ],
//     [ 'color', 'golden' ],
//     [ 'price', 12 ],
//     [ 'isCleaned', true ]
//   ]
// console.log(entries);


// delete glass.isCleaned;
// { name: 'glass', color: 'golden', price: 12 }
console.log(glass);

const {isCleaned, ...shortGlass} = glass;
// console.log(shortGlass);

// freeze 

// Object.freeze(glass);
glass.source = 'Bangladesh';
glass.price = 5777;
delete glass.name;
// console.log(glass);


// seal ...> modify 

Object.seal(glass);
console.log(glass);







