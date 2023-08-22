//callback function

function firstfunction(param, callback){
     callback()
}


//promises is used for what callback is used for

//promisees
//3states: pending,fulfilled, rejecting

const mypromise = new Promise((resolve, reject) => {
    const error = false
    if(!error){
        resolve(`yes resolve the promise`)
    }else{
        reject(`no! rejected the promise`)
    }
});
  console.log(mypromise)
  
  mypromise.then( value =>{
  return value + 1 
} )
 .then((newvalue) =>{
    console.log(newvalue)
 }) 