export abstract class Page {
  //it can have both abstract and non abstract methods
  //abstract classses helps us to 0 - 100% abstraction.

  abstract title(): void;
  abstract url(): void;

  empName: string;
  age: number;

  constructor(empName: string, age: number) {
    this.age = age;
    this.empName = empName;
  }

  loadingTime(): void {
    console.log("Page loading time is 5 seconds");
  }
}
