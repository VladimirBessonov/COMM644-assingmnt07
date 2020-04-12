"use strict";
var compile = WebAssembly.compile;
class Tasks {
    constructor() {
        this.list = [{ id: 1, text: 'Create an application that prompts the user for their name. Then, find the ' +
                    'length of characters in the person’s name.  Use the alert method to ' +
                    'display the result.', complete: false, active: false, handler: () => { } },
            { id: 2, text: 'Create an application that prompts the user for their name. Then, prompt the user for ' +
                    'a numeric value so that they can find the letter in the string based on the number they specify.' +
                    ' Use the alert method to display the result.', complete: false, active: false, handler: () => { } },
            { id: 3, text: 'Create an application that prompts the user for their first name. Then, prompt the user for ' +
                    'their last name using a second prompt. Use the alert method to display the text "Your name is: "' +
                    ' along with the result of the first name and last name concatenated together. You will use a concatenation ' +
                    'operator to concatenate the literal string with the result ' +
                    'of the String object method’s result', complete: false, active: false, handler: () => { } },
            { id: 4, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy dog” ' +
                    'within a variable. Then, find and display within an alert' +
                    ' the index of the word “fox”.', complete: false, active: false, handler: () => { } },
            { id: 5, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy fox” ' +
                    'within a variable. Then, find and display within an alert the index ' +
                    'of the last instance of the word “fox”.', complete: false, active: false, handler: () => { } },
            { id: 6, text: 'Create an application that stores the text “The quick brown fox jumped over the lazy dog” ' +
                    'within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy' +
                    ' dog” in the variable with the name that the user enters within the prompt. Use the alert method ' +
                    'to display the result.', complete: false, active: false, handler: () => { } },
            { id: 7, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy dog” ' +
                    'within a variable. Then, prompt the user for a word. Next, search for the word within the string ' +
                    'that the user enters into the prompt. Use the ' +
                    'alert method to display the result.', complete: false, active: false, handler: () => { } },
            { id: 8, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy dog” ' +
                    'within a variable called old_string. Then, use slice(), substr(), or substring() to extract the ' +
                    'words “the lazy dog” from the old_string variable and store that result in a second variable' +
                    ' called new_string. Use the alert method to display' +
                    ' the uppercase result of new_string.', complete: false, active: false, handler: () => { } },
            { id: 9, text: 'Create an application that stores the text “            ' +
                    'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” ' +
                    'within a variable. Make sure to add space before and after the text so that appears very similar' +
                    ' to the text here. Use the alert method to display the lowercase result of the variable once the' +
                    ' space has been trimmed off.', complete: false, active: false, handler: () => { } },
            { id: 10, text: 'Create an application that stores the text “the quick brown fox jumps over the lazy dog”' +
                    ' within a variable. The user clearly forgot to capitalize the first letter in the sentence. ' +
                    'Programmatically capitalize the first letter in the sentence' +
                    ' and display the result in an alert.', complete: false, active: false, handler: () => { } },
        ];
    }
}
class Model {
    constructor() {
        this.todos = (localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')) : new Tasks().list); // saying localStorage.getItem('todos') is not null
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
        this.todos = new Tasks().list;
        this._commit(this.todos);
    }
}
class View {
    constructor() {
        this.app = this.getElement('#root');
        this.input = this.createElement('input');
        this.input.type = 'text';
        this.input.placeholder = 'Enter here ';
        this.input.name = 'todo';
        this.title = this.createElement('h1');
        this.title.textContent = 'Todos';
        this.todoList = this.createElement('ul', 'todo-list');
        this.app.append(this.input, this.title, this.todoList);
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
            // if (event.target.className === 'editable') {
            //     this._temporaryTodoText = event.target.innerText
            // }
            console.log(event.target);
        });
        this.input.addEventListener('keydown', event => {
            const { key } = event;
            switch (key) {
                case "Down": // IE/Edge specific value
                case "ArrowDown":
                    // Do something for "down arrow" key press.
                    break;
                case "Up": // IE/Edge specific value
                case "ArrowUp":
                    // Do something for "up arrow" key press.
                    break;
                case "Left": // IE/Edge specific value
                case "ArrowLeft":
                    // Do something for "left arrow" key press.
                    break;
                case "Right": // IE/Edge specific value
                case "ArrowRight":
                    // Do something for "right arrow" key press.
                    break;
                case "Enter":
                    // Do something for "enter" or "return" key press.
                    console.log('Enter');
                    break;
                case "Esc": // IE/Edge specific value
                case "Escape":
                    // Do something for "esc" key press.
                    break;
                default:
                    return; // Quit when this doesn't handle the key event.
            }
        });
        this.todoList.addEventListener('click', event => {
            const { target } = event;
            if (target.matches('button')) {
                // this.displayTodos()
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
        this.model = model;
        this.view = view;
        this.model.bindTodoListChanged(this.onTodoListChanged);
        this.view.bindToggleTodo(this.handleToggleTodo);
        this.view.bindDeleteTodo(this.handleDeleteTodo);
        this.view.bindRestartTodo(this.handleRestartTodo);
        this.onTodoListChanged(this.model.todos);
    }
}
const app = new Controller(new Model(), new View());
