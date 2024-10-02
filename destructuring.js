// Object thake destructuring korta pari aii vabe 

const actor = {
    name: 'sakib khan',
    age: 30,
    phone: '01753242343',
    money: 4235454354
}

// if right side is an object left side of destructuring will be object as well 

// use property name as a variable that contains the property value 
const {phone, age: boyos} = actor

console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(phone)
console.log(boyos)
console.log(boyos)
console.log(boyos)


// array kao destructuring korta pari 

const numbers = [54, 86]
const [first, second] = numbers;
const [x, y] = [12, 66]


// Advanced array ka destructuring kortasi 

function doubleThem(a, b){
    return [a*2, b*2]
}

const [prothom, ditiyo] = doubleThem(6, 9);
console.log(prothom, ditiyo)



// user object 

const user1 = {
    'name1' : 'Rowan Atkinson',
    'popularity' : 'Mr. Bean'
}

// object destructuring 

const { name1, popularity } = user1;
console.log(name1, popularity);


// user object 

const user = {
    name: 'Hidayt',
    city: 'Delhi',
    type: 'Admin'
}

// object destructuring 

const { name, city, type } = user;
console.log(name, city, type);


const myObject = {
    student: 'Mike',
    teacher: 'susan',
};

const {student: atik, teacher: jhankar} = myObject;
console.log(atik, jhankar);

const {student, teacher} = myObject;
console.log(student, teacher);







