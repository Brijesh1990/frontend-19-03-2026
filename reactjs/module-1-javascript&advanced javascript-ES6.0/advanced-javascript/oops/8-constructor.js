/*  
constructor : A constructor is same name of class when we called an object of class constructor automatically called 

*/

class A 
{
    constructor(a,b)
    {
     this.a=a;
     this.b=b; 
    }
}
class B extends A 
{
   constructor(a,b,c)
   {
    super(a,b)
    this.c=c


   } 
}
var ob=new B(20,10,"c")
console.log(ob);
console.log(ob.a+ob.b);
console.log(ob.a*ob.b);
console.log(ob.a/ob.b);
