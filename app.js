// Get elements
const taskTitle = document.getElementById('task-title');
const taskDesc = document.getElementById('task-desc');
const taskList = document.getElementById('task-list');
const clearCompletedButton = document.getElementById('clear-completed');
const errorMessage = document.getElementById('error-message');

// Add Task Function
function addTask() {
    const title = taskTitle.value.trim();
    const description = taskDesc.value.trim();

    // Check if title is empty
    if (title === '') {
        errorMessage.style.display = 'block'; // Show error message
        return; // Do not proceed if title is empty
    }

    // Hide error message when title is valid
    errorMessage.style.display = 'none';

    // Create task item if title is valid
    const taskItem = document.createElement('li');
    taskItem.classList.add('task');
    taskItem.innerHTML = `
        <div>
            <strong>${title}</strong>
            <p>${description || 'No description'}</p>
        </div>
        <div>
            <button class="complete-btn" onclick="toggleComplete(this)">Mark as Completed</button>
            <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
        </div>
    `;
    
    // Append task to list
    taskList.appendChild(taskItem);

    // Clear input fields after adding
    taskTitle.value = '';
    taskDesc.value = '';
}

// Toggle Task Completion
function toggleComplete(button) {
    const taskItem = button.closest('li');
    taskItem.classList.toggle('completed');
}

// Delete Task
function deleteTask(button) {
    const taskItem = button.closest('li');
    taskItem.classList.add('deleted');
    setTimeout(() => taskItem.remove(), 200); // Remove after animation
}

// Clear Completed Tasks
function clearCompleted() {
    const completedTasks = document.querySelectorAll('.completed');
    completedTasks.forEach(task => task.remove());
}
