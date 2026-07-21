// function types 
// two types function 
// user defined function 
// pre-defined function 

// user defined function
// function display()
// {
//     var a=10
//     var b=20
//     var c=a+b 
//     console.log(c)
// }
// display()


// pre-defined function 

// var name="hi harsh"
// var res=name.length
// console.log(res)


// how to call a function 
// there are two way to call any function 
// 1) call by value 2) call by reference 


// call by values 
// function display(fname)
// {
//     firstName="My firstName is :"+fname; 
//     console.log(firstName)
// }
// display("Ammar")

// call by reference
function display(fname,lname)
{
    firstName="My firstName is :"+fname+"\n";
    lastName="My lastName is :"+lname+"\n"; 
    console.log(firstName+lastName)
}
display("Ammar","Agwan")