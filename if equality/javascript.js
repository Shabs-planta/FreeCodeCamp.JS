// ES5 Basic JavaScript Structure...

// ES5 (ECMAScript 5) which was finalized in 2009.
// // JavaScript is a scripting language you can use to make web pages interactive. It is one of the core technologies of the web, along with HTML and CSS, and is supported by all modern browsers.

// // In this course, you'll learn fundamental programming concepts in JavaScript. You'll start with basic data structures like numbers and strings. Then you'll learn to work with arrays, objects, functions, loops, if/else statements, and more.


// Comparison with the Equality Operator
function testEqual(val) {
   if (val == 12) { // Change this line
     return "Equal";
   } else {
     return "Not Equal";
   }
}
 
// console.log(testEqual(12));


// Comparison with the Strict Equality Operator
function testStrict(val) {
   if (val === 7) { // Change this line
     return "Equal";
   }
   return "Not Equal";
}
 
// console.log(testStrict(7));


// Practice comparing different values
function compareEquality(a, b) {
   if (a === b) { // Change this line
     return "Equal";
   }
   return "Not Equal";
}
 
// console.log(compareEquality(10, "10"));


// Comparison with the Greater Than Operator
function testGreaterThan(val) {
   if (val > 100) {  // Change this line
     return "Over 100";
   }
 
   if (val > 10) {  // Change this line
     return "Over 10";
   }
 
   return "10 or Under";
}
 
// console.log(testGreaterThan(10));


// Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
   if (val >= 20) {  // Change this line
     return "20 or Over";
   }
 
   if (val >= 10) {  // Change this line
     return "10 or Over";
   }
 
   return "Less than 10";
}

// console.log(testGreaterOrEqual(121));


// Comparison with the Less Than Operator
function testLessThan(val) {
   if (val < 25) {  // Change this line
     return "Under 25";
   }
 
   if (val < 55) {  // Change this line
     return "Under 55";
   }
 
   return "55 or Over";
}
 
// console.log(testLessThan(25));


// Comparisons with the Logical "AND" Operator
function testLogicalAnd(val) {
   // Only change code below this line
 
   if (val >= 25 && val <= 50){
     return "Yes";
   }
 
   // Only change code above this line
   return "No";
}
 
// console.log(testLogicalAnd(10));


// Comparisons with the Logical "OR" Operator
function testLogicalOr(val) {
   // Only change code below this line
 
   if (val < 10 || val > 20){
     return "Outside";
   }
 
   // Only change code above this line
   return "Inside";
}
 
// console.log(testLogicalOr(9));


// Introducing "Else" Statements
function testElse(val) {
   let result = "";
   // Only change code below this line
 
   if (val > 5) {
     result = "Bigger than 5";
   } else {
     result = "5 or Smaller";
   }
 
   // Only change code above this line
   return result;
 
}
 
// console.log(testElse());


// Introducing "Else If" Statements
function testElseIf(val) {
   if (val > 10) {
     return "Greater than 10";
   } else  if (val < 5) {
     return "Smaller than 5";
   } else {
     return "Between 5 and 10"
   };
}
 
// console.log(testElseIf(7));


// Golf code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  // Only change code below this line

  if (strokes === 1){
    return names[0];
  } else if (strokes <= par - 2){
    return names[1];
  } else if (strokes === par - 1){
    return names[2];
  } else if (strokes === par){
    return names[3];
  } else if (strokes === par + 1){
    return names[4];
  } else if (strokes === par + 2){
    return names[5];
  } else if (strokes >= par + 3){
    return names[6]
  }


  // Only change code above this line
}

// console.log(golfScore(1, 2));


// Selecting from Many Options with Switch Statements
// For Example: 
// // switch (lowercaseLetter) {
// //   case "a":
// //     console.log("A");
// //     break;
// //   case "b":
// //     console.log("B");
// //     break;
// // }

// Class work:
function caseInSwitch(val) {
  let answer = "";
  // Only change code below this line
  
  switch (val){
    case 1:
    answer = "alpha";
    break;
  case 2: 
    answer = "beta";
    break;
  case 3: 
    answer = "gamma";
    break;
  case 4:
    answer = "delta";
    break;
  }


  // Only change code above this line
  return answer;
}

// console.log(caseInSwitch(1));


// Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;
  }


  // Only change code above this line
  return answer;
}

// console.log(switchOfStuff('b'));


// Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  let answer = "";
  // Only change code below this line
  switch (val){
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid";
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
      break;
  }


  // Only change code above this line
  return answer;
}

// console.log(sequentialSizes(8));


// Returning Boolean Values from Functions
// Example:
function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
// Answer:
function isEqual(a, b) {
  return a === b;
}


// Return Early Pattern for Functions
// Example:
function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
// console.log(myFun());
// Classwork:
function abTest(a, b) {
  // Only change code below this line
  if (a < 0 || b < 0){
    return undefined;
  }


  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// abTest(2,2);


// Counting Cards 
let count = 0;

function cc(card) {
  // Only change code below this line
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  if(count > 0){
    return count + " Bet";
  } else{
    return count + " Hold"
  }
  
  // Only change code above this line
}

// console.log(cc(2));


// Build JavaScript Objects
const cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"]
};

// console.log(cat);


// Accessing Object Properties with Dot Notation
const testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};

// Only change code below this line
const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line


// Accessing Object Properties with Bracket Notation
const testObj1 = {
  "an entree": "hamburger",
  "my side": "veggies",
  "the drink": "water"
};

// Only change code below this line
const entreeValue = testObj1["an entree"];   // Change this line
const drinkValue = testObj1["the drink"];    // Change this line


// Accessing Object Properties with Variables
const testObj2 = {
  12: "Namath",
  16: "Montana",
  19: "Unitas"
};

// Only change code below this line
const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line


// Updating Object Properties
const myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line
myDog.name = "Happy Coder";
// console.log(myDog.name)


// Add New Properties to a JavaScript Object
const ourDog1 = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog1.bark = "bow-wow";

// console.log(ourDog1);


// Delete Properties from a JavaScript Object
const ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;



// Using Objects for Lookups
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line
  const lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank"
  }

  result = lookup[val];
  // Only change code above this line
  return result;
}

// console.log(phoneticLookup("charlie"));


// Testing Objects for Properties
function checkObj(obj, checkProp) {
  // Only change code below this line
  if(obj.hasOwnProperty(checkProp)){
    return obj[checkProp];
  } else {
    return "Not Found";
  };
  // Only change code above this line
}


console.log(checkObj(
  {
    gift: "pony", 
    pet: "kitten", 
    bed: "sleigh"
  }, 
  "gift"
));


// Manipulating Complex Objects
const myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Shabs planta",
    "title": "Bar Man",
    "release_year": 1996,
    "formats": [
      "Club",
      "Event",
      "Concert"
    ],
    "gold": true
  }
];

// Accessing Nested Objects
// Example:
const ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};

const v = ourStorage.cabinet["top drawer"].folder2;
const vv = ourStorage.desk.drawer;


// Class:
const myStorage = {
  "car": {
    "inside": {
      "glove box": "maps",
      "passenger seat": "crumbs"
     },
    "outside": {
      "trunk": "jack"
    }
  }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

// console.log(gloveBoxContents)


// Accessing Nested Arrays
const myPlants = [
  {
    type: "flowers",
    list: [
      "rose",
      "tulip",
      "dandelion"
    ]
  },
  {
    type: "trees",
    list: [
      "fir",
      "pine",
      "birch"
    ]
  }
];

const secondTree = myPlants[1].list[1];


// Record Collection
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  
  if (prop !== "tracks" && value !== ""){
    records[id][prop] = value;
  } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
    records[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    records[id][prop].push(value);
  } else if (value === "") {
    delete records[id][prop]
  }

  return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');


// Iterate with JavaScript While Loops
const ourArray = [];
let i = 0;

while (i < 5) {
  ourArray.push(i);
  i++;
}; // ourArray = [0, 1, 2, 3, 4]


// Add the numbers 5 through 0 (inclusive)
const myArray = [];
let x = 5;

while (x >= 0) {
  myArray.push(i);
  x--;
} // myArray = [5, 4, 3, 2, 1, 0]


// Iterate with JavaScript For Loops
const myArray1 = [];

for (let x = 1; x <= 5; x++) {
  const g = myArray1.push(x);
  // console.log(g)
} // myArray1 = [1, 2, 3, 4, 5]


// Iterate Odd Numbers With a For Loop
const ourArray2 = [];

for (let i = 0; i < 10; i += 2) {
  ourArray2.push(i);
} // ourArray2 = [0, 2, 4, 6, 8]
// Class:
const myArray2 = [];

for (let i = 1; i <= 9; i += 2){
  myArray2.push(i)
} // myArray2 = [1, 3, 5, 7, 9];


// Count Backwards With a For Loop
const myArray3 = [];

for (let i = 9; i >= 1; i -= 2){
  myArray3.push(i);
} // myArray3 = [9, 7, 5, 3, 1]


// Iterate Through an Array with a For Loop
const arr = [10, 9, 8, 7, 6];

for (let i = 0; i < arr.length; i++) {
  //  console.log(arr[i]);
}
// Class:
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;

for (let i = 0; i < myArr.length; i++) {
  const v = total += myArr[i];

  // console.log(v)
}


// Nesting For Loops
const arr1 = [
  [1, 2], [3, 4], [5, 6]
];

for (let i = 0; i < arr1.length; i++) {
  // console.log(arr1[i][0]);
  for (let j = 0; j < arr1[i].length; j++) {
    // console.log(arr1[i][j]);
  }
}
// Class:
function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
      product = product * arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

const v1 = multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
// console.log(v1)


// Iterate with JavaScript Do...While Loops
// Example:
const ourArray4 = []; 
let ii = 5;

do {
  ourArray4.push(i);
  i++;
} while (i < 5);

// console.log(ii)


// Replace Loops using Recursion
// Example:
function multiply(arr, n) {
  if (n <= 0) {
    return 1;
  } else {
    return multiply(arr, n - 1) * arr[n - 1];
  }
}
// Class:
function sum(arr, n) {
  // Only change code below this line
  if (n === 0){
    return 0;
  } else {
    return sum(arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}


// Profile Lookup
// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  for (let i = 0; i < contacts.length; i++){
    if(contacts[i].firstName === name){
      if(contacts[i].hasOwnProperty(prop)){
        return contacts[i][prop];
      } else {
        return "No such property";
      }
    }
  } return "No such contact";
  // Only change code above this line
}

lookUpProfile("Akira", "likes");



// Generate Random Fractions with JavaScript
function randomFraction() {
  return Math.random();
}


// Generate Random Whole Numbers with JavaScript
function randomWholeNum() {
  return Math.floor(Math.random() * 10);
}


// Generate Random Whole Numbers within a Range
function randomRange(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const ram1 = randomRange(2, 7);
// console.log(randomRange(20, 40))


// Use the parseInt Function
function convertToInteger(str) {
  return parseInt(str)
}

convertToInteger("56");


// Use the parseInt Function with a Radix
function convertToInteger(str) {
  return parseInt(str, 2);
}

convertToInteger("10011"); // returns 19


// Use the Conditional (Ternary) Operator
function checkEqual(a, b) {
  return a === b ? "Equal" : "Not Equal";
}

checkEqual(1, 2);


// Use Multiple Conditional (Ternary) Operators
function checkSign(num) {
  return (num < 0) ? "negative"
  : (num > 0) ? "positive"
  : "zero";
}

checkSign(10);



// Use Recursion to Create a Countdown
function countdown(n){
  if (n < 1){
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

// console.log(countdown(3))

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
  }
}

// console.log(countup(5));


// Use Recursion to Create a Range of Number
function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum){
    return [];
  } else {
    const arr1 = rangeOfNumbers(startNum, endNum - 1);
    arr1.push(endNum);
    return arr1;
  }
};







// ES6  JavaScript 2015

// ES6 ECMAscript or ES6, was released in 2015
// // ECMAScript, or ES, is a standardized version of JavaScript. Because all major browsers follow this specification, the terms ECMAScript and JavaScript are interchangeable.

// // Most of the JavaScript you've learned up to this point was in ES5 (ECMAScript 5), which was finalized in 2009. While you can still write programs in ES5, JavaScript is constantly evolving, and new features are released every year.

// // ES6, released in 2015, added many powerful new features to the language. In this course, you'll learn these new features, including arrow functions, destructuring, classes, promises, and modules.


// Compare Scopes of the var and let Keywords
function checkScope() {
  let i = 'function scope';
  if (i === true) {
    i = 'block scope';
    console.log('Block scope i is: ', i);
  } else {
    console.log('Function scope i is: ', i);
    return i;
  }
}


// Mutate an Array Declared with const
// Example:
const s = [5, 6, 7];
// s = [1, 2, 3];
s[2] = 45;
// console.log(s);

// Class:
const aa = [5, 7, 2];
function editInPlace() {
  // Only change code below this line

  // Using s = [2, 5, 7] would be invalid
  aa[0] = 2;
  aa[1] = 5;
  aa[2] = 7;

  // Only change code above this line
}
editInPlace();

// console.log(a)


// Prevent Object Mutation
function freezeObj() {
  const MATH_CONSTANTS = {
    PI: 3.14
  };
  // Only change code below this line
  Object.freeze(MATH_CONSTANTS);

  // Only change code above this line
  try {
    MATH_CONSTANTS.PI = 99;
  } catch(ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();
// console.log(PI)


// Use Arrow Functions to Write Concise Anonymous Functions
const magic = () => new Date();


// Write Arrow Functions with Parameters
// Example:
const doubler = item => item * 2;
doubler(3);
const multiplier = (item, multi) => item * multi;
multiplier(4, 2);
// Class:
const myConcat = (arr1, arr2) => arr1.concat(arr2);

// console.log(myConcat([1, 2], [3, 4, 5]));


// Set Default Parameters for Your Functions
const increment = (number = 1, value = 1) => number + value;


// Use the Rest Parameter with Function Parameters
// Example:
function howMany(...args) {
  return "You have passed " + args.length + " arguments.";
}
// console.log(howMany(0, 1, 2));
// console.log(howMany("string", null, [1, 2, 3], { }));

// Class:
const sum1 = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}
// console.log(sum1(2, 3))


// Use the Spread Operator to Evaluate Arrays In-Place.
// Example:
const arr2 = [6, 89, 3, 45];
const maximus = Math.max(...arr2);

// console.log(maximus); 
// Class:
const arr3 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr4;

arr4 = [...arr3];  // Change this line

// console.log(arr4);


// Use Destructuring Assignment to Extract Values from Objects
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line

const {today, tomorrow} = HIGH_TEMPERATURES;
// Only change code above this line

// console.log(today);


// Use Destructuring Assignment to Assign Variables from Objects
const HIGH_TEMPERATURES1 = {
  yesterday: 75,
  today: 77,
  tomorrow: 80
};

// Only change code below this line
  
const {today: highToday, tomorrow: highTomorrow} = HIGH_TEMPERATURES1;

// Only change code above this line
// console.log(highToday);


// Use Destructuring Assignment to Assign Variables from Nested Objects
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 }
};

// Only change code below this line
  
const {today: {low: lowToday1, high: highToday1}} = LOCAL_FORECAST;

// Only change code above this line
// console.log(lowToday1);


// Use Destructuring Assignment to Assign Variables from Arrays
// Example:
// const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// // console.log(a, b, c); // The console will display the values of a, b, and c as 1, 2, 5.
// Class:
let g = 8, h = 6;
[g, h] = [h, g];

// console.log(g, h); // the console display g = 6 and h = 8;


// Use Destructuring Assignment with the Rest Parameter to Reassign Array Elements
// Example:
const [a, b, ...arr6] = [1, 2, 3, 4, 5, 7];
// console.log(a, b); // display  values 1, 2
// console.log(arr6); // display an Array of [3, 4, 5, 7]
// Class:
const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Only change code below this line
  const [a,b, ...arr7] = list; // Change this line
  // Only change code above this line
  return arr7;
}
const arr7 = removeFirstTwo(source);
// console.log(arr7); // display an Array of [3, 4, 5, 6, 7, 8, 9, 10];


// Use Destructuring Assignment to Pass an Object as a Function's Parameters
// Example: 1
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;

}
// Example: 2
const profileUpdate1 = ({ name, age, nationality, location }) => {

}
// Class:
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

// Only change code below this line
const half = ({max, min}) => (max + min) / 2.0; 
// Only change code above this line


// Create Strings using Template Literals
const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["no-extra-semi", "no-dup-keys"]
};
function makeList(arr) {
  // Only change code below this line
  const failureItems = [];
  for (let i = 0; i < arr.length; i++){
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`);
  }
  // Only change code above this line

  return failureItems;
}

const failuresList = makeList(result.failure);


// Write Concise Object Literal Declarations Using Object Property Shorthand
const createPerson = (name, age, gender) => {
  // Only change code below this line
  return ({name, age,gender});
  // Only change code above this line
};


// Write Concise Declarative Functions with ES6
// Example: ES5
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
// Class: ES6
const bicycle = {
  gear: 2,
  setGear(newGear) {
    this.gear = newGear;
  }
};
bicycle.setGear(3);
// console.log(bicycle.gear);


// Use class Syntax to Define a Constructor Function
// Example: ES5
var SpaceShuttle = function(targetPlanet){
  this.targetPlanet = targetPlanet;
}
var zeus = new SpaceShuttle('Jupiter');
// Class: ES6
class Vegetable {
  constructor(name){
    this.name = name;
  }
}

const carrot = new Vegetable('carrot');
// console.log(carrot.name); // Should display 'carrot'


// Use getters and setters to Control Access to an Object
// Example:
class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
// console.log(novel.writer);
novel.writer = 'newAuthor';
// console.log(novel.writer);

// Class:
class Thermostat {
  constructor(number){
    this._number = number;
  } 

  get temperature() {
    return (5/9) * (this._number - 32);
  }

  set temperature(newNumber) {
    this._number = (newNumber * 9.0 / 5 + 32);
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius


// Create a Module Script
/* <html>
  <body>
  
  <script type="module" src="index.js"></script>

  </body>
</html> */


// Use export to Share a Code Block
// // Examples:
// export const add = (n, o) => {
//   return n + o;
// }
// // or
// const add = (l, m) => {
//   return l + m;
// }

// export { add };

// Class:
const uppercaseString = (string) => {
  return string.toUpperCase();
}

const lowercaseString = (string) => {
  return string.toLowerCase()
}

// export {uppercaseString, lowercaseString};


// // Reuse JavaScript Code Using import
// import {uppercaseString, lowercaseString} from './string_functions.js';
// // Only change code above this line

// uppercaseString("hello");
// lowercaseString("WORLD!");


// // Use * to Import Everything from a File
// // Example:
// import * as myMathModule from "./math_functions.js";

// myMathModule.add(2,3);
// myMathModule.subtract(5,3);

// // Class:
// import * as stringFunctions from './string_functions.js'

// stringFunctions.uppercaseString("hello");
// stringFunctions.lowercaseString("WORLD!");


// // Create an Export Fallback with export default
// export default function subtract(x, y) {
//   return x - y;
// };


// // Import a Default Export
// import subtract from "./math_functions.js";

// subtract(7,4);


// // Create a JavaScript Promise
// const makeRequest = new Promise((resolve, reject) => {

// });


// // Complete a Promise with resolve and reject
// const makeServerRequest = new Promise((resolve, reject) => {
//   // responseFromServer represents a response from a server
//   let responseFromServer;
    
//   if(responseFromServer) {
//     resolve("We got the data") // Change this line
//   } else {  
//     reject("Data not received") // Change this line
//   }
// });


// Handle a Fulfilled Promise with then
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});


// Handle a Rejected Promise with catch
const ServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

// ServerRequest.then(result => {
//   console.log(result);
// });
ServerRequest.catch(error => {
  console.log(error)
});





// Regular Expressions

// Regular expressions, often shortened to "regex" or "regexp", are patterns that help programmers match, search, and replace text. Regular expressions are very powerful, but can be hard to read because they use special characters to make more complex, flexible matches.

// In this course, you'll learn how to use special characters, capture groups, positive and negative lookaheads, and other techniques to match any text you want.


// Using the Test Method
let myString = "Hello, World!";
let myRegex = /Hello/;
let result1 = myRegex.test(myString); // Change this line


// Match Literal Strings
let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result2 = waldoRegex.test(waldoIsHiding);


// Match a Literal String with Different Possibilities
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result3 = petRegex.test(petString);


// Ignore Case While Matching
let myString1 = "freeCodeCamp";
let fccRegex = /freecodecamp/i; // Change this line
let result4 = fccRegex.test(myString1);


// Extract Matches
// Example: 
"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex); // Here the first match would return ["Hello"] and the second would return ["expressions"]

// Class:
let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result5 = extractStr.match(codingRegex); // Change this line;


// Find More Than the First Match
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /Twinkle/ig; // Change this line
let result6 = twinkleStar.match(starRegex); // Change this line


// Match Anything with Wildcard Period
let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Change this line
let result7 = unRegex.test(exampleStr);


// Match Single Character with Multiple Possibilities
let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/ig; // Change this line
let result8 = quoteSample.match(vowelRegex); // Change this line

// console.log(result);


// Match Letters of the Alphabet
let quoteSample1 = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[A-Z]/ig; // Change this line
let result9 = quoteSample1.match(alphabetRegex); // Change this line

// console.log(result9);


// Match Numbers and Letters of the Alphabet
let jennyStr = "Jenny8675309";
let myRegex1 = /[a-z0-9]/ig;
let rrr = jennyStr.match(myRegex1);

// console.log(rrr)
// Class:
let quoteSample2 = "Blueberry 3.141592653s are delicious.";
let myRegex2 = /[h-s2-6]/ig; // Change this line
let result10 = quoteSample2.match(myRegex2); // Change this line


// Match Single Characters Not Specified
let quoteSample3 = "3 blind mice.";
let myRegex3 = /[^0-9^aeiou]/ig; // Change this line
let result11 = quoteSample3.match(myRegex3); // Change this line


// Match Characters that Occur One or More Times
let difficultSpelling = "Mississippi";
let myRegex4 = /s+/g; // Change this line
let result12 = difficultSpelling.match(myRegex4);



// Match Characters that Occur Zero or More Times

let chewieQuote = "Aaaaaaaaaaaaaaaarrrgh!";
let chewieRegex4 = /Aa*/; // Change this line
let result13 = chewieQuote.match(chewieRegex4);

// console.log(result13);


// Find Characters with Lazy Matching
let text = "<h1>Winter is coming</h1>";
let myRegex5 = /<h.[a-z]*?>/; // Change this line
let result14 = text.match(myRegex5);


// Find One or More Criminals in a Hunt
let text1 = "P1P5P4CCCcP2P6P3.";
let reCriminals = /C+/; // Change this line


// Match Beginning String Patterns;
let rickyAndCal = "Cal and Ricky both like racing.";
let calRegex = /^Cal/; // Change this line
let result15 = calRegex.test(rickyAndCal);

// console.log(result15);


// Match Ending String Patterns
let caboose = "The last car on a train is the caboose";
let lastRegex = /caboose$/; // Change this line
let result16 = lastRegex.test(caboose);


// Match All Letters and Numbers
// Example:
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

// Class:
let quoteSample4 = "The five boxing wizards jump quickly.";
let alphabetRegexV2 = /\w/g; // Change this line
let result17 = quoteSample4.match(alphabetRegexV2).length;


// Match Everything But Letters and Numbers
let quoteSample5 = "The five boxing wizards jump quickly.";
let nonAlphabetRegex = /\W/g; // Change this line
let result18 = quoteSample5.match(nonAlphabetRegex).length;


// Match All Numbers
// The shortcut to look for digit characters is \d, with a lowercase d. This is equal to the character class [0-9], which looks for a single character of any number between zero and nine.
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Change this line
let result19 = movieName.match(numRegex).length;


// Match All Non-Numbers
// The shortcut to look for non-digit characters is \D. This is equal to the character class [^0-9], which looks for a single character that is not a number between zero and nine.
let movieName1 = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Change this line
let result20 = movieName.match(noNumRegex).length;


// Restrict Possible Usernames
let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result21 = userCheck.test(username);


// Match Whitespace
let sample = "Whitespace is important in separating words";
let countWhiteSpace = /\s/g; // Change this line
let result22 = sample.match(countWhiteSpace);

// console.log(result22); // \s is for clearing data and sending back and empty string for each words...


// Match Non-Whitespace Characters
// Search for non-whitespace using \S, which is an uppercase s. 
let sample1 = "Whitespace is important in separating words";
let countNonWhiteSpace = /\S/g; // Change this line
let result23 = sample1.match(countNonWhiteSpace);


// Specify Upper and Lower Number of Matches
let ohStr = "Ohhh no";
let ohRegex = /Oh{3,6}.no/; // Change this line
let result24 = ohRegex.test(ohStr);


// Specify Only the Lower Number of Matches
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result25 = haRegex.test(haStr);


// Specify Exact Number of Matches
let timStr = "Timmmmber";
let timRegex = /Tim{4}ber/; // Change this line
let result26 = timRegex.test(timStr);


// Check for All or None
let favWord = "favorite";
let favRegex = /favou?rite/; // Change this line
let result27 = favRegex.test(favWord);


// Positive and Negative Lookahead
// Example:
let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
quit.match(quRegex);
noquit.match(qRegex);
// Example: 2 Password checker
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password);
// Class:
let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\w*\d{2})/; // Change this line
let result28 = pwRegex.test(sampleWord); // the pwRegex to match passwords that are greater than 5 characters long, and have two consecutive digits.


// Check For Mixed Grouping of Characters
// Example:
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);
// Class:
let myString2 = "Eleanor Roosevelt";
let myRegex6 = /(Franklin|Eleanor).*Roosevelt/; // Change this line
let result29 = myRegex.test(myString); // Change this line
// After passing the challenge experiment with myString and see how the grouping works


// Reuse Patterns Using Capture Groups
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result30 = reRegex.test(repeatNum);


// Use Capture Groups to Search and Replace
// Example:
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
// Example:
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
// class:
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result31 = str.replace(fixRegex, replaceText);


// Remove Whitespace from Start and End
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result32 = hello.replace(wsRegex, ""); // Change this line


