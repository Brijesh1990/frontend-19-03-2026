/*  
A parent class property access via its only one child class i.e called single inheritance

    A => B 

*/ 
class A 
{
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
}
class B extends A
{
    constructor(name,age,salary)
    {
        super(name,age)
        this.salary=salary
    }
}

var obj=new B("Harsh",21,12500);
console.log(obj);
console.log(obj.name);
console.log(obj.age);
console.log(obj.salary);
