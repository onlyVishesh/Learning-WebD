let taskList = [];

taskList = JSON.parse(localStorage.getItem("taskList")) || [];

document.querySelector(".add").onclick = () => {
    addTask();
    toRenderHTML();
};

let toRenderHTML = () => {
    let taskListHTML = "";

    for (let i = 0; i < taskList.length; i++) {
        const taskObject = taskList[i];
        const { name, date } = taskObject;
        const html = `
        <div>
          ${name}
        </div>
        <div>
          ${date}
        </div>
        
          <button onclick="
          taskList.splice(${i},1);
          toRenderHTML();
          localStorage.setItem('taskList', JSON.stringify(taskList));"
          class="delete">Delete</button>
        `;
        taskListHTML += html;
    }

    document.querySelector(".list").innerHTML = taskListHTML;
};

const addTask = () => {
    const name = document.querySelector(".task").value;
    const date = document.querySelector(".date").value;

    taskList.push({
        name: name,
        date: date,
    });

    localStorage.setItem("taskList", JSON.stringify(taskList));

    document.querySelector(".task").value = "";
};

window.onload = () => {
    toRenderHTML();
};
