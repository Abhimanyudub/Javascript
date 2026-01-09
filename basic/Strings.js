const name = "Abhimanyu"
const repoCount = 6

// console.log(name + repoCount + "hello");

// best way is 

console.log(`my name is ${name} and my repoCount is ${repoCount}`);

const myName = new String('Abhimanyu-dub')
console.log(myName);

// console.log(myName[0]);
// console.log(myName.__proto__);

// String functions or methods
console.log(myName.length);
console.log(myName.toUpperCase());
console.log(myName.charAt(3));
console.log(myName.bold());
console.log(myName.split("-"));
console.log(myName.indexOf("a"));

const newString = myName.substring(0,4)
console.log(newString);

const anothString  = myName.slice(-13,8)
console.log(anothString);

const anothString2 = "  Abhimanyu   "
console.log(anothString2);
console.log(anothString2.trim());

const url = "http//Abhimanyu.com/Abhimanyu%20dub"
console.log(url.replace('%20','_'))

console.log(url.includes('Abhi'))












