/*

nested if   statements  :
A condition within another condition i.e called conditional statements 
or 
if within another if i.e called nested if 

syntax : 

if(condition)
{
  if(condition)
  {
   statements
  }
} 
else 
{
statements 
}     

*/

// var a=10
// var b=20
// if(a>b)
// {
// console.log("a is greater than b")
// }

var a=40
var b=20
if(a>b)
{
  if(a!=0 && b!=0)
 {     
console.log("a is greater than b and both are positive numbers ")
}
}
else 
{
console.log("a is less than b")    
}
