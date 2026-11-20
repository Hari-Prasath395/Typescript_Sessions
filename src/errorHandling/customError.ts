class CustomError extends Error {
  constructor(message: string) {
    super(message);
  }
}

throw new CustomError("Invalid Error....");
