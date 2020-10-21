import Todo from './todo.js';
import TodoList from './todoList.js';
const todolist = new TodoList;

/** Add task to the todolist */
function addTask() {
    let newTask = new Todo(document.getElementById('addTask').value);
    todolist.add(newTask);
    console.log(todolist.data);
    addStyle(newTask);
    clearInput();
}

/** Adds a style with the todo item */
function addStyle(todo) {
    // Get the todo div
    let newTask = document.getElementById('todo');

    // New div for specific task item
    let newSection = document.createElement('div');

    // Checkbox
    let newCheckbox = document.createElement('input');
    newCheckbox.setAttribute('type', 'checkbox');
    newCheckbox.classList.add('checkbox');
    newCheckbox.id = todo.id;

    // Add class, checkbox, and checkbox label to div
    newSection.classList.add('todoitem');
    newSection.appendChild(newCheckbox);
    newSection.innerHTML += `<label for='${todo.id}'>${todo.content}</label`;

    // Add task item to todo div
    newTask.appendChild(newSection);
}

/** Clear the input field */
function clearInput() {
    document.getElementById('addTask').value = null;
}

/** Export list */
export {
    todolist,
    addTask
}