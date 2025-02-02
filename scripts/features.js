let listTitle = "List";
let taskList = [];


const list = document.querySelector('ul');
fakeList();

//Fake list to edit
export function fakeList() {
  let i = 0;
  while (i < 10) {

    let taskItem = {

      task: "",
      isCompleted: false,
      lineNumber: 0,
      deleteTask: false
    
    };
  
    taskItem.task = (i * i).toString();
    taskItem.isCompleted = false;
    taskItem.lineNumber = taskList.length - 1;
    taskItem.deleteTask = false;
  
    taskList.push( taskItem );

    i += 1;

  }
  renderTaskList();
}

/**
 *Creates a taskItem and supplies its values
 */
export function makeTaskItem() {

  let taskItem = {

    task: "",
    isCompleted: false,
    lineNumber: 0,
    deleteTask: false
  
  };

  taskItem.task = prompt("What do you need to do?", "");
  taskItem.isCompleted = false;
  taskItem.lineNumber = taskList.length - 1;
  taskItem.deleteTask = false;
  
  taskList.push( taskItem );
  renderTaskList();

}

/**
 * Deletes a desired task item from the list by looking for the specified
 * task through index values and splicing it. ==I think I can do this better==
 * 
 * @param {integer} lineSelection 
 */
export function deleteTaskItem(lineSelection) {

  taskList.forEach(element => {
    if (element.lineNumber == lineSelection) {
      let itemToDelete = taskList.indexOf(element);
      taskList.splice(itemToDelete, 1);
    }
  });
  
  renderTaskList();

}

/**
 * Moves a task to a different location within the taskList array
 * 
 * @param {integer} taskToMove 
 * @param {integer} destinationIndex 
 */
function moveTask(taskToMove, destinationIndex) {

  let taskHold = taskList[taskToMove];

  if (taskToMove > destinationIndex) {

    taskList.splice((taskList.indexOf(taskList[taskToMove])), 1);
    taskList.splice(destinationIndex, 0, taskHold);

  } else {

    taskList.splice((taskList.indexOf(taskList[taskToMove])), 1);
    taskList.splice(destinationIndex, 0, taskHold);

  }
  

  renderTaskList();

}

/**
 * Sorts the taskList alpanumerically by passing
 * two task objects to the compareFn at a time using
 * the sort() function
 */
export function sortTaskList() {

  taskList.sort(compareFn);

  renderTaskList();

}

/**
 * 
 * @param {event} event 
 * @returns 
 */
export function liInteractions(event) {

  let listItem = event.target.closest('li');
  let clickTarget = event.target;

  //find out how to access specific object is list array
  //look through maybe rework ids I guess TT
  if (listItem == false) {
    
    return;

  }

  if (clickTarget.className == "deleteBtn") {
    
    console.log(listItem.id);
    //delete
    deleteTaskItem(listItem.id);
    

  } else if (clickTarget.className == "checkbox") {

    checkBoxUpdate(listItem.id);
    console.log(listItem);
    //update 'isCompleted'

  } else if (clickTarget.className == "liTextBox") {

    //allow text edit
    return;

  } else {

    //highlight
    return;
    
  }
  //if event.target nearest li on the way via bubbling is true
  //then check which button or section was pressed if true.
  //if untrue just return nothing with return;

  // if delete button, get id of that nearest li, and delete
  //if check button, change checkbox state and save updated
  //boolean value
  //if textbox, allow editing of text
  //if non of those, just highlight li

}

function checkBoxUpdate(listItem) {

  if (listItem.isCompleted == false) {

    listItem.isCompleted = true;
    console.log(listItem.isCompleted);

  } else {

    listItem.isCompleted = false;
    console.log(listItem.isCompleted);

  }
}

/**
 * Takes two task list items and compares their task property.
 * If task 'a' is greater than task 'b', returns a negative number
 * If task 'a' is less than task 'b', returns a positive number
 * If both tasks are the same, returns 0
 * Comparison condition is Natural Sort's
 * 
 * @param {String} a 
 * @param {String} b 
 * @returns 
 */
function compareFn(a, b) {

  let isLessThan = a.task.localeCompare(b.task, undefined, { 
                                        numeric: true, 
                                        sensitivity: 'base'});
  return isLessThan;

}

/**
 * Allows user to change the task property of a selected taskList element
 * which is selected using its index value
 * 
 * @param {integer} taskIndex 
 */
function editTask(taskIndex) {

  let taskSelected = taskList[taskIndex];
  taskSelected.task = prompt("Edit task", `${taskSelected.task}`)

  renderTaskList();

}

/**
 * Lets user change the list title and update the html accordingly
 */
function editListTitle() {

  let listTitleNode = document.querySelector('h1');
  let newTitle = prompt("Edit title:", `${listTitle}`);

  listTitleNode.textContent = newTitle;
  listTitle = newTitle

}

/**
 * First deletes list children and then adds them back with any changes.
 * Refreshes list.
 * 
 * Also adds a delete button and checkbox to every list item. 
 * Can be split to new function?
 */
function renderTaskList() {

  while (list.firstElementChild) {

    list.removeChild(list.firstElementChild);

  }

  taskList.forEach(element => {
    element.lineNumber = taskList.indexOf(element);
  })

  for (let i = 0; i < taskList.length; i++) {

    let taskText = taskList[i].task;

    let deleteBtn = document.createElement("button");
    deleteBtn.textContent = "🗑️";
    deleteBtn.className =  "deleteBtn";
    deleteBtn.id = i;
    //deleteBtn.addEventListener(
   //   "click", (event) => deleteTaskItem(event.target.id));
  
    let textBox = document.createElement("p");
    textBox.textContent = taskText;
    textBox.className = "liTextBox";

    let checkBox = document.createElement("input");
    checkBox.type = "checkbox";
    checkBox.className = "checkBox";
    checkBox.id = i;

    const div = document.createElement("div");
    div.className = "liMainContent";
    const li = document.createElement("li");
    div.appendChild(checkBox);
    div.appendChild(textBox);
    li.appendChild(div);
    li.appendChild(deleteBtn);
    list.append( li );

  }

}

