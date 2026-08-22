/*  
A Multiple base class access by its one derived class i.e multiple inheritance

    A     B    D
     
        C


    */ 


class Car 
{
    constructor(carname)
    {
        this.carname=carname;
    }
}


class Grage 
{
    constructor(garagename)
    {
        this.garagename=garagename;
    }
}
class Mechanics extends Car,Grage
{
    constructor(carname,garagename,mechanicname)
    {
        super(carname,garagename)
        this.mechanicname=mechanicname;
        
    }
}



var obj=new Mechanics("maruti fronx","patel autoservice pvt ltd","Mr. duggu patel");
console.log(obj);
console.log(obj.mechanicname)
