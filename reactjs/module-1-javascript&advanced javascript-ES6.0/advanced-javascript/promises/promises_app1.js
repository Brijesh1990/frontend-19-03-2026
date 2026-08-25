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
