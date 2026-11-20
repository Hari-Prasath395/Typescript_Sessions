// Utility class
// A utility class contains reusable methods that can be
// accessed directly using the class name.

class Utils {
  // PRIVATE CONSTRUCTOR
  // A private constructor prevents object creation from outside
  // this class.
  //
  // Therefore, we cannot create an object like:
  // let obj = new Utils();  // ERROR

  private constructor() {}

  // STATIC METHOD
  // Static methods belong to the class, not to an object.
  // We can call them directly using the class name.
  //
  // No object creation is required.

  static readPdfFile(): void {
    console.log("Static Read Method....");
  }

  static writePdfFile(): void {
    console.log("Static Write Method....");
  }
}

// Calling static methods directly using the class name.
// This is possible because both methods are static.

Utils.readPdfFile();
Utils.writePdfFile();

// Object creation is not allowed because the constructor is private.

// let obj = new Utils(); // ERROR

/*
1. What is a Static Method?
- A static method belongs to the class rather than an object.
- We can access it using the class name.
- We don't need to create an object.
- Static methods cannot directly access non-static instance variables or methods.
*/

class Calculator {
  static add(a: number, b: number): number {
    return a + b;
  }
}

// Directly calling using class name
console.log(Calculator.add(10, 20));

// No object required

/*
What is a Private Constructor?
- A private constructor prevents object creation from outside the class.
- We cannot use the new keyword outside the class to create an object.
- It is commonly used in utility classes and Singleton design patterns.
*/
class Test {
  private constructor() {}
}

// let obj = new Test(); // ERROR
