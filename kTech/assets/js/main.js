let tasks = [];
let editIndex = null;
function addTask() {
    let input = document.getElementById("taskInput");
    let value = input.value.trim();

    if (value === "") return;

    if (editIndex !== null) {
        tasks[editIndex] = value; // UPDATE
        editIndex = null;
    } else {
        tasks.push(value);
    }

    input.value = "";
    displayTasks();
}

// READ
function displayTasks() {
    let list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach((task, index) => {
        list.innerHTML += `
      <li>
       <span class="taskListadd">
        ${task}
        <button onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
       </span>
      </li>
    `;
    });
}

// UPDATE
function editTask(index) {
    document.getElementById("taskInput").value = tasks[index];
    editIndex = index;
}

// DELETE
function deleteTask(index) {
    tasks.splice(index, 1);
    displayTasks();
}
