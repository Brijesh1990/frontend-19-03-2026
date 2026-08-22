/* 
An object is an instances of class
create any object via new keyword 

syntax 

class classname
{
  constructor(args)
  {
    statements;
  }

}
create an object of class

*/
class A 
{
 constructor(name)
 {
  this.name=name;  // this.name is a current object that stored data of name args
 }
}
var obj=new A("yash pol");  //this is an object of class A
console.log(obj) 