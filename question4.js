let tasks = [];

// Function to add a new task
function addTask(name, description) {
    const id = tasks.length + 1;

    // Create a new task object
    const newTask = {
        id,
        name,
        description
    };

    // Add the new task to the tasks array
    tasks.push(newTask);
    console.log(`Task with ID ${id} added.`);
}

// Function to view all tasks
function viewTasks() {
    return tasks;
}

// Function to update a task by its ID
function updateTask(id, updatedName, updatedDescription) {
    const task = tasks.find(task => task.id === id);

    if (task) {
        task.name = updatedName;
        task.description = updatedDescription;
        console.log(`Task with ID ${id} updated.`);
    } else {
        console.log(`Task with ID ${id} not found.`);
    }
}

// Function to delete a task by its ID
function deleteTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    console.log(`Task with ID ${id} deleted.`);
}

addTask('Learn Node.js', 'Study the basics of Node.js');
addTask('Build a web app', 'Create a simple web application using Express');
console.log(viewTasks());

updateTask(1, 'Learn Node.js and Express', 'Study Node.js and Express basics');
console.log(viewTasks()); 

deleteTask(2); 
console.log(viewTasks()); 