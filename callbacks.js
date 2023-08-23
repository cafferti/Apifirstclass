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
//   const user = fetch(`https:jsonplaceholder.typicode.com/users`);
//   console.log(user);
//   //the above is the pending state of promises

// //THENABLES
//  const users = fetch(`https:jsonplaceholder.typicode.com/users`)
//   .then(response => {
//     // console.log(response)
//    return response.json();
//   })
//   .then(data => {
//     console.log(data)
//     data.forEach((user) =>{
//         console.log(user)
//     })
//   })

//user in nthe foreach depends on the developer its just a variable  to save each item of the data array during each iteration

//ASYNC/AWAIT
const myusers = {
  userlist: [],
};
//   async function myfunction(){

//   } use arrow function preferably

const mycoolfunction = async () => {
  const response = await fetch(`https:jsonplaceholder.typicode.com/users`);
  const convertRestojson = await response.json();
  return convertRestojson;
};

const anodafunct = async () => {
  const data = await mycoolfunction();
  myusers.userlist = data;
  myusers.userlist.forEach((user) => {
    console.log(user);
  });
};

anodafunct();
console.log(myusers.userlist); // this is void cause its outside the function soo its not waiting
