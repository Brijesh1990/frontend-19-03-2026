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



