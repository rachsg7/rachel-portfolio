import Todo from './todo.js';
import TodoList from './ls.js';
const todolist = new TodoList;

window.addEventListener('load', () => {
    document.getElementById('addButton').addEventListener('click', () => {
        addTask();
    })
});

function addTask() {
    let newTask = new Todo(document.getElementById('addTask').value);
    todolist.add(newTask);
    console.log(todolist.data);
}