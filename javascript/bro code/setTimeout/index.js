// setTimeout() - invokes a function after a given number of milliseconds 
//               It is an asynchronous function (doesn't pause execution)

// setInterval - invokes a function repeatedly after a given number of milliseconds 
//              It is an asynchronous function (doesn't pause execution)

let timer1 = setTimeout(firstMessage,3000,'vishesh')
let timer2 = setTimeout(secondMessage,7000)
let timer3 = setTimeout(thirdMessage,15000)




function firstMessage(name){
    alert(`${name} Python is better than JS`)
}

function secondMessage(){
    alert("Remember Python is better than JS")
}

function thirdMessage(){
    alert("Do you remember Python is better than JS")
}

document.getElementById('yes').onclick = () => {
    clearTimeout(timer1)
    clearTimeout(timer2)
    clearTimeout(timer3) 

}

document.getElementById('no').onclick = () => {
    timer1;
    timer2;
    timer3; 
}


let count = 0;
let max = window.prompt("Enter value to count till")
max = Number(max)

function counter(){
    if(count>max){
        clearInterval(myTimer)
    }
    count++;
    document.getElementById("counter").innerHTML = count;
}

const myTimer = setInterval(counter, 1000, );


