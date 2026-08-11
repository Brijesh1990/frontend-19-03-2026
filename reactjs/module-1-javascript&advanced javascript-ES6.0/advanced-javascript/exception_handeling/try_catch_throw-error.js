function divideNumbers(a, b) {
  if (b ===0) {
    throw new Error("Cannot divide by zero");
  }
  else 
  {
    throw new Error("Can be divide")
  }
  return a / b;
}

function calculate(a, b) {
  try {
    return divideNumbers(a, b);
  } catch (error) {
    console.log("Calculation error:", error.message);
    throw error;  // Re-throw error to caller
  }
}

try {
  calculate(10, 0);

} catch (error) {
  console.log("Final catch:", error.message);
}