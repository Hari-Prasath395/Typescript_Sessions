function m1(): void {
  console.log("M1 method...");
  m2();
}

function m2(): void {
  console.log("M2 method...");
  m3();
}

function m3(): void {
  try {
    console.log("M3 method...");
    throw new Error("Error in M3 method...");
  } catch (error) {
    console.log("Error in the M3 method" + error);
  } finally {
    console.log("This block is executed for sure...");
  }
}

m1();
console.log("Bye...");
