// Array ar khatra use kora hoi .....> spread oparator 

const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers); // আউটপুট: [1, 2, 3, 4, 5]



// object ar khatra use kora hoi.....> spread oparator 

const person = { name: 'John', age: 25 };
const updatedPerson = { ...person, city: 'Dhaka' };
console.log(updatedPerson); // আউটপুট: { name: 'John', age: 25, city: 'Dhaka' }


// Spread Operator কোনো অ্যারে বা অবজেক্টের উপাদানগুলোকে সহজেই কপি বা যোগ করার জন্য ব্যবহৃত হয়।