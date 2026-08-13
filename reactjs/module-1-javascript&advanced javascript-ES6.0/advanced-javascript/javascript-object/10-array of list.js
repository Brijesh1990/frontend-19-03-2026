// array of object
const emp=[
    {
      id:1,
      name:"brijesh",
    },
    {
      id:2,
      name:"rajesh",
    },
    {
      id:3,
      name:"kumar",
    }
]

// console.log(emp);
// console.log(emp[0])
// console.log(emp[1])
// console.log(emp[2])

// array as list 

emp.forEach(display);
function display(items)
{
    console.log(items);
    console.log(items.name);
}