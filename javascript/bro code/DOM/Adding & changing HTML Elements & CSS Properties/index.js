// add/changing HTML elements
// .textContent - more secure
// .innerHTML - vulnerable to xss attacks

const nameTag = document.createElement('h1')
nameTag.textContent = window.prompt("Enter your name :  ")
document.body.append(nameTag)



document.querySelector(".add-fruit").onclick = () => {
    
    // document.querySelector("#fruit").append(
    //     document.createElement('li').textContent = 
    //      `${document.querySelector(".input-fruit").value}`)

    let fruitList = document.querySelector("#fruit");
    let newFruitElement = document.createElement('li');
    newFruitElement.textContent = document.querySelector(".input-fruit").value

    // fruitList.append(newFruitElement) - to add at the end
    // fruitList.prepend(newFruitElement)  - to add at the starting

    // fruitList.insertBefore(newFruitElement,fruitList.getElementsByTagName("li")[2]) - to insert before 3rd element

    title.style.display = "none"

}

// add/changing CSS properties

const title = document.getElementById("greetings")

title.style.backgroundColor = "rgb(34,56,77)"
title.style.color = "#3e4a6f"
title.style.fontFamily = "consolas"
title.style.textAlign = "center"
