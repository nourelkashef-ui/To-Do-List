let taskInput = document.getElementById("taskInput");
let button = document.getElementById("addBtn");
let taskCount = document.getElementById("taskCount");
let taskList = document.getElementById("taskList");
let message = document.getElementById("message");
let title = document.getElementById("title");

 let count = 0;

button.addEventListener ("click" , function() {
    let taskText = taskInput.value;
    if (taskText === "" ) {
        message.textContent = "Add a new task";
        return;
    }
    let li = document.createElement("li");
    let taskSpan = document.createElement("span")
    taskSpan.textContent = taskText;

    let noteInput = document.createElement("input")
    noteInput.type = "text"
    noteInput.placeholder = "Add a note..."

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.appendChild(taskSpan);
    li.appendChild(noteInput);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    count ++
    taskCount.textContent = count;
    message.textContent = "Task added successfully!";
    taskInput.value = "";

    deleteBtn.addEventListener("click" , function () {
        li.remove();
        count--;
        taskCount.textContent =  count;
        message.textContent = "Task Deleted";
    });

})
