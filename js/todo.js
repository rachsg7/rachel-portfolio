export default class Todo {
    constructor(content) {
        let date = new Date();
        this.id = date.getTime(); // Get timestamp
        this.content = content;
        this.completed = false;
    }
    toggle() {
        if (this.completed = false) {
            this.completed = true;
        } else {
            this.completed = false;
        }
    }
}