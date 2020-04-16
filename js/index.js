import { Tasks } from "./task";
import { List } from "./string";
class Model {
    constructor() {
        this.todos = localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')) : new Tasks(List).list; // saying localStorage.getItem('todos') is not null
        this.activeTask = null;
    }
    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback;
    }
    _commit(todos) {
        this.onTodoListChanged(todos);
        localStorage.setItem('todos', JSON.stringify(todos));
    }
    toggleTodo(id) {
        this.todos = this.todos.map(todo => todo.id === id ? { id: todo.id, text: todo.text, active: todo.active, complete: !todo.complete, handler: todo.handler } : todo);
        this._commit(this.todos);
    }
    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id);
        this._commit(this.todos);
    }
    restartTodos() {
        this.todos = new Tasks(List).list;
        this._commit(this.todos);
    }
    executeTask(value) {
        if (this.activeTask !== null) {
            let handler = this.todos[this.activeTask - 1].handler;
            console.log(handler);
            handler(value);
        }
    }
    selectActiveTask(id) {
        this.activeTask = id;
    }
}
class View {
    constructor() {
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
    displayTodos(todos) {
        // Delete all nodes
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild);
        }
        // Show default message
        if (todos.length === 0) {
            const p = this.createElement('p');
            p.textContent = 'Nothing to do! Start over?';
            const restartButton = this.createElement('button');
            restartButton.innerText = 'RESTART';
            this.todoList.append(p, restartButton);
        }
        else {
            // Create nodes
            todos.forEach(todo => {
                const li = this.createElement('li');
                li.id = todo.id;
                const checkbox = this.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.checked = todo.complete;
                const radio = this.createElement('input');
                radio.type = 'radio';
                radio.setAttribute("name", "taskSelector");
                radio.checked = todo.active;
                const span = this.createElement('span');
                span.contentEditable = true;
                span.classList.add('editable');
                if (todo.complete) {
                    const strike = this.createElement('s');
                    strike.textContent = todo.text;
                    span.append(strike);
                }
                else {
                    span.textContent = todo.text;
                }
                const deleteButton = this.createElement('button', 'delete');
                deleteButton.textContent = 'Delete';
                li.append(radio, checkbox, span, deleteButton);
                // Append nodes
                this.todoList.append(li);
            });
        }
        // Debugging
        console.log(todos);
    }
    getElement(selector) {
        const element = document.querySelector(selector);
        return element;
    }
    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className)
            element.classList.add(className);
        return element;
    }
    _initLocalListeners() {
        this.input.addEventListener('input', event => {
            let text = event.target.value;
            this._temporaryTodoText = text;
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
    }
    bindSelectActiveTask(handler) {
        this.todoList.addEventListener('change', event => {
            if (event.target.type === 'radio') {
                const id = parseInt(event.target.parentElement.id);
                handler(id);
            }
        });
    }
    bindToggleTodo(handler) {
        this.todoList.addEventListener('change', event => {
            if (event.target.type === 'checkbox') {
                const id = parseInt(event.target.parentElement.id);
                handler(id);
            }
        });
    }
    bindRestartTodo(handler) {
        this.todoList.addEventListener('click', event => {
            if (event.target.matches('button') && event.target.innerText == 'RESTART') {
                console.log('RestartTodo');
                handler();
            }
        });
    }
    bindDeleteTodo(handler) {
        this.todoList.addEventListener('click', event => {
            if (event.target.className === 'delete') {
                const id = parseInt(event.target.parentElement.id);
                console.log('DeleteTodo');
                handler(id);
            }
        });
    }
    bindExecuteTask(handler) {
        this.execButton.addEventListener('click', (event) => {
            // if (event.key === 'Enter') {
            //     if (this._temporaryTodoText !== '') {
            //         handler(this._temporaryTodoText)
            //     }
            // code for enter}
            handler();
        });
    }
}
class Controller {
    constructor(model, view) {
        this.onTodoListChanged = todos => {
            this.view.displayTodos(todos);
        };
        this.handleToggleTodo = id => {
            this.model.toggleTodo(id);
        };
        this.handleDeleteTodo = id => {
            this.model.deleteTodo(id);
        };
        this.handleRestartTodo = () => {
            this.model.restartTodos();
        };
        this.handleActiveTask = id => {
            this.model.selectActiveTask(id);
        };
        this.handleExecuteTask = value => {
            this.model.executeTask(value);
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
}
export const app = new Controller(new Model(), new View());
