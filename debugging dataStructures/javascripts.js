// // Debugging
// Debugging is the process of going through your code, finding any issues, and fixing them.

// Issues in code generally come in three forms: syntax errors that prevent your program from running, runtime errors where your code has unexpected behavior, or logical errors where your code doesn't do what you intended.

// In this course, you'll learn how to use the JavaScript console to debug programs and prevent common issues before they happen.



// Use the JavaScript Console to Check the Value of a Variable
let a = 5;
let b = 1;
a++;
// console.log(a)
// Only change code below this line


let sumAB = a + b;
// console.log(sumAB);


// Understanding the Differences between the freeCodeCamp and Browser Console
let output = "Get this to show once in the freeCodeCamp console and not at all in the browser console";
// console.log(output);
// console.clear();


// Use typeof to Check the Type of a Variable
// Example: JavaScript recognizes seven primitive (immutable) data types: Boolean, Null, Undefined, Number, String, Symbol (new with ES6), and BigInt (new with ES2020), and one type for mutable items: Object. Note that in JavaScript, arrays are technically a type of object.

// // console.log(typeof "");
// // console.log(typeof 0);
// // console.log(typeof []);
// // console.log(typeof {});
// Class:
let seven = 7;
let three = "3";
// // console.log(typeof seven);
// // console.log(typeof three);
// console.clear();


// Catch Misspelled Variable and Function Names
// Example: When the browser looking for an object that doesn't exist - and complain in the form of a reference error. JavaScript variable and function names are case-sensitive.
let receivables = 10;
let payables = 8;
let netWorkingCapital = receivables - payables;
// console.log(`Net working capital is: ${netWorkingCapital}`);


// Catch Unclosed Parentheses, Brackets, Braces and Quotes
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current );
console.log(`Sum of array values is: ${arraySum}`);


// Catch Mixed Usage of Single and Double Quotes
// Escaping quotes with \
let innerHtml = "<p>Click here to <a href=\"#Home\">return home</a></p>";
// console.log(innerHtml);


// Catch Use of Assignment Operator Instead of Equality Operator
let x = 7;
let y = 9;
let result = "";

if(x === y) {
  result = "Equal!";
} else {
  result = "Not equal!";
}

console.log(result);
// console.clear();


// Catch Missing Open and Closing Parenthesis After a Function Call
function getNine() {
   let x = 6;
   let y = 3;
   return x + y;
}
 
let result1 = getNine();
console.log(result1);


// Catch Arguments Passed in the Wrong Order When Calling a Function
function raiseToPower(b, e) {
  return Math.pow(b, e);
}

let base = 2;
let exp = 3;
let power = raiseToPower(base, exp);
console.log(power);


// Catch Off By One Errors When Using Indexing
// Example:
let alphabet = "abcdefghijklmnopqrstuvwxyz";
let len = alphabet.length;
for (let i = 0; i <= len; i++) {
  // console.log(alphabet[i]);
}
for (let j = 1; j < len; j++) {
  // console.log(alphabet[j]);
}
for (let k = 0; k < len; k++) {
  // console.log(alphabet[k]);
}
// Class:
function countToFive() {
  let firstFive = "12345";
  let len = firstFive.length;
  // Only change code below this line
  for (let i = 0; i < len; i++) {
  // Only change code above this line 
    // console.log(firstFive[i]);
  }
}

countToFive();
// class:2
const co1 = function coco(sha){
  for(let i = 0; i < sha.length; i++){
    console.log(sha[i]);
  }
}

const za = "abcdefghijk";

co1(za);



// Use Caution When Reinitializing Variables Inside a Loop
function zeroArray(m, n) {
  // Creates a 2-D array with m rows and n columns of zeroes
  let newArray = [];

  for (let i = 0; i < m; i++) {

    let row = [];
    for (let j = 0; j < n; j++) {
      row.push(0);
    }
    
    newArray.push(row);
  }
  return newArray;
}

let matrix = zeroArray(3, 2);
console.log(matrix);   // results [ [ 0, 0 ], [ 0, 0 ], [ 0, 0 ] ]
// console.clear();



// Prevent Infinite Loops with a Valid Terminal Condition
function myFunc() {
  for (let i = 1; i <= 4; i += 2) {
    console.log("Still going!");
  }
}









// // Basic Data Structures
// Data can be stored and accessed in many ways. You already know some common JavaScript data structures — arrays and objects.

// In this Basic Data Structures course, you'll learn more about the differences between arrays and objects, and which to use in different situations. You'll also learn how to use helpful JS methods like splice() and Object.keys() to access and manipulate data.


// Use an Array to Store a Collection of Data
let yourArray = [
  {
    firstName: "Shedrack",
    lastName: "Ajide"
  },
  30,
  true,
  [
    {
      school: "Tomia Community High School"
    }
  ],
  function(){
    return "Thank You."
  },
  "ShabsPlanta"

]; 


// Access an Array's Contents Using Bracket Notation
let myArray1 = ["a", "b", "c", "d"];
myArray1[1] = "not b anymore"
console.log(myArray1);


// Add Items to an Array with push() and unshift()
function mixedNumbers(arr) {
  // Only change code below this line
  arr.unshift('I', 2, 'three');
  arr.push(7, 'VIII', 9)
  // Only change code above this line
  return arr;
}

console.log(mixedNumbers(['IV', 5, 'six']));


// Remove Items from an Array with pop() and shift()
function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(['challenge', 'is', 'not', 'complete']));
// console.clear();


// Remove Items Using splice()
const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// // Only change code below this line
arr.splice(1, 4)
// // Only change code above this line
console.log(arr); // arr contain elements that sum to 10.


// Add Items Using splice()
function htmlColorNames(arr) {
  // // Only change code below this line
  arr.splice(0, 2, 'DarkSalmon', 'planta', 'BlanchedAlmond')
  // // Only change code above this line
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'Shabs', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));


// Copy Array Items Using slice()
function forecast(arr) {
//   // Only change code below this line
  arr = arr.slice(2, 4)
  return arr;
}
// // Only change code above this line
console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


// Copy an Array with the Spread Operator
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.push([...arr])
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 4));
// console.clear()


// Combine Arrays with the Spread Operator
function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun']; // Change this line
  return sentence;
}

console.log(spreadOut());

// Check For The Presence of an Element With indexOf()
function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) === -1){
    return false;
  } else {
    return true;
  }
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


// Iterate Through All an Array's Items Using For Loops
// Example:
function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

const v = greaterThanTen([2, 12, 8, 14, 80, 0, 1]);
console.log(v)
// Class:
function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++){
    if (arr[i].indexOf(elem) === -1){
        newArr.push(arr[i])
      }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


// Create complex multi-dimensional arrays
// Example:
let nestedArray = [
  ['deep'],
  [
    ['deeper'], ['deeper'] 
  ],
  [
    [
      ['deepest'], ['deepest']
    ],
    [
      [
        ['deepest-est?']
      ]
    ]
  ]
];
console.log(nestedArray[2][1][0][0][0]);

nestedArray[2][1][0][0][0] = 'deeper still';
console.log(nestedArray[2][1][0][0][0]);
// Class:
let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth'],
  [
    ['deep'],
  ],
  [
    [
      ['deeper']
    ],
    [
      [
        ['deepest']
      ]
    ]
  ]
  // Only change code above this line
];
// console.clear()


// Add Key-Value Pairs to JavaScript Objects
// Example:
const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};

tekkenCharacter.origin = 'South Korea';

tekkenCharacter['hair color'] = 'dyed orange';

const eyes = 'eye color';
tekkenCharacter[eyes] = 'brown';

console.log(tekkenCharacter);
// Class:
let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// // Only change code below this line
foods.bananas = 13;
foods['grapes'] = 35;

const fruit = 'strawberries';
foods[fruit] = 27;
// // Only change code above this line

console.log(foods);
// console.clear()


// Modify an Object Nested Within an Object
let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// // Only change code below this line
userActivity.data.online = 45;
// // Only change code above this line

console.log(userActivity);


// Access Property Names with Bracket Notation
let foods1 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Only change code below this line
  let inventory = foods1[scannedItem];
  return inventory;
  // Only change code above this line
}

console.log(checkInventory("apples"));


// Use the delete Keyword to Remove Object Properties
let foods2 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Only change code below this line
delete foods2.oranges;
delete foods2.plums;
delete foods2.strawberries;
// Only change code above this line

console.log(foods);


// Check if an Object has a Property
// Method:
// // users.hasOwnProperty('Alan');
// // 'Alan' in users;
// class:
let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

for (let user in users){
  console.log(user)
}

function isEveryoneHere(userObj) {
  // Only change code below this line
  if (userObj.hasOwnProperty('Alan') && userObj.hasOwnProperty('Jeff') && userObj.hasOwnProperty('Sarah') && userObj.hasOwnProperty('Ryan')){
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

console.log(isEveryoneHere(users));
// console.clear();


// Iterate Through the Keys of an Object with a for...in Statement
const users1 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Only change code below this line
  let result = 0;

  for (let user in usersObj){
    if (usersObj[user].online === true){
      result++;
    }
  }

  return result;
  // Only change code above this line
}

console.log(countOnline(users1));


// Generate an Array of All Object Keys with Object.keys()
let users2 = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Only change code below this line
  return Object.keys(obj)
  // Only change code above this line
}

console.log(getArrayOfUsers(users2));


// Modify an Array Stored in an Object
let user3 = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Only change code below this line
  userObj.data.friends.push(friend);
  return userObj.data.friends
  // Only change code above this line
}

console.log(addFriend(user3, 'Pete'));
// console.clear()








// >>>> Basic Algorithm Scripting >>>>>>
// // Basic Algorithm Scripting
// // An algorithm is a series of step-by-step instructions that describe how to do something.

// // To write an effective algorithm, it helps to break a problem down into smaller parts and think carefully about how to solve each part with code.

// // In this course, you'll learn the fundamentals of algorithmic thinking by writing algorithms that do everything from converting temperatures to handling complex 2D arrays.


// Convert Celsius to Fahrenheit
// The formula in converting a celsius to a fahrenheit...
function convertCtoF(celsius) {
  let fahrenheit;

  fahrenheit = celsius * 9/5 + 32;

  return fahrenheit;
}

convertCtoF(30);



// Reverse a String
function reverseString(str) {
  let arr = ""

  for (let i = str.length - 1; i >= 0 ; i--){
    arr += str[i]
  };

  // // Displaying a string with an Array accordingly
  // for (let i = 0; i < str.length ; i++){
  //   arr += str[i]
  // };

  return arr

}

const v1 = reverseString("hello");
console.log(v1);



// Factorialize a Number
function factorialize(num) {
  let factor = 1

  for (let i = 2; i <= num; i++){
    factor *= i;
  }

  return factor;
}

factorialize(5);
// // Passed: factorialize(0) should return 1.
// // factorialize(5) should return 120.


// console.clear();
// Find the Longest Word in a String
function findLongestWordLength(str) {
  let words = str.split(' ');
  let maxLength = 0;

  for (let i = 0; i < words.length; i++){
    if (words[i].length > maxLength){
      maxLength = words[i].length
    }
  }

  return maxLength;
}

const flwl = findLongestWordLength("The quick brown fox jumped over is the lazy dog"); 
console.log(flwl);



// Find the smallest Word in a String
function findSmallestWordLength(str) {
  let words = str.split(' ');
  let minLength = 9;

  for (let i = 0; i < words.length; i++){
    if (words[i].length < minLength){
      minLength = words[i].length
    }
  }

  return minLength;
}

const flwl1 = findSmallestWordLength("The quick brown fox jumped over is the lazy dog"); 

console.log(flwl1);





// Return Largest Numbers in Arrays
function largestOfFour(arr) {
  const result = [];
  for (let i = 0; i < arr.length; i++){
    let largestNumber = arr[i][0];
    for (let j = 1; j < arr[i].length; j++){
      if (arr[i][j] > largestNumber){
        largestNumber = arr[i][j];
      }
    }
    result[i] = largestNumber;
  }
  return result;
}

const pp = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
console.log(pp)



// Confirm the Ending
// Example:
let text = "Hello world!";
let re = text.substring(1, 4);
let re1 = text.endsWith("!");

// console.log(re1)
// Class:
function confirmEnding(str, target) {
  if(str.substr(-target.length) === target){
    return true;
  } else {
    return false;
  }
  
}

confirmEnding("Bastian", "n");



// Repeat a String Repeat a String
// Example:
let text1 = "Hello world!";
let res = text1.repeat(2);

// console.log(res)
// Class:
function repeatStringNumTimes(str, num) {
  let accumulatedStr = "";
  for(let i = 0; i < num; i++){
    accumulatedStr += str
  }
  return accumulatedStr;
}

const rs = repeatStringNumTimes("abc", 3);
console.log(rs);



// Truncate a String
function truncateString(str, num) {
  if (str.length > num){
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

const tr = truncateString("A-tisket a-tasket A green and yellow basket", 8);
console.log(tr)



// Finders Keepers
function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++){
    num = arr[i];
    if(func(num)){
      return num;
    }
  }
  return undefined;
  
}

const jj = findElement([1, 2, 3, 4, 6, 8], num => num % 2 === 0);
console.log(jj);



// Boo who
// return true if its a boolean type;
// Boolean primitives are true and false.
function booWho(bool) {
  if(typeof bool === "boolean"){
    return true;
  } else {
    return false;
  }
  
}

booWho(null);




// Title Case a Sentence
let text3 = "HELLO WORLD";
let letter3 = text.charAt(0);
let l3 = letter3.toLowerCase()

// console.log(text3)
function titleCase(str) {
  const words = str.split(" ")
  const ucSentence = [];

  for (let st in words){
    ucSentence[st] = words[st][0].toUpperCase() + words[st].slice(1).toLowerCase()
  }
  return ucSentence.join(" ");
}

const uc = titleCase("I'm a little tea pot");
console.log(uc)
// console.clear();



// Slice and Splice
function frankenSplice(arr1, arr2, n) {
  
  // arr2.splice(n, 0, ...arr1)

  let localArr = arr2.slice();
  for (let i = 0; i < arr1.length; i++){
    localArr.splice(n, 0, arr1[i]);
    n++;
  }
  return localArr;
  // The second array should remain the same after the function runs.
}

const fs = frankenSplice([1, 2, 3], [4, 5, 6], 1);
console.log(fs);



// Falsy Bouncer
function bouncer(arr) {
  let trulyArr = [];
  for (let i = 0; i < arr.length; i++){
    if(arr[i]){
      trulyArr.push(arr[i])
    }
  }
  return trulyArr;
}

const ba = bouncer([7, "ate", "", false, 9]);
console.log(ba);




// Where do I Belong
function getIndexToIns(arr, num) {
  arr.sort((a, b) => (a - b))
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] >= num){
      return i;
    }
  }
  return arr.length;
}

const git = getIndexToIns([40, 60], 50);
console.log(git);



// Mutations
// Example:
let text2 = "Hello world, welcome to the universe.";
let res1 = text.indexOf("Welcome");
console.log()
// Class:
function mutation(arr) {
  let text = arr[1].toLowerCase()
  let firstArr = arr[0].toLowerCase()
  for (let i = 0; i < text.length; i++){
    if (firstArr.indexOf(text[i]) < 0) return false;
  }
  return true;
}
mutation(["hello", "hey"]);




// Chunky Monkey
function chunkArrayInGroups(arr, size) {
  let temp = [];
  let result = [];

  for (let i = 0; i < arr.length; i++){
    if (i % size !== size - 1) temp.push(arr[i]);
    else {
      temp.push(arr[i]);
      result.push(temp);
      temp = [];
    }
  }

  if (temp.length !== 0) result.push(temp);
  
  return result;
}

const cai = chunkArrayInGroups(["a", "b", "c", "d"], 2);
console.log(cai);
// chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
// Passed: chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// Passed: chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].
// console.clear();













// Object Oriented Programming
// // OOP, or Object Oriented Programming, is one of the major approaches to the software development process. In OOP, objects and classes organize code to describe things and what they can do.

// // In this course, you'll learn the basic principles of OOP in JavaScript, including the this keyword, prototype chains, constructors, and inheritance.



// Create a Basic JavaScript Object
let dog1 = {
  name: "jack",
  numLegs: 4
};


// Use Dot Notation to Access the Properties of an Object
let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line

console.log(dog.name);
console.log(dog.numLegs);



// Create a Method on an Object
let dog2 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {
    return "This dog has " + dog2.numLegs + " legs.";
  }
};

const d2 = dog2.sayLegs();
console.log(d2);


// Make Code More Reusable with the this Keyword
let dog3 = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog3.sayLegs();



// Define a Constructor Function
function Dog(){
  this.name = "jack";
  this.color = "white";
  this.numLegs = 4;
}



// Use a Constructor to Create Objects
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line

let hound = new Dog()



// Extend Constructors to Receive Arguments
function Dog(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 4;
}

let terrier = new Dog("jack", "white");



// Verify an Object's Constructor with instanceof
// Example:
let Bird = function(name, color) {
  this.name = name;
  this.color = color;
  this.numLegs = 2;
}

let crow = new Bird("Alexis", "black");
//  instanceof allows you to compare an object to a constructor, returning true or false based on whether or not that object was created with the constructor.

crow instanceof Bird;
// Class:
function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line

let myHouse = new House(4);

const j = myHouse instanceof House;

console.log(j);




// Understand Own Properties
function Bird1(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird1("Tweety");
let ownProps = [];
// Only change code below this line

for (let property in canary){
  if(canary.hasOwnProperty(property)) ownProps.push(property);
}

console.log(ownProps); // ['name', 'numLegs']



// Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 2;

// Only change code above this line
let beagle1 = new Dog("Snoopy");



// Iterate Over All Properties
// Example:
function Bird2(name) {
  this.name = name;  //own property
}

Bird2.prototype.numLegs = 2; // prototype property

let duck = new Bird2("Donald");

let ownProps2 = [];
let prototypeProps2 = [];

for (let property in duck) {
  if(duck.hasOwnProperty(property)) {
    ownProps2.push(property);
  } else {
    prototypeProps2.push(property);
  }
}

// console.log(ownProps2);
// console.log(prototypeProps2);
// Class:
function Bog(name) {
  this.name = name;
}

Bog.prototype.numLegs = 4;

let beagle = new Bog("Snoopy");

let ownProps1 = [];
let prototypeProps = [];

// Only change code below this line

for (let property in beagle){
  if(beagle.hasOwnProperty(property)) ownProps1.push(property);
  else prototypeProps.push(property);
}

console.log(ownProps1);
console.log(prototypeProps);




// Understand the Constructor Property
function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) return true;
  else return false;
}



// Change the Prototype to a New Object
function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function(){
    console.log("nom nom nom");
  },
  describe: function(){
    console.log("My name is " + this.name);
  }
};

// let beagle = new Dog("Snoopy");

// let ownProps1 = [];
// let prototypeProps = [];

// // Only change code below this line

// for (let property in beagle){
//   if(beagle.hasOwnProperty(property)) ownProps1.push(property);
//   else prototypeProps.push(property);
// }

// console.log(prototypeProps)




// Remember to Set the Constructor Property when Changing the Prototype
function Cog(name) {
  this.name = name;
}

// Only change code below this line
Cog.prototype = {
  constructor: Dog,

  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};



// Understand Where an Object’s Prototype Comes From
// isPrototypeOf to check if an Object inherit is prototype from a constructor
function Dog(name) {
  this.name = name;
}

let beagle2 = new Dog("Snoopy");

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle2);



// Understand the Prototype Chain
// Example:
function Birds(name) {
  this.name = name;
}

typeof Birds.prototype; // the prototype of Birds.prototype is Object.prototype
// Class:
function Dog4(name) {
  this.name = name;
}

let beagle3 = new Dog("Snoopy");

Dog4.prototype.isPrototypeOf(beagle3);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog4.prototype);



// Use Inheritance So You Don't Repeat Yourself
// The code following a DRY principle by creating a supertype (or parent) called Animal:
// Example:
function Animal() { };

Animal.prototype = {
  constructor: Animal, 
  describe: function() {
    console.log("My name is " + this.name);
  }
};
// Since Animal includes the describe method, you can remove it from Bird and Dog:

Bird.prototype = {
  constructor: Bird
};

Dog.prototype = {
  constructor: Dog
};
// class:
function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Cat
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Bear
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};




// Inherit Behaviors from a Supertype
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

// Only change code below this line

let ducks = Object.create(Animal.prototype); // Change this line
let beagles = Object.create(Animal.prototype); // Change this line



// Set the Child's Prototype to an Instance of the Parent
function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }
};

function Dog() { }

// Only change code below this line

Dog.prototype = Object.create(Animal.prototype);

let eagle = new Dog();
eagle.eat();


// Reset an Inherited Constructor Property
function Animal() { }
function Bird0() { }
function Dog() { }

Bird0.prototype = Object.create(Animal.prototype);
Dog.prototype = Object.create(Animal.prototype);

// Only change code below this line

Bird0.prototype.constructor = Bird0;
Dog.prototype.constructor = Dog;

let duck01 = new Bird0();
let beagle01 = new Dog();


// Add Methods After Inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };

function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype)
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function(){
  console.log("Woof!")
}



// Only change code above this line

let beagle02 = new Dog();
beagle02.bark();




// Override Inherited Methods
function Bird02() { }

Bird02.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird02.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function(){
  return "Alas, this is a flightless bird."
}

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());




// Use a Mixin to Add Common Behavior Between Unrelated Objects
// Example:
let flyMixin = function(obj) {
  obj.fly = function() {
    console.log("Flying, wooosh!");
  }
};

let bird = {
  name: "Donald",
  numLegs: 2
};

let plane = {
  model: "777",
  numPassengers: 524
};

flyMixin(bird);
flyMixin(plane);

bird.fly();
plane.fly();
// Class:
let bird01 = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Only change code below this line
let glideMixin = function(obj){
  obj.glide = function(){
    return "Smooth Movement";
  }
};

glideMixin(bird01);
glideMixin(boat);

console.log(bird01.glide());



// Use Closure to Protect Properties Within an Object from Being Modified Externally
// Example:
function Bird03() {
  let hatchedEgg = 10;

  this.getHatchedEggCount = function() { 
    return hatchedEgg;
  };
}
let ducky = new Bird03();
console.log(ducky.getHatchedEggCount());
// Class:
function Bird04() {
  let weight = 15;

  this.getWeight = function(){
    return weight;
  }
};



// Understand the Immediately Invoked Function Expression (IIFE)
// An anonymous function wont have a call.
(function() {
  console.log("A cozy nest is ready");
}
)();



// Use an IIFE to Create a Module
// Example:
let motionModule = (function () {
  return {
    glideMixin: function(obj) {
      obj.glide = function() {
        console.log("Gliding on the water");
      };
    },
    flyMixin: function(obj) {
      obj.fly = function() {
        console.log("Flying, wooosh!");
      };
    }
  }
})();


motionModule.glideMixin(duck);
duck.glide();
// class:
let funModule = (function(){
  return {
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      }
   },

    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      }
    }
  }
})();
// console.clear();











// // Functional Programming
// Functional Programming is another popular approach to software development. In Functional Programming, code is organized into smaller, basic functions that can be combined to build complex programs.

// In this course, you'll learn the core concepts of Functional Programming including pure functions, how to avoid mutations, and how to write cleaner code with methods like .map() and .filter().



// Learn About Functional Programming
// //Function that returns a string representing a cup of green tea
const prepareTea = () => 'greenTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4TeamFCC = getTea(40);
// Only change code above this line
// console.log(tea4TeamFCC);




// Understand Functional Programming Terminology
// //Function that returns a string representing a cup of green tea
const prepareGreenTea = () => 'greenTea';

// //Function that returns a string representing a cup of black tea
const prepareBlackTea = () => 'blackTea';

/*
Given a function (representing the tea type) and number of cups needed, the
following function returns an array of strings (each representing a cup of
a specific type of tea).
*/
const getTea1 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Only change code below this line
const tea4GreenTeamFCC = getTea1(prepareGreenTea, 27);
const tea4BlackTeamFCC = getTea1(prepareBlackTea, 13);
// Only change code above this line
console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);



// Understand the Hazards of Using Imperative Code
//// tabs is an array of titles of each site open within the window
const Window = function(tabs) {
  this.tabs = tabs; //// We keep a record of the array inside the object
};

//// When you join two windows into one window
Window.prototype.join = function(otherWindow) {
  this.tabs = this.tabs.concat(otherWindow.tabs);
  return this;
};

//// When you open a new tab at the end
Window.prototype.tabOpen = function(tab) {
  this.tabs.push('new tab'); // //Let's open a new tab for now
  return this;
};

// // When you close a tab
Window.prototype.tabClose = function(index) {

  // Only change code below this line

  const tabsBeforeIndex = this.tabs.splice(index, 1);

  // Only change code above this line

  return this;
 };

// Let's create three browser windows
const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); //// Your mailbox, drive, and other work sites
const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); //// Social sites
const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); //// Entertainment sites

// Now perform the tab opening, closing, and other operations
const finalTabs = socialWindow
  .tabOpen() // //Open a new tab for cat memes
  .join(videoWindow.tabClose(2)) // // Close third tab in video window, and join
  .join(workWindow.tabClose(1).tabOpen());
console.log(finalTabs.tabs);



// Avoid Mutations and Side Effects Using Functional Programming
// // The global variable
let fixedValue = 4;

function incrementer() {
  // Only change code below this line

  return fixedValue + 1;

  // Only change code above this line
}



// Pass Arguments to Avoid External Dependence in a Function
// // The global variable
 let fixedValue1 = 4;

// Only change code below this line
function incrementer(value) {
  
  return value + 1;
 
   // Only change code above this line
}



// Refactor Global Variables Out of Functions
// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line
function add(bookType, bookName) {
  let bookList = [...bookType];

  bookList.push(bookName);
  return bookList;
  
  // Change code above this line
}

// Change code below this line
function remove(bookType, bookName) {
  let bookList = [...bookType];
  const book_index = bookList.indexOf(bookName);
  if (book_index >= 0) {

    bookList.splice(book_index, 1);
    return bookList;

    // Change code above this line
    }
}





// Use the map Method to Extract Data from an Array
// If you use a "FOR LOOP"
// // const ratings = [];
// // for (let i = 0; i < watchList.length; i++) {
// // ratings.push({title: watchList[i]["Title"], rating: watchList[i]["imdbRating"]});
// // }
// Class
// The global variable
const watchList = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

const ratings = watchList.map(user => {
  return {
    title: user.Title,
    rating: user.imdbRating
  };
})

// Only change code above this line

console.log(JSON.stringify(ratings));



// Implement map on a Prototype
// The global variable
const s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback) {
  const newArray = [];
  // // Only change code below this line
  for (let i = 0; i < this.length; i++){
    newArray.push(callback(this[i]));
  }
  // // Or
  // this.forEach(function(arr){
    // newArray.push(callback(arr));
  // })
  // // Only change code above this line
  return newArray;
};

const new_s = s.myMap(function(item) {
  return item * 2;
});
console.log(new_s)



// Use the filter Method to Extract Data from an Array
// The global variable
const watchList1 = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

// Only change code below this line

const filteredList = watchList1
.filter(user => parseFloat(user.imdbRating) >= 8.0)
.map(user => {
  return {
    title: user.Title,
    rating: user.imdbRating
  };
})

// Only change code above this line

console.log(filteredList);



// Implement the filter Method on a Prototype
// The global variable
const s1 = [23, 65, 98, 5];

Array.prototype.myFilter = function(callback) {
  // Only change code below this line
  const newArray = [];
  this.forEach(function(arr){
    if(callback(arr) === true){
      newArray.push(arr);
    }
  })
  // Only change code above this line
  return newArray;
};

const new_s1 = s1.myFilter(function(item) {
  return item % 2 === 1;
});




// Return Part of an Array Using the slice Method
function sliceArray(anim, beginSlice, endSlice) {
  // Only change code below this line

  return anim.slice(beginSlice, endSlice);

  // Only change code above this line
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);



// Remove Elements from an Array Using slice Instead of splice
function nonMutatingSplice(cities) {
  // Only change code below this line
  return cities.slice(0, 3);

  // Only change code above this line
}

const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
nonMutatingSplice(inputCities);



// Combine Two Arrays Using the concat Method
function nonMutatingConcat(original, attach) {
  // Only change code below this line

  return original.concat(attach);

  // Only change code above this line
}

const first = [1, 2, 3];
const second = [4, 5];
nonMutatingConcat(first, second);


// Add Elements to the End of an Array Using concat Instead of push
function nonMutatingPush(original, newItem) {
  // Only change code below this line
  return original.concat(newItem);

  // Only change code above this line
}

const first1 = [1, 2, 3];
const second1 = [4, 5];
nonMutatingPush(first1, second1);


// Use the reduce Method to Analyze Data
// Example:
const user1 = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const sumOfAges = user1.reduce((sum, user) => sum + user.age, 0);
console.log(sumOfAges);
// Example2
const user2 = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const usersObj = user2.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(usersObj);
// Class:
// The global variable
const watchList2 = [
  {
    "Title": "Inception",
    "Year": "2010",
    "Rated": "PG-13",
    "Released": "16 Jul 2010",
    "Runtime": "148 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Christopher Nolan",
    "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
    "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
    "Language": "English, Japanese, French",
    "Country": "USA, UK",
    "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.8",
    "imdbVotes": "1,446,708",
    "imdbID": "tt1375666",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Interstellar",
    "Year": "2014",
    "Rated": "PG-13",
    "Released": "07 Nov 2014",
    "Runtime": "169 min",
    "Genre": "Adventure, Drama, Sci-Fi",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan, Christopher Nolan",
    "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
    "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
    "Language": "English",
    "Country": "USA, UK",
    "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
    "Metascore": "74",
    "imdbRating": "8.6",
    "imdbVotes": "910,366",
    "imdbID": "tt0816692",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "The Dark Knight",
    "Year": "2008",
    "Rated": "PG-13",
    "Released": "18 Jul 2008",
    "Runtime": "152 min",
    "Genre": "Action, Adventure, Crime",
    "Director": "Christopher Nolan",
    "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
    "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
    "Language": "English, Mandarin",
    "Country": "USA, UK",
    "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
    "Metascore": "82",
    "imdbRating": "9.0",
    "imdbVotes": "1,652,832",
    "imdbID": "tt0468569",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Batman Begins",
    "Year": "2005",
    "Rated": "PG-13",
    "Released": "15 Jun 2005",
    "Runtime": "140 min",
    "Genre": "Action, Adventure",
    "Director": "Christopher Nolan",
    "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
    "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
    "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
    "Language": "English, Urdu, Mandarin",
    "Country": "USA, UK",
    "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
    "Metascore": "70",
    "imdbRating": "8.3",
    "imdbVotes": "972,584",
    "imdbID": "tt0372784",
    "Type": "movie",
    "Response": "True"
  },
  {
    "Title": "Avatar",
    "Year": "2009",
    "Rated": "PG-13",
    "Released": "18 Dec 2009",
    "Runtime": "162 min",
    "Genre": "Action, Adventure, Fantasy",
    "Director": "James Cameron",
    "Writer": "James Cameron",
    "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
    "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
    "Language": "English, Spanish",
    "Country": "USA, UK",
    "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
    "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
    "Metascore": "83",
    "imdbRating": "7.9",
    "imdbVotes": "876,575",
    "imdbID": "tt0499549",
    "Type": "movie",
    "Response": "True"
  }
];

function getRating(watchList) {
  // Only change code below this line

// // solve with Function ES5

  // let nolanMovies  = watchList.filter(function(movie){
  //   if(movie.Director === "Christopher Nolan"){
  //     return movie;
  //   }
  // });

  // let theSumOfNolanMovies = nolanMovies.reduce(function(sum, movie, currentIndex, arr){
  //   sum += parseFloat(movie.imdbRating)
  //   return sum;
  // }, 0)

  // let nolanMoviesCount = nolanMovies.length;

  // let averageRating = theSumOfNolanMovies / nolanMoviesCount;


// // solve with ArrowFunction ES6

  let nolanMovies = watchList
  .filter(movie => {
   if(movie.Director === "Christopher Nolan") return movie;
   });

   let totalSumOfNolanMovies = nolanMovies.reduce((total, movie) => {
   total += parseFloat(movie.imdbRating)
   return total;
    }, 0);

  let nolanMovieCount = nolanMovies.length
  
  let averageRating = totalSumOfNolanMovies / nolanMovieCount;
  // Only change code above this line
  return averageRating;
}

console.log(getRating(watchList2));



// Use Higher-Order Functions map, filter, or reduce to Solve a Complex Problem
const squareList = arr => {
  // Only change code below this line
  return arr
  .filter(num => num > 0 && num % parseInt(num) === 0)
  .map(num => Math.pow(num, 2));
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
// // Complete the code for the squareList function using any combination of map(), filter(), and reduce(). The function should return a new array containing the squares of only the positive integers (decimal numbers are not integers) when an array of real numbers is passed to it. An example of an array of real numbers is [-3, 4.8, 5, 3, -3.2].

// // Note: Your function should not use any kind of for or while loops or the forEach() function.



// Sort an Array Alphabetically using the sort Method
// Example:
function ascendingOrder(arr) {
  return arr.sort(function(a, b) {
    return a - b;
  });
}

console.log(ascendingOrder([1, 5, 2, 3, 4]));
// This would return the value [1, 2, 3, 4, 5].

function reverseAlpha(arr) {
  return arr.sort(function(a, b) {
    return a === b ? 0 : a < b ? 1 : -1;
  });
}

console.log(reverseAlpha(['l', 'h', 'z', 'b', 's']));
// This would return the value ['z', 's', 'l', 'h', 'b'].

// Class:
function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort(function(a, b){
    return a === b ? 0 : a > b ? 1 : -1;
  })
  // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));



// Return a Sorted Array Without Changing the Original Array
const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line
  let newArr = arr.slice();

  return newArr.sort(function(a, b){
    return a - b;
  });

  // Only change code above this line
}

nonMutatingSort(globalArray);



// Split a String into an Array Using the split Method
// Example: Here are two examples that split one string by spaces, then another by digits using a regular expression:
const str = "Hello World";
const bySpace = str.split(" ");

const otherString = "How9are7you2today";
const byDigits = otherString.split(/\d/);
// Class:
function splitify(str) {
  // // Only change code below this line

  return str.split(/\W/); //   /\W/ Matches any non-word character. This includes spaces and punctuation, but not underscores.

  // // Only change code above this line
}

console.log(splitify("Hello World,I-am code"));




// Combine an Array into a String Using the join Method
// Example: 
const combineArr = ["Hello", "World"];
const arrToStr = arr.join(" ");
// Class:
function sentensify(str) {
  // // Only change code below this line

  return str.split(/\W/).join(" ");

  // // Only change code above this line
}

console.log(sentensify("May-the-force-be-with-you"));




// Apply Functional Programming to Convert Strings to URL Slugs
// Only change code below this line
function urlSlug(title) {

  return title.toLowerCase()
  .trim() // anyMultiple Space
  .split(/\s+/) // cover to Array without space
  .join("-"); // add hyphen(-) is ted of spacing when converting back to string.

}
// Only change code above this line
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));



// Use the every Method to Check that Every Element in an Array Meets a Criteria
// Example:
const numbers = [1, 5, 8, 0, 10, 11];

numbers.every(function(currentValue) {
  return currentValue < 10;
});
// The every method would return false here.
// Class:
function checkPositive(arr) {
  // Only change code below this line

  return arr.every(value => value > 0)

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);




// Use the some Method to Check that Any Elements in an Array Meet a Criteria
// // Example: Use the some Method to Check that Any Elements in an Array Meet a Criteria
const numbers1 = [10, 50, 8, 220, 110, 11];

numbers1.some(function(currentValue) {
  return currentValue < 10;
});
// // The some method would return true.
// Class:
function checkPositive(arr) {
  // Only change code below this line

  return arr.some(val => val > 0)

  // Only change code above this line
}

checkPositive([1, 2, 3, -4, 5]);



// Introduction to Currying and Partial Application
// Example:
function unCurried(x, y) {
  return x + y;
}

function curried(x) {
  return function(y) {
    return x + y;
  }
}

// const curried = x => y => x + y

curried(1)(2)
// curried(1)(2) would return 3.
const funcForY = curried(1);
console.log(funcForY(2)); // 3
// Or
function impartial(x, y, z) {
  return x + y + z;
}

const partialFn = impartial.bind(this, 1, 2);
partialFn(10); // 13
// class:
function add(x) {
  // Only change code below this line
  return function(y){
    return function(z){
      return x + y + z;
    }
  }

  // Only change code above this line
}

add(10)(20)(30);













// >>> Intermediate Algorithm Scripting <<<
// Now that you know the basics of algorithmic thinking, along with OOP and Functional Programming, test your skills with the Intermediate Algorithm Scripting challenges.


// Sum All Numbers in a Range
function sumAll(arr) {
  let min = Math.min(arr[0], arr[1]);
  let max = Math.max(arr[0], arr[1]);

  let sumOfArr = 0;
  for(let i = min; i <= max; i++){
    sumOfArr += i;
  }

  return sumOfArr;
}

console.log(sumAll([1, 4]));




// Diff between the Two Arrays
function diffArray(arr1, arr2) {
  const newArr = [];

  const newDiffArr = function(first, second){
    for(let i = 0; i < first.length; i++){
       if(second.indexOf(first[i]) === -1){
         newArr.push(first[i]);
       }
    }
  }

  newDiffArr(arr1, arr2);
  newDiffArr(arr2, arr1);

  return newArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 2, 3, 4, 5]));




// Seek and Destroy
// Example:

function findMax(arr, ...arguments) {
  let max = [];
  for (let i = 0; i < arr.length; i++) {
    if (arguments.indexOf(arr[i]) === -1){
      max.push(arr[i]);
    }
  }
  return max;
}

console.log(findMax([1, 123, 500, 115, 500, 44, 88], 1, 115, 44, 88))

// Class:
function destroyer(arr) {
  let valToRemove = Object.values(arguments).slice(1);
  let filterObj = [];

  for(let i = 0; i < arr.length; i++){
    let removeElement = false;
    for(let j = 0; j < valToRemove.length; j++){
      if(arr[i] === valToRemove[j]){
        removeElement = true;
      }
    }
    if(!removeElement){
      filterObj.push(arr[i])
    }
  }

  return filterObj;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));


// Wherefore art thou