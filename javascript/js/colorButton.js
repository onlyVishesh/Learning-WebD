document.addEventListener("DOMContentLoaded",function() {

    // changing color of h1 tag
    // shorthand for function argument => {}
    document.querySelectorAll("button").forEach(button => {
        
        button.onclick = function(){
            document.querySelector("#hello").style.color = button.dataset.color;
        };
    });
});