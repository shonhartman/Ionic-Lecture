class TodosService {
  constructor() {
    this.todos = [];
  }

  all() {
    return this.todos;
  }

  add(todo) {
    this.todos.push(todo);
  }

  new() {
    return {
      item: "",
      completed: "false"
    };
  }

}

export default TodosService;
