// converting object to json used json.stringify()

const employee={
    id:1,
    name:"brijesh",
    age:35,
    salary:115000,
    department:"R&D"
}

// convert this object into json
res=JSON.stringify(employee)
console.log(res);

