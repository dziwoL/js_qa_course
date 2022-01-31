// //Ex.1

let cat = 'cat';
let dog = 'dog';
cat = 'dog'
dog = 'cat'

console.log(cat);
console.log(dog);

// //Ex.2

let company = 'Red Zebra,';
let position = ' QA';
let message = `${company + ' ' + position}`;
console.log(message);

// //Ex.3

let company = 'Red Zebra';
let position = 'QA';
const isProductCompany = true;
let projectName;
const message1 = `${isProductCompany + ' ' + company + ' ' + position}`;

console.log(message1);

//Ex.4

const company = 'Red Zebra';
let position = 'QA';
const isProductCompany = true;
const projectName = 'LIVE';
const message2 = `${isProductCompany + ' ' + company + ' ' + projectName + ' ' + position}`;

console.log(message2);