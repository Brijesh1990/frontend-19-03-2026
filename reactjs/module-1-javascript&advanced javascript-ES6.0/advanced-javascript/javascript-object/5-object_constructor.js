// object as constructor 
function display(id,name,age,salary)
{
    this.id=id,  // this.id stored current object of id
    this.name=name,
    this.age=age,
    this.salary=salary

}

// create an instance or object

const employee1=new display(1001,"yash",24,18500);
console.log(employee1);
console.log(employee1.id);
console.log(employee1.name);
console.log(employee1.age);
console.log(employee1.salary);