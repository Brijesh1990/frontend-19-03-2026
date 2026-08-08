// JavaScript Hoisting Examples
// Hoisting means JavaScript moves declarations to the top of their scope during compilation.
// Important: only the declaration is hoisted, not the initialization.

console.log('--- Example 1: var hoisting ---');
console.log(message); // undefined
var message = 'Hello from hoisting';
console.log(message); // Hello from hoisting

console.log('\n--- Example 2: function declaration hoisting ---');
showMessage();
function showMessage() {
  console.log('Function declaration is hoisted');
}

console.log('\n--- Example 3: function expression hoisting ---');
try {
  greet();
} catch (error) {
  console.log('Error:', error.message);
}
var greet = function () {
  console.log('Function expression is not fully hoisted');
};

greet();

console.log('\n--- Example 4: let in Temporal Dead Zone (TDZ) ---');
try {
  console.log(name); // ReferenceError
} catch (error) {
  console.log('Error:', error.message);
}
let name = 'Alice';

console.log('\n--- Example 5: const in Temporal Dead Zone ---');
try {
  console.log(pi);
} catch (error) {
  console.log('Error:', error.message);
}
const pi = 3.14;

console.log('\n--- Example 6: hoisting inside a function scope ---');
function demo() {
  console.log(value); // undefined
  var value = 10;
  console.log(value); // 10
}
demo();

console.log('\n--- Example 7: block scope with let and const ---');
{
  console.log(blockVar); // undefined
  var blockVar = 'var is function scoped';
}
console.log(blockVar);

try {
  console.log(blockLet); // ReferenceError
} catch (error) {
  console.log('Error:', error.message);
}
{
  let blockLet = 'let is block scoped';
}

console.log('\n--- Example 8: class hoisting ---');
try {
  const person = new Person();
  console.log(person);
} catch (error) {
  console.log('Error:', error.message);
}

class Person {
  constructor() {
    this.name = 'Bob';
  }
}

console.log('\n--- Example 9: hoisting with var in loops ---');
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log('i =', i);
  }, 10);
}

console.log('\n--- Example 10: using let in loops to avoid the issue ---');
for (let j = 0; j < 3; j++) {
  setTimeout(function () {
    console.log('j =', j);
  }, 20);
}

console.log('\n--- Summary ---');
console.log('Hoisting is easier to understand as: declaration is moved up, initialization stays in place.');
console.log('Use let and const to avoid confusion and bugs related to hoisting.');
