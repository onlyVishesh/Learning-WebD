
document.addEventListener("DOMContentLoaded",() => {

    // By default, submit button is disable
    document.querySelector("#addSubmit").disabled = true;
    document.querySelector("#removeSubmit").disabled = true;


    document.querySelector("#add").onkeyup = () => {
        if(document.querySelector("#addTask").value.length > 0){
        document.querySelector("#addSubmit").disabled = false;
        } 
        else {
        document.querySelector("#addSubmit").disabled = true;

        }
    }

    document.querySelector("#remove").onkeyup = () => {
        if(document.querySelector("#removeTask").value.length > 0){
        document.querySelector("#removeSubmit").disabled = false;
        } 
        else {
        document.querySelector("#removeSubmit").disabled = true;

        }
    }



    document.querySelector("#add").onsubmit = () =>  {
        const task = document.querySelector("#addTask").value;
        
        li1 = document.createElement("li");
        li1.innerHTML = task;
        
        document.querySelector("#tasks").append(li1);

        document.querySelector("#addTask").value = "";
        document.querySelector("#addSubmit").disabled = true;

        // stop form from submitting
        return false;
    };

    document.querySelector("#remove").onsubmit = () =>  {
        const task = document.querySelector("#removeTask").value;
        
        li2 = document.createElement("li");
        li2.innerHTML = task;
        
        document.querySelector("#tasks").remove(li2)

        document.querySelector("#removeTask").value = "";
        document.querySelector("#removeSubmit").disabled = true;

        // stop form from submitting
        return false;
    };
});

