import { makeTaskItem } from "./features.js";
import { fakeList } from "./features.js";
import { sortTaskList } from "./features.js";
//import { deleteTaskItem }  from "./features.js";

import { liInteractions } from "./features.js";

let makeTaskItemBtn = document.getElementById('addTask');
let fakeListBtn = document.getElementById('randomList')
let sortTaskListBtn = document.getElementById('sortList')
//let deleteTaskItemBtn = document.getElementById()

let listCaptureContainer = document.getElementById('listContainer');


makeTaskItemBtn.addEventListener("click", makeTaskItem); 
fakeListBtn.addEventListener("click", fakeList); 
sortTaskListBtn.addEventListener("click", sortTaskList); 

listCaptureContainer.addEventListener("click", liInteractions);

//window.deleteTaskItem = deleteTaskItem;