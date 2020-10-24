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

    // Remove button

    let newRemove = document.createElement('button');
    newRemove.classList.add('remove');
    newRemove.id = `${todo.id}-remove`;
    newRemove.textContent = 'X';

    // Add class, checkbox, and checkbox label to div
    newSection.classList.add('todoitem');
    newSection.appendChild(newCheckbox);
    newSection.innerHTML += `<label for='${todo.id}'>${todo.content}</label>`;
    newSection.appendChild(newRemove);

    // Add task item to todo div
    newTask.appendChild(newSection);

    document.getElementById(todo.id).addEventListener('click', clicked);
    document.getElementById(`${todo.id}-remove`).addEventListener('click', remove);
    document.getElementById(todo.id).checked = todo.completed;
}

/** Clear the input field */
function clearInput() {
    document.getElementById('addTask').value = null;
}

function clicked(e) {
    let list = todolist.get(e.target.id);
    if (e.target.checked) {
        list.completed = true;
        e.target.parentElement.classList.add('crossed');
    } else {
        list.completed = false;
        e.target.parentElement.classList.remove('crossed');
    }
    todolist.update(list);
}

function remove(e) {
    let id = e.target.id.split('-')[0];
    todolist.remove(id);

    e.target.parentElement.remove();
}



/** Export list */
export {
    todolist,
    addTask,
    addStyle
}