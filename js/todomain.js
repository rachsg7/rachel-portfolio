import { todolist, addTask, addStyle, active, complete, listAll } from './utilities.js';

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

if (todolist) {
    document.getElementById('tasks-left').innerHTML = `${todolist.getIncomplete().length} tasks left`;
}
document.getElementById('tasks-all').addEventListener('click', listAll);
document.getElementById('tasks-active').addEventListener('click', active);
document.getElementById('tasks-complete').addEventListener('click', complete);