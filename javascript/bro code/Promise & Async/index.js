// promise - object that encapsulates the result of an asynchronous operation
//          let asynchronous method return values like synchronous method
//          "I promises to return something in the future"


//          the STATE is 'pending' then: 'fulfilled' or 'rejected'
//          the RESULT is what can be returned 
//          2 parts producing & consuming


// producing code
const promise = (time) => new Promise((resolve,reject) => {
    let fileLoaded = false ;
    setTimeout(() => {
        
    if (fileLoaded){
        resolve("File Has Been Loaded")
    }
    else {
        reject("File Is Not Loaded")
    }}
    ,time)
});

promise(3000).then((value) => console.log(value)).catch(error => console.log(error))



// async - makes a function return a Promise
// method 1

async function loadFile(time) {
    let fileLoaded = false ;

    setTimeout(() => {
        
    if (fileLoaded){
        return "File Has Been Loaded"
    }
    else {
        throw "File Is Not Loaded"
    }}
    ,time)
}

// loadFile(3000).then((value) => console.log(value)).catch(error => console.log(error))

// method 2
// function loadFile(time) {
//     let fileLoaded = false ;

//     setTimeout(() => {
        
//     if (fileLoaded){
//         return Promise.resolve("File Has Been Loaded")
//     }
//     else {
//         return Promise.reject("File Is Not Loaded")
//     }}
//     ,time)
// }

// loadFile(3000).then((value) => console.log(value)).catch(error => console.log(error))

// await - makes an async function wait for a promise 

async function startProcess(){
    try{
        let message = await loadFile(message)
        console.log(message)
    }
    catch(error) {
        console.log(error)
    }
     

}

startProcess();