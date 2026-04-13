const taskInput = document.querySelector("#task");
const addButton = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");

addButton.addEventListener("click", addTask);
function addTask() {
  const taskText = taskInput.value.trim();
  if  (taskText!== "") {
    const newTask = document.createElement("li");
    newTask.textContent = taskText;
    const removeButton = document.createElement("Button");
   removeButton.textContent =  "Remove";
    removeButton.classList.add("remove-btn");
    newTask.appendChild(removeButton);
    taskList.appendChild(newTask);
    taskInput.value = "";
    removeButton.addEventListener("click", function() {
      taskList.removeChild(newTask);
      }) ;
                                  
    }else{
      alert("please enter a task!")}
  }
    
   
    
