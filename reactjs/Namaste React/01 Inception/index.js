const heading_JS = document.createElement("h1");
heading_JS.innerHTML = "Hello, JavaScript!!";

const para_JS = document.createElement("p");
para_JS.innerText = "This heading is written using JS";

const root_JS = document.querySelector("#root-js");
root_JS.appendChild(heading_JS);
root_JS.appendChild(para_JS);