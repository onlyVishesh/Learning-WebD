// addEventListener(event, function, useCapture)
// We can add many event handlers to one element
// Even the same event that invokes different function

const innerDiv = document.querySelector(".innerDiv");
const outerDiv = document.querySelector(".outerDiv");

// without outerDiv ie without useCapture 
// innerDiv.addEventListener("mouseover", changeGreen)
// innerDiv.addEventListener("mouseout", changeBlue)


function changeGreen() {
    innerDiv.style.backgroundColor = "lightgreen"
    
}

function changeBlue() {
    innerDiv.style.backgroundColor = "lightblue"
    
}

function changeRed() {
    this.style.backgroundColor = "lightcoral"
    
}

// useCapture - tells what should go first
// if we click on innerDiv element outerDiv also changed by adding true in outerDiv it will handle outerDiv first
innerDiv.addEventListener("click", changeRed)
outerDiv.addEventListener("click", changeRed, true)
