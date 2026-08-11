function validateAge(age) {
  if (age < 0) {
    throw new Error("Age cannot be negative");
  }
  if (age < 18) {
    throw new TypeError("Must be 18 or older");
  }
  return "Valid age";
}

try {
  validateAge(15);
} catch (error) {
  console.log(error.message);  // "Age cannot be negative"
}