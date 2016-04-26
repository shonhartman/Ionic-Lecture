class TodosDetailController {
  constructor(TodosListService, $ionicModal, $scope, $stateParams) {
    this._TodosListService = TodosListService;

    this.deletMode = false;

    this.list = this._TodosListService.get($stateParams.id);
    this.newTodo = this._TodosListService.newTodo();

    this.modal = $ionicModal.fromTemplate(require('../views/form.html'));
    scope: $scope
  }

  showForm() {
    this.modal.show();
  }

  toggleDelete() {

  }

  addList() {
    this._TodosListService.addTodo(this.list, this.newTodo);
    this.newList = this._TodosListService.new();
    this.modal.hide();
  }

  removeTodo(list, item) {
    list.todos.splice(list.todos.indexOf(item), 1);
    list.$save();
  }



  addTodo(list, item) {
    this._TodosListService.removeTodo(this.list, todo);
  }
}

export default TodosListController;
