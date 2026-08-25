// const count=true
// // defined a promises 
// let countValue=new Promise(function(resolve,reject)
// {
   
//     if(count)
//     {
//         resolve('There is an count Number of values')
//     }
//     else 
//     {
//         reject('There is no count values s found')
//     }

// })

// console.log(countValue);



const count=false
// defined a promises 
let countValue=new Promise(function(resolve,reject)
{
   try 
   {
    if(count)
    {
        resolve('There is an count Number of values')
    }
    else 
    {
        reject('There is no count values s found')
    }
}
catch(error)
{
    reject('There is error generating while executed block')
}

})

console.log(countValue);
