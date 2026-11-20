/**
 * ACCESS MODIFIERS IN TYPESCRIPT
 *
 * Access modifiers control where class properties
 * and methods can be accessed.
 *
 * Three access modifiers:
 * 1. public
 * 2. private
 * 3. protected
 */

export class Employee {
  // PUBLIC:
  // Can be accessed inside the class,
  // outside the class and by child classes.
  public empName: string;

  // PRIVATE:
  // Can be accessed only inside this Employee class.
  // Cannot be accessed directly outside this class
  // or inside child classes.
  private age: number;

  // PROTECTED:
  // Can be accessed inside this class
  // and its child classes.
  // Cannot be accessed directly outside the class.
  protected salary: number;

  // CONSTRUCTOR:
  // Constructor is automatically called when
  // an object is created using the new keyword.
  //
  // Parameters initialize the class properties.

  public constructor(empName: string, age: number, salary: number) {
    // this refers to the current object.
    this.empName = empName;
    this.age = age;
    this.salary = salary;
  }

  // PUBLIC METHOD:
  // Can be accessed outside the class
  // using an object.

  public drive(): void {
    console.log(this.empName + " is driving");

    // Private property can be accessed inside
    // its own Employee class.
    console.log(this.age + " is the employee's age");

    // Protected property can also be accessed
    // inside its own Employee class.
    console.log(this.salary + " is the employee's salary");
  }
}

// Creating an object of Employee class.
// The constructor receives three arguments.

let emp1 = new Employee("Hari", 30, 90000);

// Calling the public method using the object.
emp1.drive();

// Public property can be accessed directly.
console.log(emp1.empName);

// These will produce TypeScript compilation errors:
//
// console.log(emp1.age);
// console.log(emp1.salary);
