class TodosListService {
  constructor($firebaseArray, $firebaseObject) {
    this._$firebaseObject = $firebaseObject;
    this.ref = new Firebase("https://ionic-todos-sph.firebaseio.com/#-KFKY133mlBAbxES55Fe|1403c7c7941682f2e18f8c7ce905aa99")
    this.lists = $firebaseArray(this.ref.child('todos'));
  }

  all() {
    return this.lists;
  }

  add(todo) {
    this.lists.$add(todo);
  }

  get(id) {
    return this.ref.child('todos').child(id);
  }

  new() {
    return {
      name: "",
      todos: []
    };
  }

  newTodo() {
    return {
      item: "",
      completed: false
    };
  }

  addTodo(list, item) {
    
  }


}

export default TodosListService;
