/**
 * FUNCTION OVERLOADING IN TYPESCRIPT
 *
 * Function overloading allows us to define multiple
 * signatures for a function with the same name.
 */

class Calculator {
  // Overload signature 1:
  // Accepts two numbers and returns a number.
  add(a: number, b: number): number;

  // Overload signature 2:
  // Accepts two strings and returns a string.
  add(a: string, b: string): string;

  // Implementation signature:
  // This contains the actual function logic.
  // any allows the implementation to handle both types.
  add(a: any, b: any): any {
    // If both arguments are numbers, addition happens.
    // If both arguments are strings, concatenation happens.
    return a + b;
  }
}

// Creating an object of Calculator class
let cal = new Calculator();

// Calling the overloaded method with number arguments.
let result = cal.add(5, 5);

console.log(result); // Output: 10

// Calling the overloaded method with string arguments.
let result2 = cal.add("Hello ", "World");

console.log(result2); // Output: Hello World
