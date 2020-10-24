import Todo from './todo.js';

export default class TodoList {
    constructor() {
        let test = localStorage.getItem('list');
        if (!test) {
            this.data = new Array();
        } else {
            this.data = JSON.parse(test);
        }
    }
    add(todo) {
        this.data.push(todo);
        this.save();
    }

    list() {
        return this.data;
    }

    get(id) {
        return this.data.find(todo => todo.id == id);
    }

    getComplete() {
        return this.data.filter(todo => todo.completed == true);
    }

    getIncomplete() {
        return this.data.filter(todo => todo.completed == false);
    }

    remove(id) {
        this.data = this.data.filter(todo => todo.id != id);
        this.save();
    }

    update(newTodo) {
        let index = this.data.findIndex(todo => todo.id == newTodo.id);
        this.data[index] = newTodo;
        this.save();
    }

    save() {
        localStorage.setItem('list', JSON.stringify(this.data));
    }
}