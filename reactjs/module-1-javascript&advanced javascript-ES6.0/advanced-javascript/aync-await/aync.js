/*  

async : async return any function is an aynchrounous function 
      : javascript default load promises is async
      : async is always defined before any function   

syntax :

 async function name(para,para1,para2)
 {
 
   statements
 
 }

*/


async function display(a,b)
{
 console.log(a+b)
 return Promise.resolve(); 
}
display(10,5)