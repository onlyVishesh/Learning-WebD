// to select specific element using id
let menuHeading = document.getElementById("menu");
menuHeading.style.fontSize = "75px"


// Selection multiple elements and they are stored in array

// to select element using their name tag

let colors = document.getElementsByName("color")

setInterval( ()=> {
    colors.forEach(color => {
        if(color.checked){
            menuHeading.style.backgroundColor = color.value
        }
    })
})

// to select element using their tag name

let fruits = document.getElementsByTagName("li")

setInterval( () => {
    colors.forEach(color => {
        if(color.checked){
            for( let fruit of fruits){
                fruit.style.backgroundColor = color.value
            }
        }
    })
    
})

// to select element using their class name

let desserts = document.getElementsByClassName("desserts")
setInterval( () => {
    colors.forEach(color => {
        if(color.checked){
            for( let dessert of desserts){
                dessert.style.backgroundColor = color.value
            }
        }
    })
    
})

// querySelector can select all above elements

// For id
document.querySelector("#menu").style.color = "pink"

// For first for attribute
document.querySelector("[for]").style.color = "pink"

// For all for attribute

// let forAttribute =  document.querySelectorAll("[for]")
// document.querySelectorAll("[for]").forEach(element => {
//     element.style.color = "pink"
// })



// For first name
document.querySelector("li").style.color = "pink"

// For all name

// let listItems = document.querySelectorAll("li").style.color = "pink"
// document.querySelectorAll("li").forEach(element => {
// element.style.color = "pink"
// })




// For first class
document.querySelector(".desserts").style.color = "pink"

// For class

// let classes = document.querySelectorAll(".desserts")
// document.querySelectorAll(".desserts").forEach(element => {
// element.style.color = "pink"
// })






