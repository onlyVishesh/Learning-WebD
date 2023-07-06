// error - object with a description of something went wrong

//        Can't open a file
//        user types incorrect input
//        typeError
//        etc..

// catch - to do something on error

// throw - executes a user-defined error

// finally - it will executes everytime 

try {

    let x = window.prompt("Enter a Number")
    x = Number(x);
    if (isNaN(x)) {
        throw "That was't a number"
    }
    if (x == '') {
        throw `That is not a number`
    }

    console.log(`${x} is a number`)


}
catch(error){
    console.log(error);
}

finally{
    console.log(`it will execute `)
}