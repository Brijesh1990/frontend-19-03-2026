# what is javascript-object ?

1. object is in key-value paired 
2. object is an entity with assigned values in key:values
3. object is defined inside {key:value}
4. object is an collection of related data and functionality that can be stored data in key:value pairs i.e called object.

# how can we defined object 

**examples**

```
// object as literals 

const employee={
id:1,
name:"brijesh",
age:35,
salary:115000,
department:"R&D"
}
console.log(employee)

```

# how to access  object property ?  

```
// object as literals 

const employee={
id:1,
name:"brijesh",
age:35,
salary:115000,
department:"R&D"
}
console.log(employee.id)

console.log(employee.name)

console.log(employee.age)

console.log(employee.salary)

console.log(employee.department)

```

# how many types we defined any object ? 

- There are three way to defined any object 

1. object as literals 

2. object as instance 

3. object as constructor  

## as a litrals 

```
// object as literals 

const employee={
id:1,
name:"brijesh",
age:35,
salary:115000,
department:"R&D"
}
console.log(employee)

```

## object as instance 

```
// object as instance
const employee =new Object();
employee.id=1;
employee.name="brijesh";
employee.age=35;
console.log(employee)
// access as property 
console.log(employee.name)

```

## object as constructor

```
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

```

# how to defined method inside of object ? 
```
  const emp={
    id:1,
    name:"brijesh",
    age:35,
    salary:25500,
    test:function()
    {
        console.log("salary is :",this.salary)
    }
}
console.log(emp);
emp.test();

```



## updating object 


```

const employee={
    id:1,
    name:"brijesh",
    age:35,
    salary:115000,
    department:"R&D",
    hobbies:["playing","read","writing","surfing"] 
}

employee.salary=125000
console.log("updated salary of employee",employee.salary)

```

## array of object 


