/*  
super : keyword its is access parent class properties via its child class in inheritance
        
without super we can't access parent class properties in child class in javascript

*/

class A 
{
    constructor(nm,age)
    {
        this.nm=nm;
        this.age=age;

    }
}
class B extends A 
{
    constructor(nm,age,address)
    {
        super(nm,age);
        this.address=address

    }  
}

var obj=new B("brijesh",36,"raiya road rajkot")
console.log(obj)