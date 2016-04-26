function config($stateProvider) {
  $stateProvider
  .state("todos", {
    url: "/",
    controller: "TodosListController as listCtrl",
    template: require('./views/list.html')
  })
  .state("detail", {
    url: "/:id",
    conroller:
    template: 
  })
}

export default config;
