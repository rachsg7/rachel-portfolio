import Todo from './todo.js';
import TodoList from './todoList.js';
import { todolist, addTask, addStyle } from './utilities.js';

document.addEventListener("DOMContentLoaded", function() {
    if (todolist) {
        todolist.list().forEach(todo => {
            addStyle(todo);
        });
    }
});

document.getElementById('addButton').addEventListener('click', () => {
    addTask();
})
document.getElementById('addTask').addEventListener('keyup', function(event) {
    if (event.key == "Enter") {
        document.getElementById('addButton').click();
    }
})