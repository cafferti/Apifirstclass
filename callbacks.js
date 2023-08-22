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


 const nextpromise = new Promise((resolve, reject) => {
    setTimeout(function(){
           resolve(`my nextpromise resolved`);
    }, 3000)
 })

  nextpromise.then((value) =>{
    console.log(value)
  })

  mypromise.then((value) =>{
    console.log(value)
  })