class TodosListController {
  constructor(TodosListService, $ionicModal, $scope) {
    this._TodosListService = TodosListService;

    this.lists = this._TodosListService.all();
    this.newLists = this._TodosListService.new();

    this.modal = $ionicModal.fromTemplate(require('../views/form.html'));
    scope: $scope
  }

  showForm() {
    this.modal.show();
  }

  addList() {
    this._TodosListService.add(this.newList);
    this.newList = this._TodosListService.new();
    this.modal.hide();
  }
}

export default TodosListController;
