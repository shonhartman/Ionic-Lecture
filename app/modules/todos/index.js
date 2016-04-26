import angular from 'angular';

import config from './config';
import controller from './controller';
import service from './service';

let todos = angular.module('tiy.todos', []);

todos.config(config);
todos.controller('TodosController', controller);
todos.service('TodosService');

export default todos;
