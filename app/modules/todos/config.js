function config($stateProvider) {
  $stateProvider
  .state("todos", {
    url: "/",
    controller: "TodosController as todosCtrl",
    template: require('./views/list.html')
  });
}

export default config;
