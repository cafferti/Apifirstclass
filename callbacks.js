// //callback function

// function firstfunction(param, callback){
//      callback()
// }


// //promises is used for what callback is used for

// //promisees
// //3states: pending,fulfilled, rejecting

// const mypromise = new Promise((resolve, reject) => {
//     const error = false
//     if(!error){
//         resolve(`yes resolve the promise`)
//     }else{
//         reject(`no! rejected the promise`)
//     }
// });


//  const nextpromise = new Promise((resolve, reject) => {
//     setTimeout(function(){
//            resolve(`my nextpromise resolved`);
//     }, 3000)
//  })

//   nextpromise.then((value) =>{
//     console.log(value)
//   })

//   mypromise.then((value) =>{ 
//     console.log(value)
//   })      
  
  //pending state of promisse
  const user = fetch(`https:jsonplaceholder.typicode.com/users`);
  console.log(user);
  //the above is the pending state of promises

  fetch(`https:jsonplaceholder.typicode.com/users`)
  .then(response =>{
    // console.log(response)
   return response.json();
  }) 
  .then(data => {
    console.log(data)
  })