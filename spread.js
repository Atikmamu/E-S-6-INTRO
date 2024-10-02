const max = Math.max(6, 23, 45, 1, 89, 23)
// console.log(max);

const numbers = [3, 5, 2, 45, 5, 43, 90, 32, 15];
const arrayMax = Math.max(...numbers);
// console.log(...numbers);
// console.log(arrayMax);


// use spread operator to copy 
const friends = [4, 5, 87, 9];
const bondhu = friends;
const dosto = [...friends]  // copy 
console.log(dosto);
friends.push(100)
console.log(dosto);
console.log(friends);


// advanced 
const sonkha = [2,4, ...friends, 555];  // add extra element while copy 
console.log(sonkha);



// object ar khatra spread oparator 

const person = { name: 'John', age: 25 };
const newPerson = { ...person, job: 'Developer' };
console.log(newPerson); 
// { name: 'John', age: 25, job: 'Developer' }



// আপনি একাধিক array বা object কে merge করতে পারবেন spread operator ব্যবহার করে।

// javascript

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergedArray = [...arr1, ...arr2];
console.log(mergedArray); // [1, 2, 3, 4, 5, 6]

// এখানে দুইটি array arr1 এবং arr2 কে mergedArray তে একত্রিত করা হয়েছে।



// নতুন array বা object তৈরিতে সহায়ক।
// Code cleaner এবং সহজ করে।
// Immutable data structure এর ক্ষেত্রে সাহায্য করে।

// এই spread operator আধুনিক JavaScript (ES6) এর একটি গুরুত্বপূর্ণ ফিচার যা কোডিং এর অভিজ্ঞতাকে অনেক সহজ এবং সুন্দর করে তোলে।