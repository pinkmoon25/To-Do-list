import './style.css';

const list = document.querySelector('.task');

const taskArr = [
  {
    description: 'Make dinner',
    completed: 'true',
  },
  {
    description: 'Wash dishes',
    completed: 'true',
  },
  {
    description: 'Complete list structure',
    completed: 'false',
  },
];

function taskList() {
  for (let i = 0; i < taskArr.length; i += 1) {
    taskArr[i].index = i;
    const task = document.createElement('li');
    const label = document.createElement('label');
    const input = document.createElement('input');
    input.setAttribute('type', 'checkbox');
    const taskBtn = document.createElement('button');
    taskBtn.setAttribute('type', 'button');
    const icon = document.createElement('i');
    icon.classList.add('fa-solid', 'fa-ellipsis-vertical');

    label.appendChild(input);
    label.innerHTML += `${taskArr[i].description}`;

    taskBtn.appendChild(icon);

    task.appendChild(label);
    task.appendChild(taskBtn);

    list.appendChild(task);
  }
}

taskList();
