class TodosController {
  constructor(TodosService, $ionicModal, $scope) {
    this._TodosService = TodosService;

    this.todos = this._TodosService.all();
    this.newTodos = this._TodosService.new();

    this.modal = $ionicModal.fromTemplate(require('/views/form.html'));
    scope: $scope
  }

  showForm() {
    this.modal.show();
  }

  addTodo() {
    this._TodosService.add(this.newTodo);
    this.newTodo = this._TodosService.new();
    this.modal.hide();
  }
}

export default TodosController;
