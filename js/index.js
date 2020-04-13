import { Tasks } from "./strings.js";
import { assignmentStrings } from "./strings.js";
var Model = /** @class */ (function () {
    function Model() {
        this.todos = (localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')) : new Tasks(assignmentStrings).list); // saying localStorage.getItem('todos') is not null
        this.activeTask = null;
    }
    Model.prototype.bindTodoListChanged = function (callback) {
        this.onTodoListChanged = callback;
    };
    Model.prototype._commit = function (todos) {
        this.onTodoListChanged(todos);
        localStorage.setItem('todos', JSON.stringify(todos));
    };
    Model.prototype.toggleTodo = function (id) {
        this.todos = this.todos.map(function (todo) {
            return todo.id === id ? { id: todo.id, text: todo.text, active: todo.active, complete: !todo.complete, handler: todo.handler } : todo;
        });
        this._commit(this.todos);
    };
    Model.prototype.deleteTodo = function (id) {
        this.todos = this.todos.filter(function (todo) { return todo.id !== id; });
        this._commit(this.todos);
    };
    Model.prototype.restartTodos = function () {
        this.todos = new Tasks(assignmentStrings).list;
        this._commit(this.todos);
    };
    Model.prototype.executeTask = function (value) {
        if (this.activeTask !== null) {
            var handler = this.todos[this.activeTask - 1].handler;
            console.log(handler);
            handler(value);
        }
    };
    Model.prototype.selectActiveTask = function (id) {
        this.activeTask = id;
    };
    return Model;
}());
var View = /** @class */ (function () {
    function View() {
        this.app = this.getElement('#root');
        this.input = this.createElement('input');
        this.input.type = 'text';
        this.input.placeholder = 'Enter here ';
        this.input.name = 'todo';
        this.execButton = this.createElement('button');
        this.execButton.innerText = 'EXECUTE TASK';
        this.title = this.createElement('h1');
        this.title.textContent = 'Todos';
        this.todoList = this.createElement('ul', 'todo-list');
        this.app.append(this.execButton, this.title, this.todoList);
        this._temporaryTodoText = '';
        this._initLocalListeners();
    }
    View.prototype.displayTodos = function (todos) {
        var _this = this;
        // Delete all nodes
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild);
        }
        // Show default message
        if (todos.length === 0) {
            var p = this.createElement('p');
            p.textContent = 'Nothing to do! Start over?';
            var restartButton = this.createElement('button');
            restartButton.innerText = 'RESTART';
            this.todoList.append(p, restartButton);
        }
        else {
            // Create nodes
            todos.forEach(function (todo) {
                var li = _this.createElement('li');
                li.id = todo.id;
                var checkbox = _this.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = todo.complete;
                var radio = _this.createElement('input');
                radio.type = 'radio';
                radio.setAttribute("name", "taskSelector");
                radio.checked = todo.active;
                var span = _this.createElement('span');
                span.contentEditable = true;
                span.classList.add('editable');
                if (todo.complete) {
                    var strike = _this.createElement('s');
                    strike.textContent = todo.text;
                    span.append(strike);
                }
                else {
                    span.textContent = todo.text;
                }
                var deleteButton = _this.createElement('button', 'delete');
                deleteButton.textContent = 'Delete';
                li.append(radio, checkbox, span, deleteButton);
                // Append nodes
                _this.todoList.append(li);
            });
        }
        // Debugging
        console.log(todos);
    };
    View.prototype.getElement = function (selector) {
        var element = document.querySelector(selector);
        return element;
    };
    View.prototype.createElement = function (tag, className) {
        var element = document.createElement(tag);
        if (className)
            element.classList.add(className);
        return element;
    };
    View.prototype._initLocalListeners = function () {
        var _this = this;
        this.input.addEventListener('input', function (event) {
            var text = event.target.value;
            _this._temporaryTodoText = text;
        });
        // this.todoList.addEventListener('input', event => {
        //     if (event.target.className === 'editable') {
        //         this._temporaryTodoText = event.target.innerText
        //     }
        // })
        // this.todoList.addEventListener('click', event => {
        //     const {target} = event
        //     if (target.matches('button')) {
        //  // this.displayTodos()
        //     }
        // })
    };
    View.prototype.bindSelectActiveTask = function (handler) {
        this.todoList.addEventListener('change', function (event) {
            if (event.target.type === 'radio') {
                var id = parseInt(event.target.parentElement.id);
                handler(id);
            }
        });
    };
    View.prototype.bindToggleTodo = function (handler) {
        this.todoList.addEventListener('change', function (event) {
            if (event.target.type === 'checkbox') {
                var id = parseInt(event.target.parentElement.id);
                handler(id);
            }
        });
    };
    View.prototype.bindRestartTodo = function (handler) {
        this.todoList.addEventListener('click', function (event) {
            if (event.target.matches('button') && event.target.innerText == 'RESTART') {
                console.log('RestartTodo');
                handler();
            }
        });
    };
    View.prototype.bindDeleteTodo = function (handler) {
        this.todoList.addEventListener('click', function (event) {
            if (event.target.className === 'delete') {
                var id = parseInt(event.target.parentElement.id);
                console.log('DeleteTodo');
                handler(id);
            }
        });
    };
    View.prototype.bindExecuteTask = function (handler) {
        this.execButton.addEventListener('click', function (event) {
            // if (event.key === 'Enter') {
            //     if (this._temporaryTodoText !== '') {
            //         handler(this._temporaryTodoText)
            //     }
            // code for enter}
            handler();
        });
    };
    return View;
}());
var Controller = /** @class */ (function () {
    function Controller(model, view) {
        var _this = this;
        this.onTodoListChanged = function (todos) {
            _this.view.displayTodos(todos);
        };
        this.handleToggleTodo = function (id) {
            _this.model.toggleTodo(id);
        };
        this.handleDeleteTodo = function (id) {
            _this.model.deleteTodo(id);
        };
        this.handleRestartTodo = function () {
            _this.model.restartTodos();
        };
        this.handleActiveTask = function (id) {
            _this.model.selectActiveTask(id);
        };
        this.handleExecuteTask = function (value) {
            _this.model.executeTask(value);
        };
        this.model = model;
        this.view = view;
        this.model.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindToggleTodo(this.handleToggleTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
        this.view.bindRestartTodo(this.handleRestartTodo);
        this.view.bindSelectActiveTask(this.handleActiveTask);
        this.view.bindExecuteTask(this.handleExecuteTask);
        this.onTodoListChanged(this.model.todos);
    }
    return Controller;
}());
var app = new Controller(new Model(), new View());
