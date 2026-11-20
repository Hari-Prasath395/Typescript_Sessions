/**
 * INHERITANCE IN TYPESCRIPT
 *
 * Inheritance allows one class to acquire
 * the properties and methods of another class.
 *
 * Employee = Parent class
 * Users    = Child class
 */

// Importing the Employee class from another file.
import { Employee } from "./accessModifiers";

// extends keyword is used to inherit the Employee class.
class Users extends Employee {
  // Constructor of the child class.
  public constructor(empName: string, age: number, salary: number) {
    // super() calls the parent class constructor.
    // It passes the values to the Employee constructor.
    //
    // This initializes empName, age and salary.
    super(empName, age, salary);
  }
}

// Creating an object of the child class.
let user1 = new Users("Manna", 31, 350000);

// Calling the inherited public method from Employee.
user1.drive();

// Accessing the inherited public property.
console.log(user1.empName);

// Protected and private properties cannot be
// accessed directly outside their allowed scope.
