// Creating a class named employee
export class Employee {
  // Method to get employee salary
  // empName accepts a string
  // number specifies the return type

  getSalary(empName: string): number {
    if (empName === "Joe") {
      return 50000;
    } else if (empName === "Peter") {
      return 20000;
    } else {
      console.log("Person is not available..");

      return 0;
    }
  }
}

// Creating an object (instance) of Employee class
let user = new Employee();

// Calling the method using the object
// let num = user.getSalary("Peter");

// Printing the returned salary
// console.log(num); // Output: 20000
