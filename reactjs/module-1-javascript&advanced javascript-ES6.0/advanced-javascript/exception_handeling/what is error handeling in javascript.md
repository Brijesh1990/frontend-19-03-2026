# Error Handling & Exception Handling in JavaScript

## Table of Contents
1. [What is Error Handling?](#what-is-error-handling)
2. [Error Object](#error-object)
3. [Types of Errors](#types-of-errors)
4. [Error Handling Mechanisms](#error-handling-mechanisms)
5. [Async Error Handling](#async-error-handling)
6. [Custom Errors](#custom-errors)
7. [Best Practices](#best-practices)

---

## What is Error Handling?

**Error handling** is a mechanism that allows you to gracefully manage and respond to errors that occur during program execution. Instead of allowing the program to crash, error handling lets you catch, log, and recover from errors.

### Why Error Handling is Important:

- Prevents application crashes
- Improves user experience
- Facilitates debugging
- Enables recovery from issues
- Allows logging and monitoring

---

## Error Object

Every error in JavaScript is an instance of the `Error` object. The Error object contains:

```javascript
const error = new Error("Something went wrong");
console.log(error.name);      // "Error"
console.log(error.message);   // "Something went wrong"
console.log(error.stack);     // Stack trace
```

### Error Properties:

```javascript
{
  name: "ErrorType",           // Type of error
  message: "Error description", // Error message
  stack: "Error stack trace"    // Where error occurred
}
```

---

## Types of Errors

### 1. **SyntaxError**
Occurs when there's invalid JavaScript syntax. Detected during parsing before code runs.

```javascript
// SyntaxError Example
const x = {invalid syntax here};  // SyntaxError
const y = "unclosed string;       // SyntaxError

// This is caught before execution
```

### 2. **TypeError**
Occurs when a value is not of the expected type.

```javascript
// TypeError Examples
let num = 5;
num.toUpperCase();  // TypeError: num.toUpperCase is not a function

let obj = null;
obj.name;           // TypeError: Cannot read property 'name' of null

const arr = [];
arr.map("not a function");  // TypeError: Callback must be a function
```

### 3. **ReferenceError**
Occurs when referencing a variable that doesn't exist.

```javascript
// ReferenceError Examples
console.log(undefinedVariable);  // ReferenceError: undefinedVariable is not defined

function test() {
  console.log(x);  // ReferenceError if x not declared
}
```

### 4. **RangeError**
Occurs when a value is outside the acceptable range.

```javascript
// RangeError Examples
const arr = new Array(-1);  // RangeError: Invalid array length

const num = 1.234567890123456789012345678901234567890;
num.toFixed(9999);          // RangeError: toFixed() argument must be between 0 and 100
```

### 5. **EvalError**
Occurs in `eval()` function (rarely used in modern JavaScript).

```javascript
// EvalError Example (historical)
try {
  throw new EvalError("Error in eval");
} catch(e) {
  console.log(e.name);  // "EvalError"
}
```

### 6. **URIError**
Occurs when a global URI function is used incorrectly.

```javascript
// URIError Examples
decodeURIComponent("%");  // URIError: URI malformed
decodeURI("%XY");         // URIError: URI malformed
```

### 7. **InternalError**
Engine-specific error (non-standard). Occurs when internal engine error occurs.

```javascript
// InternalError Example (stack overflow)
function recursion() {
  recursion();  // InternalError: Too much recursion
}
recursion();
```

---

## Error Handling Mechanisms

### 1. **Try-Catch Block**

The most common error handling mechanism. Code in `try` block is executed, and if an error occurs, it's caught in `catch` block.

```javascript
try {
  // Code that might throw an error
  const result = riskyFunction();
  console.log(result);
} catch (error) {
  // Handle the error
  console.log("Error caught:", error.message);
  console.log("Error type:", error.name);
}
```

### 2. **Try-Catch-Finally Block**

`Finally` block executes regardless of whether an error occurred.

```javascript
let file = null;

try {
  file = openFile("data.txt");
  processFile(file);
} catch (error) {
  console.log("Error processing file:", error.message);
} finally {
  // Always executes - cleanup code
  if (file) {
    closeFile(file);
  }
}
```

### 3. **Throw Statement**

Manually throw an error to interrupt execution.

```javascript
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
  validateAge(-5);
} catch (error) {
  console.log(error.message);  // "Age cannot be negative"
}
```

### 4. **Error Propagation**

Errors can be re-thrown or propagated up the call stack.

```javascript
function divideNumbers(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
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
```

---

## Async Error Handling

### 1. **Promises with .catch()**

```javascript
function fetchData(url) {
  return fetch(url)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => {
      console.log("Error fetching data:", error.message);
    });
}

fetchData("https://api.example.com/data");
```

### 2. **Promise Chain Error Handling**

```javascript
fetch("https://api.example.com/user/1")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log("Error:", error.message);
  })
  .finally(() => {
    console.log("Request completed");
  });
```

### 3. **Async/Await with Try-Catch**

Most modern and readable approach for async error handling.

```javascript
async function fetchUserData(userId) {
  try {
    const response = await fetch(`https://api.example.com/user/${userId}`);
    
    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }
    
    const data = await response.json();
    console.log("User data:", data);
    return data;
  } catch (error) {
    console.log("Error fetching user:", error.message);
  } finally {
    console.log("Fetch operation completed");
  }
}

fetchUserData(1);
```

### 4. **Multiple Async Operations**

```javascript
async function fetchMultipleUsers(userIds) {
  try {
    const promises = userIds.map(id => 
      fetch(`https://api.example.com/user/${id}`).then(r => r.json())
    );
    
    const users = await Promise.all(promises);
    console.log("All users:", users);
  } catch (error) {
    console.log("Error fetching users:", error.message);
  }
}
```

---

## Custom Errors

### 1. **Extending Error Class**

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

class DatabaseError extends Error {
  constructor(message) {
    super(message);
    this.name = "DatabaseError";
  }
}

// Usage
try {
  throw new ValidationError("Email format is invalid");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Validation failed:", error.message);
  }
}
```
