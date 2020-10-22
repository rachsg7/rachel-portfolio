import Todo from './todo.js';
import TodoList from './todoList.js';
import { todolist, addTask } from './utilities.js';


document.getElementById('addButton').addEventListener('click', () => {
    addTask();
})
document.getElementById('addTask').addEventListener('keyup', function(event) {
    if (event.key == "Enter") {
        document.getElementById('addButton').click();
    }
})

function toggle() {
    alert('hi');
}