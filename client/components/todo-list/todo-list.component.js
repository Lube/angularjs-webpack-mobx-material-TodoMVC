import angular from 'angular'

// Template
import todoListTemplate from 'html!./todo-list.template.html'

// Styles
import './todo-list.styles.css'

// Controller
import TodoListController from './todo-list.controller.js'

export default angular.module('todoListComponent', []).component('todoList', {
    template: todoListTemplate,
    controller: TodoListController
}).name
