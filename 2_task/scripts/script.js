const addTask = () => {
  const taskInput = document.getElementById('taskInput');
  const task = taskInput.value.trim();

  if (!task) return;

  const taskList = document.getElementById('taskList');

  const newTask = document.createElement('div');
  newTask.classList.add('task');

  const taskText = document.createElement('div');
  taskText.classList.add('task-text');
  taskText.innerText = task;
  taskText.onclick = () => {
    taskText.classList.toggle('completed');
  };

  const deleteButton = document.createElement('button');
  deleteButton.innerText = 'Удалить';
  deleteButton.classList.add('delete-button');
  deleteButton.onclick = () => {
    taskList.removeChild(newTask);
  };

  newTask.appendChild(taskText);
  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);

  taskInput.value = '';
};
