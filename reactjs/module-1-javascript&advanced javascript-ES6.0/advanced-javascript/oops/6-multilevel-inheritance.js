/*  
A parent class property access via its  one child class and its access so on  i.e called single inheritance

    A => B => C => D => E

*/ 
class Car 
{
    constructor(carname)
    {
        this.carname=carname;
    }
}
class Garage extends Car
{
    constructor(carname,garagename,address)
    {
        super(carname)
        this.garagename=garagename;
        this.address=address;

    }
}

class Mechanic extends Garage
{
    constructor(carname,garagename,address,mechanicname,age,exp)
    {
        super(carname,garagename,address)
        {
            this.mechanicname=mechanicname;
            this.age=age;
            this.exp=exp;
        }
    }
}

var obj=new Mechanic("maruti fronx","patel autoservice pvt ltd","150 feet ring road rajkot","Mr. duggu patel","39","6 years");
console.log(obj);
console.log(obj.address)
