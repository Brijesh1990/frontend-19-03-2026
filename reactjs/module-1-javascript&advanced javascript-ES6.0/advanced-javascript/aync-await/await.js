/*  

await : await is handling asynchrounous promises 
      : javascript default load promises is async
      : async is always defined before any function
      : await is a keyword that can be pause an async function until the promises return any result    
      : await is always defined inside of async function 

syntax :

 async function name(para,para1,para2)
 {
 
   statements
 
 }

*/


let promise=new Promise(function(resolve,reject){

    // set an timeout
    setTimeout(function(){
        resolve('The task should be completed in 5 seconds')
    },5000);
})

// create a async function 

async function Display()
{
    let result=await Promise;
    console.log(result)
    console.log('Hello i am just loading resolved data')
}

Display()