let countValue=new Promise(function(resolve,reject){
    resolve('The problems is resolved')
})

// executed successfully promises is resolved 
countValue.then(function successValue(result){
    console.log(result);
})
.catch(function errorValue(result){
 console.log(result)
})
// create a finally block
countValue.finally(function display(){
    console.log("The block of code is resolved now")
})

