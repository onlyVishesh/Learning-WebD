let element = document.querySelector("#fruit");
let child = element.firstElementChild;
child.style.backgroundColor = "lightgreen";

// .firstElementChild - select fruit list
// .lastElementChild - select script tag
// .parentElement - select element that contain the element
// .nextElementSibling - select next element of same element
// .previousElementSibling - select previous element of same element
// .children - give list of all elements
// .children[] - can select oen out of list of all elements
// Array.from(.children) - convert list to array
