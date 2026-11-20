/**
 * 1. FUNCTION WITH PARAMETERS AND RETURN TYPE
 */

// a and b are parameters of type number.
// number after the parentheses specifies the return type.
// This function accepts two numbers and returns their sum.

function add(a: number, b: number): number {
  return a + b;
}

// Calling the function and storing the returned value.
// any is used here, but number would be a better choice.
let sum: number = add(10, 5);

console.log(sum); // Output: 15

/**
 * 2. VOID RETURN TYPE
 */

// void means the function does not return a value.
// This function only prints a message to the console.

function print(): void {
  console.log("This function returns nothing.....");
}

// Calling the function
print();

// Output: This function returns nothing.....

/**
 * 3. FUNCTION RETURNING AN ARRAY
 */

// string[] specifies that the function returns
// an array containing only string values.

function getData(): string[] {
  console.log("Fetching the data from data base");

  return ["Ram", "Kannan", "Neha"];
}

// Calling the function and printing the returned array.
console.log(getData());

// Output:
// Fetching the data from data base
// [ 'Ram', 'Kannan', 'Neha' ]

/**
 * 4. FUNCTION RETURNING AN OBJECT
 */

// The return type defines the structure of the object.
// empName must be a string.
// age must be a number.

function getUser(): { empName: string; age: number } {
  return {
    empName: "Jhonn",
    age: 35,
  };
}

// Calling the function and storing the returned object.
let user = getUser();

console.log(user); // { empName: 'Jhonn', age: 35 }

// Accessing individual object properties
console.log(user.empName); // Jhonn
console.log(user.age); // 35

/**
 * 5. OPTIONAL PARAMETERS
 */

// Optional parameters are declared using the ? symbol.
// browserName is a mandatory parameter.
// headless is an optional boolean parameter.
//
// Important:
// Optional parameters must come after mandatory parameters.

function launchBrowser(browserName: string, headless?: boolean): void {
  console.log("Selected Browser: " + browserName);

  if (headless) {
    console.log("Run test cases on headless mode");
  } else {
    console.log("Run test cases on headed mode");
  }
}

// Calling the function with both parameters
launchBrowser("chrome", true);

// Calling the function without the optional parameter
launchBrowser("firefox");

// Calling the function with false
launchBrowser("edge", false);
