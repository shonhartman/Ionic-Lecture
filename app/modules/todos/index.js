import angular from 'angular';

import config from './config';
import listController from './controllers/list';
import detailController from  './'
import controller from './controller';
import service from './service';

let todos = angular.module('tiy.todos', []);

todos.config(config);
todos.controller('TodosListController', controller);
todos.service('TodosListService', service);

export default todos;
