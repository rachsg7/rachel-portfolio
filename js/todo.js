export default class Todo {
    constructor(content) {
        let date = new Date();
        this.id = date.getTime(); // Get timestamp
        this.content = content;
        this.completed = false;
    }
}