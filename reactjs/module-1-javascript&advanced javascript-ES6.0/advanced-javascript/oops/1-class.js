/* 
A class is a group of member and its member function 
or
A class is a blue print of its object
or 
A class is nothing whenever we can't create its object

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