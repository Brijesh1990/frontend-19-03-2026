let num = 5;
res=num.toUpperCase();  // TypeError: num.toUpperCase is not a function
console.log()

let obj = null;
res=obj.name;           // TypeError: Cannot read property 'name' of null

console.log(res)
const arr = [];
res=arr.map("not a function");  // TypeError: Callback must be a function
console.log(res)