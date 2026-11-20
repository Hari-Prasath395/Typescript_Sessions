/**
 * 1. PROMISE WITH NUMBER RETURN TYPE
 */

// Promise<number> means this function returns a Promise
// that will eventually resolve with a number.

function getNumber(): Promise<number> {
  // Creating a new Promise.
  // resolve is used when the operation is successful.
  // reject is used when the operation fails.

  return new Promise((resolve, reject) => {
    // Resolving the Promise with the value 10.
    // Since we declared Promise<number>,
    // the resolved value must be a number.

    resolve(10);
  });
}

// Calling the getNumber() function.
// then() executes when the Promise is successfully resolved.

getNumber()
  .then((result) => {
    // result receives the resolved value (10).
    console.log(result);
  })

  // catch() handles the error if the Promise is rejected.

  .catch((error) => {
    console.log("Error occurred:", error);
  });

/**
 * 2. PROMISE WITH OBJECT RETURN TYPE
 */

// Creating a custom type using Type Alias.
// This defines the structure of the user object.

type User = {
  empName: string;
  age: number;
};

// Promise<User> means this function returns a Promise
// that will eventually resolve with a User object.

function getUserData(): Promise<User> {
  // Creating a new Promise.
  // resolve and reject handle success and failure.

  return new Promise((resolve, reject) => {
    // setTimeout() delays the execution by 2 seconds.
    // 2000 milliseconds = 2 seconds.

    setTimeout(() => {
      // Creating an object with employee details.
      // It follows the structure defined in User type.

      let user = {
        empName: "Manis",
        age: 30,
      };

      // Resolving the Promise with the user object.
      // The object is returned after 2 seconds.

      resolve(user);
    }, 2000);
  });
}

// Calling getUserData().
// then() executes after the Promise is resolved.

getUserData().then((myuser) => {
  // myuser receives the resolved user object.
  console.log(myuser);
});
