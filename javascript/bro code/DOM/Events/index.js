

function doSomethingRandom() {
    alert(`Here is a random Number : ${Math.floor(Math.random(10)*10)}`)
    
}

// onclick - when something is clicked
document.getElementById("random").onclick = () => {
    doSomethingRandom()
}

// onload - when webpage is reload
const element = document.body

element.onload = doSomethingRandom()

// onchange - when something changed
document.getElementById("text-box").onchange = doSomethingRandom()

// onmouseover - when we hover over it
document.querySelector(".box").onmouseover = () => {
    document.querySelector(".box").style.backgroundColor = 'yellow'
}

// onmouseout - when we hover leave over it

document.querySelector(".box").onmouseout = () => {
    document.querySelector(".box").style.backgroundColor = '#3e3'
}

// onmousedown - when we hold click on element
document.querySelector(".box").onmousedown = () => {
    document.querySelector(".box").style.width = '20vw'
    document.querySelector(".box").style.height = '20vw'

}

// onmouseup - when we left click on element
document.querySelector(".box").onmouseup = () => {    
    document.querySelector(".box").style.width = '12vw'
    document.querySelector(".box").style.height = '12vw'

}






