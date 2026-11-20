class Shopping {
  // PRIVATE CONSTRUCTOR
  // A private constructor prevents object creation from outside the class.
  // We cannot directly create an object using:
  // let obj = new Shopping(); // ERROR

  private constructor() {}

  // METHOD CHAINING:
  // Each method returns 'this'.
  // 'this' represents the current object.
  // Returning this allows us to call another method on the same object.

  login(): Shopping {
    console.log("Login to amazon application....");
    return this;
  }

  searchProduct(): Shopping {
    console.log("Search the product ");
    return this;
  }

  addToCart(): Shopping {
    console.log("Add the product to the cart");
    return this;
  }

  checkOut(): Shopping {
    console.log("CheckOut the item...");
    return this;
  }

  payment(): Shopping {
    console.log("Pay for the item...");
    return this;
  }

  logOut(): Shopping {
    console.log("Log Out from the Application");
    return this;
  }

  // STATIC FACTORY METHOD
  // Static methods belong to the class, not to an object.
  // We can call this method directly using the class name.
  //
  // It creates and returns a new Shopping object.
  // Since the constructor is private, this method provides
  // controlled object creation from inside the class.

  static Shoppingcart(): Shopping {
    return new Shopping();
  }
}

// METHOD CHAINING / FLUENT INTERFACE
//
// Step 1: Shoppingcart() creates and returns an object.
// Step 2: login() executes and returns the same object.
// Step 3: searchProduct() executes on the same object.
// Step 4: addToCart() executes on the same object.
// Step 5: checkOut() executes on the same object.
// Step 6: payment() executes on the same object.
// Step 7: logOut() executes on the same object.
//
// Because every method returns 'this', we can chain
// multiple method calls in a single statement.

Shopping.Shoppingcart()
  .login()
  .searchProduct()
  .addToCart()
  .checkOut()
  .payment()
  .logOut();
