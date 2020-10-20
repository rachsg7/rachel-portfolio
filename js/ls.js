import Todo from './todo.js';

export default class TodoList {
    constructor() {
        this.data = new Array();
    }
    add(todo) {
        this.data.push(todo);
    }

    list() {
        return this.data;
    }

    remove(id) {
        this.data = this.data.filter(todo => todo.id != id);
    }

    update(todo) {
        // Find and replace item
    }
}