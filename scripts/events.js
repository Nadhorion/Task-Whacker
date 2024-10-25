import { makeTaskItem } from "./features.js";
import { fakeList } from "./features.js";
import { sortTaskList } from "./features.js";
//import { deleteTaskItem }  from "./features.js";


let makeTaskItemBtn = document.getElementById('addTask');
let fakeListBtn = document.getElementById('randomList')
let sortTaskListBtn = document.getElementById('sortList')
//let deleteTaskItemBtn = document.getElementById()


makeTaskItemBtn.addEventListener("click", makeTaskItem) 
fakeListBtn.addEventListener("click", fakeList) 
sortTaskListBtn.addEventListener("click", sortTaskList) 



//window.deleteTaskItem = deleteTaskItem;