import './style.css';
import { taskArr, addTask, removeTask, storeTask, getTask } from "./task.js";

const list = document.querySelector('.task');
const listInput = document.querySelector('#listInput');
const addBtn = document.querySelector('.addtask');
const refresh = document.querySelector('.refresh');

function createTaskList() {
  list.innerHTML = '';
  for (let i = 0; i < taskArr.length; i += 1) {
    taskArr[i].index = i;
    const task = document.createElement('li');
    const div = document.createElement('div');
    const taskContent = document.createElement('p');
    taskContent.setAttribute('id', `${i}`);
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    const taskBtn = document.createElement('button');
    taskBtn.setAttribute('type', 'button');
    const delIcon = document.createElement('i');
    delIcon.classList.add("fa-solid", "fa-trash-can");
    const editIcon = document.createElement('i');
    editIcon.classList.add('fa-solid', 'fa-pen-to-square');

    div.appendChild(input);
    taskContent.innerHTML = `${taskArr[i].description}`;
    div.appendChild(taskContent);

    taskBtn.appendChild(editIcon);
    taskBtn.appendChild(delIcon);

    task.appendChild(div);
    task.appendChild(taskBtn);

    list.appendChild(task);

    delIcon.addEventListener('click', ()=>{
      console.log('delete');
      removeTask(taskArr[i].index);
      createTaskList();
      storeTask();
      getTask();
    });

    editIcon.addEventListener('click', ()=>{
      taskContent.setAttribute('contentEditable', 'true');
      taskContent.focus();
      taskContent.addEventListener('focusout', ()=>{
        console.log(taskContent.textContent);
        taskArr[i].description = taskContent.textContent;
        storeTask();
        getTask();
        createTaskList();
      });
    }); 
  };
};

addBtn.addEventListener('click', ()=>{
  addTask();
  storeTask();
  getTask();
  createTaskList();
});

listInput.addEventListener('keypress', (e) => {
  if(e.keyCode === 13){
    addBtn.click();
  }
  else return;
})

refresh.addEventListener('click', () => {
  getTask();
  createTaskList();
})

document.addEventListener("DOMContentLoaded", ()=> {
  getTask();
  createTaskList();
})

