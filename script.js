function addTask() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('task-list');
    const taskItem = document.createElement('li');
    const timestamp = new Date().toLocaleString();

    taskItem.innerHTML = `
        ${taskText} 
        <span class="timestamp">Added: ${timestamp}</span>
        <button class="complete-btn" onclick="completeTask(this)">Complete</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';
}

function completeTask(button) {
    const taskItem = button.parentElement;
    const completedList = document.getElementById('completed-list');
    const timestamp = new Date().toLocaleString();
    taskItem.classList.add('completed');

    taskItem.innerHTML = `
        ${taskItem.textContent.trim()} 
        <span class="timestamp">Completed: ${timestamp}</span>
    `;

    completedList.appendChild(taskItem);
}
