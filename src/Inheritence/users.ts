export class Car {
  start(): void {
    console.log("This Car is starting.....");
  }

  stop(): void {
    console.log("This Car is stopping.....");
  }

  static billing(): void {
    console.log("Static billing method....");
  }
}

// BMW is a child class of Car.
// BMW inherits all the properties and methods of Car.
export class BMW extends Car {
  // Method overriding:
  // The child class provides its own implementation
  // of the start() method inherited from the parent class.
  override start(): void {
    console.log("This BMW car is starting....");
  }

  // This is a specific method available only in BMW.
  autoParking(): void {
    console.log("This BMW car has auto parking feature...");
  }

  //   override static billing(): void {
  //     console.log("Static billing method....");
  //   } ===static method cannot be overridded...
}
