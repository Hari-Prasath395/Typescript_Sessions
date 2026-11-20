/**
 * 1. NUMBER DATA TYPE
 */

// Explicitly declaring the variable type as number
let marks: number = 90;

// Printing the value
console.log(marks); // Output: 90

// Checking the data type at runtime
console.log(typeof marks); // Output: number

// TypeScript will show a compilation error
// because marks accepts only number values.

// marks = "Tommy";

/**
 * 2. ARRAY
 */

// Declaring an array that accepts only number values
let num: number[] = [10, 20, 30, 40, 50, 60];

// Printing the complete array
console.log(num);

// typeof returns object for arrays in JavaScript
console.log(typeof num); // Output: object

// Adding a number to the array
num.push(70);

// TypeScript compilation error:
// Array accepts only number values.

// num.push("George");

console.log(num);

/**
 * 3. TUPLE
 */

// Tuple allows us to store multiple data types
// in a predefined order.

// Here:
// empName  -> string
// age      -> number
// salary   -> number
// isActive -> boolean

let person: [empName: string, age: number, salary: number, isActive: boolean] =
  ["Neha", 20, 56000, true];

// Printing the tuple
console.log(person);

// Accessing individual tuple elements
console.log(person[0]); // Neha
console.log(person[1]); // 20
console.log(person[2]); // 56000
console.log(person[3]); // true

// Adding elements using push()
// TypeScript allows push(), but it does not enforce
// the original tuple length at runtime.

person.push(60000);
person.push(false);

console.log(person);

/**
 * 4. ENUM
 */

// Enum stands for Enumeration.
// It is used to define a collection of named constants.

// String enum
enum Browser {
  chrome = "Google Chrome",
  firefox = "Mozilla Firefox",
  safari = "Apple Safari",
  edge = "Microsoft Edge",
}

// Accessing enum values using enum member names
console.log(Browser.chrome); // Google Chrome
console.log(Browser.firefox); // Mozilla Firefox
console.log(Browser.safari); // Apple Safari
console.log(Browser.edge); // Microsoft Edge

/**
 * 1. ANY DATA TYPE
 */

// any allows a variable to store any type of value.
// It disables TypeScript's type checking for this variable.

let data: any = 10;

// Printing the value
console.log(data); // Output: 10

// Checking the data type at runtime
console.log(typeof data); // Output: number

// Changing the value from number to string
data = "Tomm";

console.log(data); // Output: Tomm
console.log(typeof data); // Output: string

// We can also assign boolean values
data = true;

console.log(data); // Output: true
console.log(typeof data); // Output: boolean

/**
 * 2. UNION TYPE
 */

// Union type allows a variable to accept
// more than one specified data type.

// Here, value can accept either string or number.
let value: string | number;

// Assigning a number
value = 10;

console.log(value); // Output: 10

// Assigning a string
value = "Manish";

console.log(value); // Output: Manish

// Boolean is not allowed because it is not
// included in the union type.

// value = true; // Compilation error

/**
 * 3. OBJECT USING TYPE ALIAS
 */

// type keyword is used to create a custom type.
// We can define the structure of an object.

// useType specifies:
// empName  -> string
// age      -> number
// isActive -> boolean

type useType = {
  empName: string;
  age: number;
  isActive: boolean;
};

// Creating an object using the custom type
let user: useType = {
  empName: "Manas",
  age: 30,
  isActive: true,
};

// Printing the complete object
console.log(user);

// Accessing individual object properties
console.log(user.empName); // Manas
console.log(user.age); // 30
console.log(user.isActive); // true
