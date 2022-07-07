import { taskArr } from "./task.js";

export const clearBtn = document.querySelector('.clear');

export function update(x, input){
  if(taskArr[x].completed === false){
   taskArr[x].completed = true;
   input.checked = true;
   input.parentElement.parentElement.classList.add('completed');
   return;
  }
  else{
   taskArr[x].completed = false;
   input.checked = false;
   input.parentElement.parentElement.classList.remove('completed');
   return;
  }
};

export const clearCompleted = function(){
  let arr = [];
  taskArr.forEach((task)=>{
    if(task.completed === true){
      arr.push(task);
    }
  })
  taskArr = taskArr.filter(task => !arr.includes(task));
  return taskArr
};
