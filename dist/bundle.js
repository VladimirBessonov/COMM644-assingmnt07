(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var handlerStep1 = function () {
    var myNumber = parseInt(prompt('Step 1 - enter a positive or negative number', '10'));
    console.log("Step 1: " + Math.abs(myNumber));
};
//STEP 2 DONE
// Create an application that prompts the user for a floating point value (decimal).
// Store the result of that input in a variable and then round it up to the nearest whole number.
// // Display the result within a console window.
//
// let decimal = prompt('Step 2 - enter number with a decimal');
// console.log("Step 2: " + Math.ceil(decimal));
//
// //STEP 3 DONE
// // Create an application that prompts the user for a floating point value (decimal).
// // Store the result of that input in a variable and then round it down to the nearest whole number.
// // Display the result within a console window.
//
// let point = prompt("Step 3 - enter another number with a decimal");
// console.log("Step 3: " + Math.floor(point));
//
// //STEP 4 DONE
// // Create an application that prompts the user for 5 numbers.
// // Ask them to comma delimit each number so you get 1,2,3,4,5 for example.
// // Store the result of that input in a variable and then find the largest and smallest numbers in that list.
// // Display both of those numbers within a console window.
//
// let five = prompt('Step 4 - enter five numbers separated by comma (1,2,3)');
// let fiveSplit = five.split(",");
// let fiveArray = Array.from(fiveSplit );
// console.log(fiveArray);
// console.log("Step 4 - " + "largest number: " + Math.max.apply(null, fiveArray) + " smallest number: " + Math.min.apply(null, fiveArray));
//
// //STEP 5 DONE
// // Create an application that prompts the user for a number.
// // Now find the square root of that number and display the result within a console window.
//
// let sqroot = prompt('Step 5 - enter a number');
// console.log("Step 5: " + Math.sqrt(sqroot));
exports.List = [{ id: 1, text: '1.	Create an application that prompts the user for a number. Regardless of whether ' +
            'they enter a negative or positive number, make sure to display the positive version of that number in the console ' +
            'window. If I enter -15 in the prompt and -15 is displayed in the console window, ' +
            'you did this one wrong.', complete: false, active: false, handler: handlerStep1 },
];

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//STEP 1
var handlerStep1 = function () {
    var name = prompt('Enter you Name');
    if (name !== null) {
        alert("Your name is " + name.length + " long");
    }
};
//STEP 2
var handlerStep2 = function () {
    var name = prompt('Enter you Name');
    var orderNumber = parseInt(prompt('Enter number of letter you want to find'));
    if (name !== null) {
        if (orderNumber < name.length) {
            alert("The letter is  " + name[orderNumber - 1] + " long");
        }
        else {
            alert("Your name is " + name.length + " character long, the letter is out of the range. ");
        }
    }
};
//STEP 3
var handlerStep3 = function () {
    var name = prompt('Enter you Name');
    var surname = prompt('Enter you Name');
    var fullname = name.concat(' ', surname);
    alert("Your name is " + fullname);
};
//STEP 4
var handlerStep4 = function () {
    var sentence = prompt('enter you sentence or leave default', 'The quick brown fox jumps over the lazy dog');
    var array = sentence.split(' ');
    var searchWord = prompt('enter the word to find it index or leave default', 'fox');
    var index = array.indexOf(searchWord);
    alert(index);
};
//STEP 5
var handlerStep5 = function () {
    var sentence = prompt('enter you sentence or leave default', 'The quick brown fox jumps over the lazy fox');
    var array = sentence.split(' ');
    var searchWord = prompt('enter the word to find it index or leave default', 'fox');
    var wordIndex;
    array.forEach(function (item, index) {
        if (item === searchWord) {
            wordIndex = index;
        }
    });
    if (wordIndex !== undefined) {
        alert("last index of " + searchWord + " in the sentence is " + wordIndex);
    }
};
//STEP 6
var handlerStep6 = function () {
    var sentence = prompt('enter you sentence or leave default', 'The quick brown fox jumped over the lazy dog');
    var searchWord = prompt('enter your name or leave default', 'monkey');
    if (sentence !== 'The quick brown fox jumped over the lazy dog') {
        var replacement = prompt('what you want to replace in the entered sentence?');
        sentence.replace(replacement, searchWord);
    }
    else {
        alert(sentence.replace('the lazy dog', searchWord));
    }
};
//STEP 7
var handlerStep7 = function () {
    var sentence = prompt('enter you sentence or leave default', 'The quick brown fox jumps over the lazy dog');
    var searchWord = prompt('enter the word to find it index or leave default', 'fox');
    alert(sentence.search(searchWord));
};
//STEP 8
var handlerStep8 = function () {
    var old_string = "The quick brown fox jumps over the lazy dog";
    var new_string = old_string.slice();
    alert(new_string.slice(-12));
};
//STEP 9
var handlerStep9 = function () {
    var sentence = prompt('enter you sentence or leave default', '           THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ');
    alert(sentence.toLowerCase().trim());
};
//STEP 10
var handlerStep10 = function () {
    var old_string = "The quick brown fox jumps over the lazy dog";
    alert(old_string.toUpperCase());
};
exports.List = [{ id: 1, text: 'Create an application that prompts the user for their name. Then, find the ' +
            'length of characters in the person’s name.  Use the alert method to ' +
            'display the result.', complete: false, active: false, handler: handlerStep1 },
    { id: 2, text: 'Create an application that prompts the user for their name. Then, prompt the user for ' +
            'a numeric value so that they can find the letter in the string based on the number they specify.' +
            ' Use the alert method to display the result.', complete: false, active: false, handler: handlerStep2 },
    { id: 3, text: 'Create an application that prompts the user for their first name. Then, prompt the user for ' +
            'their last name using a second prompt. Use the alert method to display the text "Your name is: "' +
            ' along with the result of the first name and last name concatenated together. You will use a concatenation ' +
            'operator to concatenate the literal string with the result ' +
            'of the String object method’s result', complete: false, active: false, handler: handlerStep3 },
    { id: 4, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy dog” ' +
            'within a variable. Then, find and display within an alert' +
            ' the index of the word “fox”.', complete: false, active: false, handler: handlerStep4 },
    { id: 5, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy fox” ' +
            'within a variable. Then, find and display within an alert the index ' +
            'of the last instance of the word “fox”.', complete: false, active: false, handler: handlerStep5 },
    { id: 6, text: 'Create an application that stores the text “The quick brown fox jumped over the lazy dog” ' +
            'within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy' +
            ' dog” in the variable with the name that the user enters within the prompt. Use the alert method ' +
            'to display the result.', complete: false, active: false, handler: handlerStep6 },
    { id: 7, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy dog” ' +
            'within a variable. Then, prompt the user for a word. Next, search for the word within the string ' +
            'that the user enters into the prompt. Use the ' +
            'alert method to display the result.', complete: false, active: false, handler: handlerStep7 },
    { id: 8, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy dog” ' +
            'within a variable called old_string. Then, use slice(), substr(), or substring() to extract the ' +
            'words “the lazy dog” from the old_string variable and store that result in a second variable' +
            ' called new_string. Use the alert method to display' +
            ' the uppercase result of new_string.', complete: false, active: false, handler: handlerStep8 },
    { id: 9, text: 'Create an application that stores the text “            ' +
            'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” ' +
            'within a variable. Make sure to add space before and after the text so that appears very similar' +
            ' to the text here. Use the alert method to display the lowercase result of the variable once the' +
            ' space has been trimmed off.', complete: false, active: false, handler: handlerStep9 },
    { id: 10, text: 'Create an application that stores the text “the quick brown fox jumps over the lazy dog”' +
            ' within a variable. The user clearly forgot to capitalize the first letter in the sentence. ' +
            'Programmatically capitalize the first letter in the sentence' +
            ' and display the result in an alert.', complete: false, active: false, handler: handlerStep10 },
];

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task = /** @class */ (function () {
    function Task(taskList) {
        this.list = taskList;
    }
    return Task;
}());
exports.Task = Task;

},{}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Task_1 = require("./Task");
var String_1 = require("./String");
var Math_1 = require("./Math");
var Model = /** @class */ (function () {
    function Model() {
        this.todos = localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')) : new Task_1.Task(String_1.List).list; // saying localStorage.getItem('todos') is not null
        this.mathTodos = localStorage.getItem('mathTodos') !== null ? JSON.parse(localStorage.getItem('mathTodos')) : new Task_1.Task(Math_1.List).list; // saying localStorage.getItem('todos') is not null
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
        this.todos = new Task_1.Task(String_1.List).list;
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
        this.title.textContent = 'JS Practices';
        this.todoList = this.createElement('ul', 'todo-list');
        this.menu = this.createElement('ul');
        this.app.append(this.execButton, this.title, this.menu, this.todoList);
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
    View.prototype.bindSelectTab = function (handler) {
        this.menu.addEventListener('click', function (event) {
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
exports.app = new Controller(new Model(), new View());

},{"./Math":1,"./String":2,"./Task":3}]},{},[4])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvTWF0aC50cyIsInNyYy9TdHJpbmcudHMiLCJzcmMvVGFzay50cyIsInNyYy9tYWluLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFNLFlBQVksR0FBRztJQUNqQixJQUFJLFFBQVEsR0FBVyxRQUFRLENBQUMsTUFBTSxDQUFDLDhDQUE4QyxFQUFFLElBQUksQ0FBRSxDQUFDLENBQUM7SUFDL0YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0FBQ2pELENBQUMsQ0FBQTtBQUNELGFBQWE7QUFDYixvRkFBb0Y7QUFDcEYsaUdBQWlHO0FBQ2pHLGlEQUFpRDtBQUNqRCxFQUFFO0FBQ0YsZ0VBQWdFO0FBQ2hFLGdEQUFnRDtBQUNoRCxFQUFFO0FBQ0YsZ0JBQWdCO0FBQ2hCLHVGQUF1RjtBQUN2RixzR0FBc0c7QUFDdEcsaURBQWlEO0FBQ2pELEVBQUU7QUFDRixzRUFBc0U7QUFDdEUsK0NBQStDO0FBQy9DLEVBQUU7QUFDRixnQkFBZ0I7QUFDaEIsZ0VBQWdFO0FBQ2hFLDZFQUE2RTtBQUM3RSwrR0FBK0c7QUFDL0csNERBQTREO0FBQzVELEVBQUU7QUFDRiwrRUFBK0U7QUFDL0UsbUNBQW1DO0FBQ25DLDBDQUEwQztBQUMxQywwQkFBMEI7QUFDMUIsNElBQTRJO0FBQzVJLEVBQUU7QUFDRixnQkFBZ0I7QUFDaEIsK0RBQStEO0FBQy9ELDZGQUE2RjtBQUM3RixFQUFFO0FBQ0Ysa0RBQWtEO0FBQ2xELCtDQUErQztBQUVsQyxRQUFBLElBQUksR0FBRyxDQUFDLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUscUZBQXFGO1lBQ2hILG9IQUFvSDtZQUNwSCxtRkFBbUY7WUFDbkYseUJBQXlCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUU7Q0FhMUYsQ0FBQTs7Ozs7QUN2REQsUUFBUTtBQUNSLElBQU0sWUFBWSxHQUFHO0lBQ2pCLElBQUksSUFBSSxHQUFtQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUNuRCxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7UUFBRSxLQUFLLENBQUMsa0JBQWdCLElBQUksQ0FBQyxNQUFNLFVBQU8sQ0FBQyxDQUFBO0tBQUM7QUFDbkUsQ0FBQyxDQUFBO0FBQ0QsUUFBUTtBQUNSLElBQU0sWUFBWSxHQUFHO0lBQ2pCLElBQUksSUFBSSxHQUFtQixNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtJQUNuRCxJQUFJLFdBQVcsR0FBSSxRQUFRLENBQUMsTUFBTSxDQUFDLHlDQUF5QyxDQUFFLENBQUMsQ0FBQTtJQUMvRSxJQUFJLElBQUksS0FBSyxJQUFJLEVBQUU7UUFDZixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQzNCLEtBQUssQ0FBQyxvQkFBa0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsVUFBTyxDQUFDLENBQUE7U0FBQzthQUFNO1lBQzVELEtBQUssQ0FBQyxrQkFBZ0IsSUFBSSxDQUFDLE1BQU0sc0RBQW1ELENBQUMsQ0FBQTtTQUN4RjtLQUNBO0FBQ1QsQ0FBQyxDQUFBO0FBQ0QsUUFBUTtBQUNSLElBQU0sWUFBWSxHQUFHO0lBQ2pCLElBQUksSUFBSSxHQUFhLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBRSxDQUFBO0lBQzlDLElBQUksT0FBTyxHQUFhLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBRSxDQUFBO0lBQ2pELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFBO0lBQ3hDLEtBQUssQ0FBQyxrQkFBZ0IsUUFBVSxDQUFDLENBQUE7QUFDckMsQ0FBQyxDQUFBO0FBQ0QsUUFBUTtBQUNSLElBQU0sWUFBWSxHQUFHO0lBQ2pCLElBQUksUUFBUSxHQUFHLE1BQU0sQ0FBQyxxQ0FBcUMsRUFBRSw2Q0FBNkMsQ0FBRSxDQUFBO0lBQzVHLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUE7SUFDL0IsSUFBSSxVQUFVLEdBQUUsTUFBTSxDQUFDLGtEQUFrRCxFQUFFLEtBQUssQ0FBRSxDQUFBO0lBQ2xGLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUE7SUFDckMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFBO0FBRWhCLENBQUMsQ0FBQTtBQUNELFFBQVE7QUFDUixJQUFNLFlBQVksR0FBRztJQUNqQixJQUFJLFFBQVEsR0FBRyxNQUFNLENBQUMscUNBQXFDLEVBQUUsNkNBQTZDLENBQUUsQ0FBQTtJQUM1RyxJQUFJLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO0lBQy9CLElBQUksVUFBVSxHQUFFLE1BQU0sQ0FBQyxrREFBa0QsRUFBRSxLQUFLLENBQUUsQ0FBQTtJQUNsRixJQUFJLFNBQTZCLENBQUM7SUFDbEMsS0FBSyxDQUFDLE9BQU8sQ0FBRSxVQUFDLElBQUksRUFBRSxLQUFLO1FBQ3ZCLElBQUksSUFBSSxLQUFLLFVBQVUsRUFBRTtZQUNyQixTQUFTLEdBQUcsS0FBSyxDQUFBO1NBQ3BCO0lBQ0wsQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7UUFDekIsS0FBSyxDQUFDLG1CQUFpQixVQUFVLDRCQUF1QixTQUFXLENBQUMsQ0FBQTtLQUN2RTtBQUVMLENBQUMsQ0FBQTtBQUVELFFBQVE7QUFDUixJQUFNLFlBQVksR0FBRztJQUNqQixJQUFJLFFBQVEsR0FBWSxNQUFNLENBQUMscUNBQXFDLEVBQUUsOENBQThDLENBQUUsQ0FBQTtJQUN0SCxJQUFJLFVBQVUsR0FBWSxNQUFNLENBQUMsa0NBQWtDLEVBQUUsUUFBUSxDQUFFLENBQUE7SUFDL0UsSUFBSSxRQUFRLEtBQUssOENBQThDLEVBQUU7UUFDN0QsSUFBSSxXQUFXLEdBQVksTUFBTSxDQUFDLG1EQUFtRCxDQUFFLENBQUE7UUFDdkYsUUFBUSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsVUFBVSxDQUFDLENBQUE7S0FDNUM7U0FBTTtRQUNILEtBQUssQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFBO0tBQ3REO0FBRUwsQ0FBQyxDQUFBO0FBRUQsUUFBUTtBQUVSLElBQU0sWUFBWSxHQUFHO0lBQ2pCLElBQUksUUFBUSxHQUFZLE1BQU0sQ0FBQyxxQ0FBcUMsRUFBRSw2Q0FBNkMsQ0FBRSxDQUFBO0lBQ3JILElBQUksVUFBVSxHQUFZLE1BQU0sQ0FBQyxrREFBa0QsRUFBRSxLQUFLLENBQUUsQ0FBQTtJQUM1RixLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFBO0FBRXRDLENBQUMsQ0FBQTtBQUNELFFBQVE7QUFDUixJQUFNLFlBQVksR0FBRztJQUNqQixJQUFJLFVBQVUsR0FBWSw2Q0FBNkMsQ0FBQTtJQUN2RSxJQUFJLFVBQVUsR0FBWSxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDNUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFBO0FBQ2hDLENBQUMsQ0FBQTtBQUdELFFBQVE7QUFDUixJQUFNLFlBQVksR0FBRztJQUNqQixJQUFJLFFBQVEsR0FBWSxNQUFNLENBQUMscUNBQXFDLEVBQUUsa0VBQWtFLENBQUUsQ0FBQTtJQUMxSSxLQUFLLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUE7QUFFeEMsQ0FBQyxDQUFBO0FBQ0QsU0FBUztBQUNULElBQU0sYUFBYSxHQUFHO0lBQ2xCLElBQUksVUFBVSxHQUFZLDZDQUE2QyxDQUFBO0lBQ3ZFLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtBQUNuQyxDQUFDLENBQUE7QUFJWSxRQUFBLElBQUksR0FBRyxDQUFDLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsNkVBQTZFO1lBQ3hHLHNFQUFzRTtZQUN0RSxxQkFBcUIsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFHLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRTtJQUNuRixFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLHdGQUF3RjtZQUM5RixrR0FBa0c7WUFDbEcsOENBQThDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUM7SUFDL0csRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSw4RkFBOEY7WUFDcEcsa0dBQWtHO1lBQ2xHLDZHQUE2RztZQUM3Ryw2REFBNkQ7WUFDN0Qsc0NBQXNDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUM7SUFDdkcsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSwyRkFBMkY7WUFDakcsMkRBQTJEO1lBQzNELCtCQUErQixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUcsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDO0lBQ2hHLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsMkZBQTJGO1lBQ2pHLHNFQUFzRTtZQUN0RSx5Q0FBeUMsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFHLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBQztJQUMxRyxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLDRGQUE0RjtZQUNsRyxnR0FBZ0c7WUFDaEcsbUdBQW1HO1lBQ25HLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUcsTUFBTSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFDO0lBQ3pGLEVBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsMkZBQTJGO1lBQ2pHLG1HQUFtRztZQUNuRyxnREFBZ0Q7WUFDaEQscUNBQXFDLEVBQUMsUUFBUSxFQUFFLEtBQUssRUFBSSxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUM7SUFDdEcsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSwyRkFBMkY7WUFDakcsa0dBQWtHO1lBQ2xHLDhGQUE4RjtZQUM5RixxREFBcUQ7WUFDckQsc0NBQXNDLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUM7SUFDdkcsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSwwREFBMEQ7WUFDaEUseURBQXlEO1lBQ3pELGtHQUFrRztZQUNsRyxrR0FBa0c7WUFDbEcsOEJBQThCLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRyxNQUFNLEVBQUUsS0FBSyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUM7SUFDL0YsRUFBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLElBQUksRUFBRSwwRkFBMEY7WUFDakcsOEZBQThGO1lBQzlGLDhEQUE4RDtZQUM5RCxzQ0FBc0MsRUFBRSxRQUFRLEVBQUUsS0FBSyxFQUFHLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBQztDQUMzRyxDQUFBOzs7OztBQ3BJRDtJQUVJLGNBQVksUUFBUTtRQUNoQixJQUFJLENBQUMsSUFBSSxHQUFJLFFBQVEsQ0FBQTtJQUN6QixDQUFDO0lBRUwsV0FBQztBQUFELENBTkEsQUFNQyxJQUFBO0FBTlksb0JBQUk7Ozs7O0FDQWpCLCtCQUFxQztBQUNyQyxtQ0FBZ0M7QUFDaEMsK0JBQXdDO0FBRXhDO0lBS0k7UUFDUSxJQUFJLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxXQUFLLENBQUMsYUFBSSxDQUFDLENBQUMsSUFBSSxDQUFBLENBQUcsbURBQW1EO1FBQzdLLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLFdBQUssQ0FBQyxXQUFRLENBQUMsQ0FBQyxJQUFJLENBQUEsQ0FBRyxtREFBbUQ7UUFDN0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7SUFDOUIsQ0FBQztJQUVELG1DQUFtQixHQUFuQixVQUFvQixRQUFRO1FBQ3hCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxRQUFRLENBQUE7SUFDckMsQ0FBQztJQUVELHVCQUFPLEdBQVAsVUFBUSxLQUFXO1FBQ2YsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzdCLFlBQVksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtJQUN4RCxDQUFDO0lBRUQsMEJBQVUsR0FBVixVQUFXLEVBQUU7UUFDVCxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFVBQUEsSUFBSTtZQUM1QixPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSTtRQUE5SCxDQUE4SCxDQUNqSSxDQUFBO1FBRUQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELDBCQUFVLEdBQVYsVUFBVyxFQUFFO1FBQ1QsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLElBQUksQ0FBQyxFQUFFLEtBQUssRUFBRSxFQUFkLENBQWMsQ0FBQyxDQUFBO1FBRXRELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQzVCLENBQUM7SUFFRCw0QkFBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLEtBQUssR0FBSSxJQUFJLFdBQUssQ0FBQyxhQUFJLENBQUMsQ0FBQyxJQUFJLENBQUE7UUFDbEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUE7SUFDNUIsQ0FBQztJQUVELDJCQUFXLEdBQVgsVUFBWSxLQUFLO1FBQ2IsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLElBQUksRUFBRTtZQUMxQixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFBO1lBQ3JELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUE7WUFDcEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFBO1NBQ2pCO0lBQ0wsQ0FBQztJQUVELGdDQUFnQixHQUFoQixVQUFpQixFQUFVO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFBO0lBQ3hCLENBQUM7SUFFTCxZQUFDO0FBQUQsQ0FuREEsQUFtREMsSUFBQTtBQUVEO0lBUUk7UUFDSSxJQUFJLENBQUMsR0FBRyxHQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUE7UUFDcEMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO1FBQ3hDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE1BQU0sQ0FBQTtRQUN4QixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsR0FBRyxhQUFhLENBQUE7UUFDdEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFBO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUM5QyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxjQUFjLENBQUE7UUFDMUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3JDLElBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQTtRQUN2QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLFdBQVcsQ0FBQyxDQUFBO1FBQ3JELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUNwQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDdEUsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEVBQUUsQ0FBQTtRQUM1QixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQTtJQUM5QixDQUFDO0lBQ0QsMkJBQVksR0FBWixVQUFhLEtBQUs7UUFBbEIsaUJBa0RDO1FBakRHLG1CQUFtQjtRQUNuQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFFO1lBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUE7U0FDdEQ7UUFFRCx1QkFBdUI7UUFDdkIsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUNwQixJQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2pDLENBQUMsQ0FBQyxXQUFXLEdBQUcsNEJBQTRCLENBQUE7WUFDNUMsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUNsRCxhQUFhLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQTtZQUNuQyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsYUFBYSxDQUFDLENBQUE7U0FFekM7YUFBTTtZQUNILGVBQWU7WUFDZixLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDZCxJQUFNLEVBQUUsR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNuQyxFQUFFLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUE7Z0JBRWYsSUFBTSxRQUFRLEdBQVMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDbEQsUUFBUSxDQUFDLElBQUksR0FBRyxVQUFVLENBQUE7Z0JBQzFCLFFBQVEsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQTtnQkFDaEMsSUFBTSxLQUFLLEdBQVMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDL0MsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUE7Z0JBQ3BCLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLGNBQWMsQ0FBQyxDQUFDO2dCQUMzQyxLQUFLLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUE7Z0JBRTNCLElBQU0sSUFBSSxHQUFTLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUE7Z0JBQzdDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFBO2dCQUMzQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQTtnQkFFOUIsSUFBSSxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUNmLElBQU0sTUFBTSxHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUE7b0JBQ3RDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQTtvQkFDOUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQTtpQkFDdEI7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFBO2lCQUMvQjtnQkFFRCxJQUFNLFlBQVksR0FBRyxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQTtnQkFDM0QsWUFBWSxDQUFDLFdBQVcsR0FBRyxRQUFRLENBQUE7Z0JBQ25DLEVBQUUsQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxJQUFJLEVBQUUsWUFBWSxDQUFDLENBQUE7Z0JBRTlDLGVBQWU7Z0JBQ2YsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUE7WUFDNUIsQ0FBQyxDQUFDLENBQUE7U0FDTDtRQUNELFlBQVk7UUFDWixPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFBO0lBQ3RCLENBQUM7SUFFRCx5QkFBVSxHQUFWLFVBQVcsUUFBZ0I7UUFDdkIsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUVoRCxPQUFPLE9BQU8sQ0FBQTtJQUNsQixDQUFDO0lBQ0QsNEJBQWEsR0FBYixVQUFjLEdBQVcsRUFBRSxTQUFtQjtRQUMxQyxJQUFNLE9BQU8sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBRTNDLElBQUksU0FBUztZQUFFLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBRS9DLE9BQU8sT0FBTyxDQUFBO0lBQ2xCLENBQUM7SUFFRCxrQ0FBbUIsR0FBbkI7UUFBQSxpQkFpQkM7UUFoQkcsSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQSxLQUFLO1lBQ3RDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFBO1lBQzdCLEtBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUE7UUFDbEMsQ0FBQyxDQUFDLENBQUE7UUFDRixxREFBcUQ7UUFDckQsbURBQW1EO1FBQ25ELDJEQUEyRDtRQUMzRCxRQUFRO1FBQ1IsS0FBSztRQUNMLHFEQUFxRDtRQUNyRCw2QkFBNkI7UUFDN0Isc0NBQXNDO1FBQ3RDLDBCQUEwQjtRQUMxQixRQUFRO1FBQ1IsS0FBSztJQUVULENBQUM7SUFFRCxtQ0FBb0IsR0FBcEIsVUFBcUIsT0FBTztRQUN4QixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFBLEtBQUs7WUFDMUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxPQUFPLEVBQUU7Z0JBQy9CLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDbEQsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2FBQ2Q7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCw2QkFBYyxHQUFkLFVBQWUsT0FBTztRQUNsQixJQUFJLENBQUMsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsRUFBRSxVQUFBLEtBQUs7WUFDMUMsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksS0FBSyxVQUFVLEVBQUU7Z0JBQ2xDLElBQU0sRUFBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsQ0FBQTtnQkFDbEQsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFBO2FBQ2Q7UUFDTCxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFFRCw4QkFBZSxHQUFmLFVBQWdCLE9BQU87UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQSxLQUFLO1lBQ3pDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLElBQUksU0FBUyxFQUFFO2dCQUN2RSxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBO2dCQUMxQixPQUFPLEVBQUUsQ0FBQTthQUNaO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsNkJBQWMsR0FBZCxVQUFlLE9BQU87UUFDbEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQSxLQUFLO1lBQ3pDLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLEtBQUssUUFBUSxFQUFFO2dCQUNyQyxJQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsRUFBRSxDQUFDLENBQUE7Z0JBQ2xELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7Z0JBQ3pCLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQTthQUNkO1FBQ0wsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUQsOEJBQWUsR0FBZixVQUFnQixPQUFPO1FBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBSztZQUM1QywrQkFBK0I7WUFDL0IsNENBQTRDO1lBQzVDLDJDQUEyQztZQUMzQyxRQUFRO1lBQ0osa0JBQWtCO1lBQ2xCLE9BQU8sRUFBRSxDQUFBO1FBRWpCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELDRCQUFhLEdBQWIsVUFBYyxPQUFPO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsS0FBSztZQUN0QyxPQUFPLEVBQUUsQ0FBQTtRQUNiLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVMLFdBQUM7QUFBRCxDQW5LQSxBQW1LQyxJQUFBO0FBRUQ7SUFHSSxvQkFBWSxLQUFhLEVBQUUsSUFBVTtRQUFyQyxpQkFhQztRQUNELHNCQUFpQixHQUFHLFVBQUEsS0FBSztZQUNyQixLQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUNqQyxDQUFDLENBQUE7UUFFRCxxQkFBZ0IsR0FBRyxVQUFBLEVBQUU7WUFDakIsS0FBSSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDN0IsQ0FBQyxDQUFBO1FBQ0QscUJBQWdCLEdBQUcsVUFBQSxFQUFFO1lBQ2pCLEtBQUksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQzdCLENBQUMsQ0FBQTtRQUNELHNCQUFpQixHQUFHO1lBQ2hCLEtBQUksQ0FBQyxLQUFLLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDN0IsQ0FBQyxDQUFBO1FBRUQscUJBQWdCLEdBQUcsVUFBQSxFQUFFO1lBQ2pCLEtBQUksQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDbkMsQ0FBQyxDQUFBO1FBQ0Qsc0JBQWlCLEdBQUcsVUFBQSxLQUFLO1lBQ3JCLEtBQUksQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQ2pDLENBQUMsQ0FBQTtRQWhDRyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQTtRQUNsQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQTtRQUVoQixJQUFJLENBQUMsS0FBSyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQy9DLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUE7UUFDckQsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUE7UUFFakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7SUFFNUMsQ0FBQztJQXVCTCxpQkFBQztBQUFELENBdkNBLEFBdUNDLElBQUE7QUFFWSxRQUFBLEdBQUcsR0FBRyxJQUFJLFVBQVUsQ0FBQyxJQUFJLEtBQUssRUFBRSxFQUFFLElBQUksSUFBSSxFQUFFLENBQUMsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IGhhbmRsZXJTdGVwMSA9ICgpID0+IHtcbiAgICBsZXQgbXlOdW1iZXI6IG51bWJlciA9IHBhcnNlSW50KHByb21wdCgnU3RlcCAxIC0gZW50ZXIgYSBwb3NpdGl2ZSBvciBuZWdhdGl2ZSBudW1iZXInLCAnMTAnKSEpO1xuICAgIGNvbnNvbGUubG9nKFwiU3RlcCAxOiBcIiArIE1hdGguYWJzKG15TnVtYmVyKSk7XG59XG4vL1NURVAgMiBET05FXG4vLyBDcmVhdGUgYW4gYXBwbGljYXRpb24gdGhhdCBwcm9tcHRzIHRoZSB1c2VyIGZvciBhIGZsb2F0aW5nIHBvaW50IHZhbHVlIChkZWNpbWFsKS5cbi8vIFN0b3JlIHRoZSByZXN1bHQgb2YgdGhhdCBpbnB1dCBpbiBhIHZhcmlhYmxlIGFuZCB0aGVuIHJvdW5kIGl0IHVwIHRvIHRoZSBuZWFyZXN0IHdob2xlIG51bWJlci5cbi8vIC8vIERpc3BsYXkgdGhlIHJlc3VsdCB3aXRoaW4gYSBjb25zb2xlIHdpbmRvdy5cbi8vXG4vLyBsZXQgZGVjaW1hbCA9IHByb21wdCgnU3RlcCAyIC0gZW50ZXIgbnVtYmVyIHdpdGggYSBkZWNpbWFsJyk7XG4vLyBjb25zb2xlLmxvZyhcIlN0ZXAgMjogXCIgKyBNYXRoLmNlaWwoZGVjaW1hbCkpO1xuLy9cbi8vIC8vU1RFUCAzIERPTkVcbi8vIC8vIENyZWF0ZSBhbiBhcHBsaWNhdGlvbiB0aGF0IHByb21wdHMgdGhlIHVzZXIgZm9yIGEgZmxvYXRpbmcgcG9pbnQgdmFsdWUgKGRlY2ltYWwpLlxuLy8gLy8gU3RvcmUgdGhlIHJlc3VsdCBvZiB0aGF0IGlucHV0IGluIGEgdmFyaWFibGUgYW5kIHRoZW4gcm91bmQgaXQgZG93biB0byB0aGUgbmVhcmVzdCB3aG9sZSBudW1iZXIuXG4vLyAvLyBEaXNwbGF5IHRoZSByZXN1bHQgd2l0aGluIGEgY29uc29sZSB3aW5kb3cuXG4vL1xuLy8gbGV0IHBvaW50ID0gcHJvbXB0KFwiU3RlcCAzIC0gZW50ZXIgYW5vdGhlciBudW1iZXIgd2l0aCBhIGRlY2ltYWxcIik7XG4vLyBjb25zb2xlLmxvZyhcIlN0ZXAgMzogXCIgKyBNYXRoLmZsb29yKHBvaW50KSk7XG4vL1xuLy8gLy9TVEVQIDQgRE9ORVxuLy8gLy8gQ3JlYXRlIGFuIGFwcGxpY2F0aW9uIHRoYXQgcHJvbXB0cyB0aGUgdXNlciBmb3IgNSBudW1iZXJzLlxuLy8gLy8gQXNrIHRoZW0gdG8gY29tbWEgZGVsaW1pdCBlYWNoIG51bWJlciBzbyB5b3UgZ2V0IDEsMiwzLDQsNSBmb3IgZXhhbXBsZS5cbi8vIC8vIFN0b3JlIHRoZSByZXN1bHQgb2YgdGhhdCBpbnB1dCBpbiBhIHZhcmlhYmxlIGFuZCB0aGVuIGZpbmQgdGhlIGxhcmdlc3QgYW5kIHNtYWxsZXN0IG51bWJlcnMgaW4gdGhhdCBsaXN0LlxuLy8gLy8gRGlzcGxheSBib3RoIG9mIHRob3NlIG51bWJlcnMgd2l0aGluIGEgY29uc29sZSB3aW5kb3cuXG4vL1xuLy8gbGV0IGZpdmUgPSBwcm9tcHQoJ1N0ZXAgNCAtIGVudGVyIGZpdmUgbnVtYmVycyBzZXBhcmF0ZWQgYnkgY29tbWEgKDEsMiwzKScpO1xuLy8gbGV0IGZpdmVTcGxpdCA9IGZpdmUuc3BsaXQoXCIsXCIpO1xuLy8gbGV0IGZpdmVBcnJheSA9IEFycmF5LmZyb20oZml2ZVNwbGl0ICk7XG4vLyBjb25zb2xlLmxvZyhmaXZlQXJyYXkpO1xuLy8gY29uc29sZS5sb2coXCJTdGVwIDQgLSBcIiArIFwibGFyZ2VzdCBudW1iZXI6IFwiICsgTWF0aC5tYXguYXBwbHkobnVsbCwgZml2ZUFycmF5KSArIFwiIHNtYWxsZXN0IG51bWJlcjogXCIgKyBNYXRoLm1pbi5hcHBseShudWxsLCBmaXZlQXJyYXkpKTtcbi8vXG4vLyAvL1NURVAgNSBET05FXG4vLyAvLyBDcmVhdGUgYW4gYXBwbGljYXRpb24gdGhhdCBwcm9tcHRzIHRoZSB1c2VyIGZvciBhIG51bWJlci5cbi8vIC8vIE5vdyBmaW5kIHRoZSBzcXVhcmUgcm9vdCBvZiB0aGF0IG51bWJlciBhbmQgZGlzcGxheSB0aGUgcmVzdWx0IHdpdGhpbiBhIGNvbnNvbGUgd2luZG93LlxuLy9cbi8vIGxldCBzcXJvb3QgPSBwcm9tcHQoJ1N0ZXAgNSAtIGVudGVyIGEgbnVtYmVyJyk7XG4vLyBjb25zb2xlLmxvZyhcIlN0ZXAgNTogXCIgKyBNYXRoLnNxcnQoc3Fyb290KSk7XG5cbmV4cG9ydCBjb25zdCBMaXN0ID0gW3tpZDogMSwgdGV4dDogJzEuXHRDcmVhdGUgYW4gYXBwbGljYXRpb24gdGhhdCBwcm9tcHRzIHRoZSB1c2VyIGZvciBhIG51bWJlci4gUmVnYXJkbGVzcyBvZiB3aGV0aGVyICcgK1xuICAgICAgICAndGhleSBlbnRlciBhIG5lZ2F0aXZlIG9yIHBvc2l0aXZlIG51bWJlciwgbWFrZSBzdXJlIHRvIGRpc3BsYXkgdGhlIHBvc2l0aXZlIHZlcnNpb24gb2YgdGhhdCBudW1iZXIgaW4gdGhlIGNvbnNvbGUgJyArXG4gICAgICAgICd3aW5kb3cuIElmIEkgZW50ZXIgLTE1IGluIHRoZSBwcm9tcHQgYW5kIC0xNSBpcyBkaXNwbGF5ZWQgaW4gdGhlIGNvbnNvbGUgd2luZG93LCAnICtcbiAgICAgICAgJ3lvdSBkaWQgdGhpcyBvbmUgd3JvbmcuJywgY29tcGxldGU6IGZhbHNlLCAgYWN0aXZlOiBmYWxzZSwgaGFuZGxlcjogaGFuZGxlclN0ZXAxIH0sXG4gICAgLy8ge2lkOiAyLCB0ZXh0OiAnMi5cdENyZWF0ZSBhbiBhcHBsaWNhdGlvbiB0aGF0IHByb21wdHMgdGhlIHVzZXIgZm9yIGEgZmxvYXRpbmcgcG9pbnQgdmFsdWUgKGRlY2ltYWwpLiBTdG9yZSB0aGUgJyArXG4gICAgLy8gICAgICAgICAncmVzdWx0IG9mIHRoYXQgaW5wdXQgaW4gYSB2YXJpYWJsZSBhbmQgdGhlbiByb3VuZCBpdCB1cCB0byB0aGUgbmVhcmVzdCB3aG9sZSBudW1iZXIuIERpc3BsYXkgdGhlIHJlc3VsdCAnICtcbiAgICAvLyAgICAgICAgICd3aXRoaW4gYSBjb25zb2xlIHdpbmRvdy4nLCBjb21wbGV0ZTogZmFsc2UsICBhY3RpdmU6IGZhbHNlLCBoYW5kbGVyOiBoYW5kbGVyU3RlcDJ9LFxuICAgIC8vIHtpZDogMywgdGV4dDogJzMuXHRDcmVhdGUgYW4gYXBwbGljYXRpb24gdGhhdCBwcm9tcHRzIHRoZSB1c2VyIGZvciBhIGZsb2F0aW5nIHBvaW50IHZhbHVlIChkZWNpbWFsKS4gU3RvcmUgdGhlICcgK1xuICAgIC8vICAgICAgICAgJ3Jlc3VsdCBvZiB0aGF0IGlucHV0IGluIGEgdmFyaWFibGUgYW5kIHRoZW4gcm91bmQgaXQgZG93biB0byB0aGUgbmVhcmVzdCB3aG9sZSBudW1iZXIuIERpc3BsYXkgdGhlIHJlc3VsdCcgK1xuICAgIC8vICAgICAgICAgJyB3aXRoaW4gYSBjb25zb2xlIHdpbmRvdy4nLCBjb21wbGV0ZTogZmFsc2UsICBhY3RpdmU6IGZhbHNlLCBoYW5kbGVyOiBoYW5kbGVyU3RlcDN9LFxuICAgIC8vIHtpZDogNCwgdGV4dDogJzQuXHRDcmVhdGUgYW4gYXBwbGljYXRpb24gdGhhdCBwcm9tcHRzIHRoZSB1c2VyIGZvciA1IG51bWJlcnMuIEFzayB0aGVtIHRvIGNvbW1hIGRlbGltaXQgZWFjaCBudW1iZXInICtcbiAgICAvLyAgICAgICAgICcgc28geW91IGdldCAxLDIsMyw0LDUgZm9yIGV4YW1wbGUuIFN0b3JlIHRoZSByZXN1bHQgb2YgdGhhdCBpbnB1dCBpbiBhIHZhcmlhYmxlIGFuZCB0aGVuIGZpbmQgdGhlIGxhcmdlc3QgJyArXG4gICAgLy8gICAgICAgICAnYW5kIHNtYWxsZXN0IG51bWJlcnMgaW4gdGhhdCBsaXN0LiBEaXNwbGF5IGJvdGggb2YgdGhvc2UgbnVtYmVycyAnICtcbiAgICAvLyAgICAgICAgICd3aXRoaW4gYSBjb25zb2xlIHdpbmRvdy4nLCBjb21wbGV0ZTogZmFsc2UsICBhY3RpdmU6IGZhbHNlLCBoYW5kbGVyOiBoYW5kbGVyU3RlcDR9ICxcbiAgICAvLyB7aWQ6IDUsIHRleHQ6ICc1Llx0Q3JlYXRlIGFuIGFwcGxpY2F0aW9uIHRoYXQgcHJvbXB0cyB0aGUgdXNlciBmb3IgYSBudW1iZXIuIE5vdyBmaW5kIHRoZSBzcXVhcmUgcm9vdCBvZiB0aGF0IG51bWJlcicgK1xuICAgIC8vICAgICAgICAgJyBhbmQgZGlzcGxheSB0aGUgcmVzdWx0IHdpdGhpbiBhIGNvbnNvbGUgd2luZG93LiAnLCBjb21wbGV0ZTogZmFsc2UsICBhY3RpdmU6IGZhbHNlLCBoYW5kbGVyOiBoYW5kbGVyU3RlcDV9XG5dIiwiLy9TVEVQIDFcbmNvbnN0IGhhbmRsZXJTdGVwMSA9ICgpID0+IHtcbiAgICBsZXQgbmFtZSA6IHN0cmluZyB8IG51bGwgPSBwcm9tcHQoJ0VudGVyIHlvdSBOYW1lJylcbiAgICBpZiAobmFtZSAhPT0gbnVsbCkgeyBhbGVydChgWW91ciBuYW1lIGlzICR7bmFtZS5sZW5ndGh9IGxvbmdgKX1cbn1cbi8vU1RFUCAyXG5jb25zdCBoYW5kbGVyU3RlcDIgPSAoKSA9PiB7XG4gICAgbGV0IG5hbWUgOiBzdHJpbmcgfCBudWxsID0gcHJvbXB0KCdFbnRlciB5b3UgTmFtZScpXG4gICAgbGV0IG9yZGVyTnVtYmVyICA9IHBhcnNlSW50KHByb21wdCgnRW50ZXIgbnVtYmVyIG9mIGxldHRlciB5b3Ugd2FudCB0byBmaW5kJykhKVxuICAgIGlmIChuYW1lICE9PSBudWxsKSB7XG4gICAgICAgIGlmIChvcmRlck51bWJlciA8IG5hbWUubGVuZ3RoKSB7XG4gICAgICAgICAgICBhbGVydChgVGhlIGxldHRlciBpcyAgJHtuYW1lW29yZGVyTnVtYmVyIC0gMV19IGxvbmdgKX0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChgWW91ciBuYW1lIGlzICR7bmFtZS5sZW5ndGh9IGNoYXJhY3RlciBsb25nLCB0aGUgbGV0dGVyIGlzIG91dCBvZiB0aGUgcmFuZ2UuIGApXG4gICAgICAgIH1cbiAgICAgICAgfVxufVxuLy9TVEVQIDNcbmNvbnN0IGhhbmRsZXJTdGVwMyA9ICgpID0+IHtcbiAgICBsZXQgbmFtZSA6IHN0cmluZyAgPSBwcm9tcHQoJ0VudGVyIHlvdSBOYW1lJykhXG4gICAgbGV0IHN1cm5hbWUgOiBzdHJpbmcgID0gcHJvbXB0KCdFbnRlciB5b3UgTmFtZScpIVxuICAgIGxldCBmdWxsbmFtZSA9IG5hbWUuY29uY2F0KCcgJywgc3VybmFtZSlcbiAgICBhbGVydChgWW91ciBuYW1lIGlzICR7ZnVsbG5hbWV9YClcbn1cbi8vU1RFUCA0XG5jb25zdCBoYW5kbGVyU3RlcDQgPSAoKSA9PiB7XG4gICAgbGV0IHNlbnRlbmNlID0gcHJvbXB0KCdlbnRlciB5b3Ugc2VudGVuY2Ugb3IgbGVhdmUgZGVmYXVsdCcsICdUaGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9nJykhXG4gICAgbGV0IGFycmF5ID0gc2VudGVuY2Uuc3BsaXQoJyAnKVxuICAgIGxldCBzZWFyY2hXb3JkPSBwcm9tcHQoJ2VudGVyIHRoZSB3b3JkIHRvIGZpbmQgaXQgaW5kZXggb3IgbGVhdmUgZGVmYXVsdCcsICdmb3gnKSFcbiAgICBsZXQgaW5kZXggPSBhcnJheS5pbmRleE9mKHNlYXJjaFdvcmQpXG4gICAgYWxlcnQoaW5kZXgpXG5cbn1cbi8vU1RFUCA1XG5jb25zdCBoYW5kbGVyU3RlcDUgPSAoKSA9PiB7XG4gICAgbGV0IHNlbnRlbmNlID0gcHJvbXB0KCdlbnRlciB5b3Ugc2VudGVuY2Ugb3IgbGVhdmUgZGVmYXVsdCcsICdUaGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZm94JykhXG4gICAgbGV0IGFycmF5ID0gc2VudGVuY2Uuc3BsaXQoJyAnKVxuICAgIGxldCBzZWFyY2hXb3JkPSBwcm9tcHQoJ2VudGVyIHRoZSB3b3JkIHRvIGZpbmQgaXQgaW5kZXggb3IgbGVhdmUgZGVmYXVsdCcsICdmb3gnKSFcbiAgICBsZXQgd29yZEluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQ7XG4gICAgYXJyYXkuZm9yRWFjaCggKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChpdGVtID09PSBzZWFyY2hXb3JkKSB7XG4gICAgICAgICAgICB3b3JkSW5kZXggPSBpbmRleFxuICAgICAgICB9XG4gICAgfSlcblxuICAgIGlmICh3b3JkSW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBhbGVydChgbGFzdCBpbmRleCBvZiAke3NlYXJjaFdvcmR9IGluIHRoZSBzZW50ZW5jZSBpcyAke3dvcmRJbmRleH1gKVxuICAgIH1cblxufVxuXG4vL1NURVAgNlxuY29uc3QgaGFuZGxlclN0ZXA2ID0gKCkgPT4ge1xuICAgIGxldCBzZW50ZW5jZSA6IHN0cmluZyA9IHByb21wdCgnZW50ZXIgeW91IHNlbnRlbmNlIG9yIGxlYXZlIGRlZmF1bHQnLCAnVGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cnKSFcbiAgICBsZXQgc2VhcmNoV29yZCA6IHN0cmluZyA9IHByb21wdCgnZW50ZXIgeW91ciBuYW1lIG9yIGxlYXZlIGRlZmF1bHQnLCAnbW9ua2V5JykhXG4gICAgaWYgKHNlbnRlbmNlICE9PSAnVGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2cnKSB7XG4gICAgICAgIGxldCByZXBsYWNlbWVudCA6IHN0cmluZyA9IHByb21wdCgnd2hhdCB5b3Ugd2FudCB0byByZXBsYWNlIGluIHRoZSBlbnRlcmVkIHNlbnRlbmNlPycpIVxuICAgICAgICBzZW50ZW5jZS5yZXBsYWNlKHJlcGxhY2VtZW50LCBzZWFyY2hXb3JkKVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGFsZXJ0KHNlbnRlbmNlLnJlcGxhY2UoJ3RoZSBsYXp5IGRvZycsIHNlYXJjaFdvcmQpKVxuICAgIH1cblxufVxuXG4vL1NURVAgN1xuXG5jb25zdCBoYW5kbGVyU3RlcDcgPSAoKSA9PiB7XG4gICAgbGV0IHNlbnRlbmNlIDogc3RyaW5nID0gcHJvbXB0KCdlbnRlciB5b3Ugc2VudGVuY2Ugb3IgbGVhdmUgZGVmYXVsdCcsICdUaGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9nJykhXG4gICAgbGV0IHNlYXJjaFdvcmQgOiBzdHJpbmcgPSBwcm9tcHQoJ2VudGVyIHRoZSB3b3JkIHRvIGZpbmQgaXQgaW5kZXggb3IgbGVhdmUgZGVmYXVsdCcsICdmb3gnKSFcbiAgICBhbGVydChzZW50ZW5jZS5zZWFyY2goc2VhcmNoV29yZCkpXG5cbn1cbi8vU1RFUCA4XG5jb25zdCBoYW5kbGVyU3RlcDggPSAoKSA9PiB7XG4gICAgbGV0IG9sZF9zdHJpbmcgOiBzdHJpbmcgPSBcIlRoZSBxdWljayBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBkb2dcIlxuICAgIGxldCBuZXdfc3RyaW5nIDogc3RyaW5nID0gb2xkX3N0cmluZy5zbGljZSgpXG4gICAgYWxlcnQobmV3X3N0cmluZy5zbGljZSgtMTIpKVxufVxuXG5cbi8vU1RFUCA5XG5jb25zdCBoYW5kbGVyU3RlcDkgPSAoKSA9PiB7XG4gICAgbGV0IHNlbnRlbmNlIDogc3RyaW5nID0gcHJvbXB0KCdlbnRlciB5b3Ugc2VudGVuY2Ugb3IgbGVhdmUgZGVmYXVsdCcsICcgICAgICAgICAgIFRIRSBRVUlDSyBCUk9XTiBGT1ggSlVNUFMgT1ZFUiBUSEUgTEFaWSBET0cgICAgICAgICAgJykhXG4gICAgYWxlcnQoc2VudGVuY2UudG9Mb3dlckNhc2UoKS50cmltKCkpXG5cbn1cbi8vU1RFUCAxMFxuY29uc3QgaGFuZGxlclN0ZXAxMCA9ICgpID0+IHtcbiAgICBsZXQgb2xkX3N0cmluZyA6IHN0cmluZyA9IFwiVGhlIHF1aWNrIGJyb3duIGZveCBqdW1wcyBvdmVyIHRoZSBsYXp5IGRvZ1wiXG4gICAgYWxlcnQob2xkX3N0cmluZy50b1VwcGVyQ2FzZSgpKVxufVxuXG5cblxuZXhwb3J0IGNvbnN0IExpc3QgPSBbe2lkOiAxLCB0ZXh0OiAnQ3JlYXRlIGFuIGFwcGxpY2F0aW9uIHRoYXQgcHJvbXB0cyB0aGUgdXNlciBmb3IgdGhlaXIgbmFtZS4gVGhlbiwgZmluZCB0aGUgJyArXG4gICAgICAgICdsZW5ndGggb2YgY2hhcmFjdGVycyBpbiB0aGUgcGVyc29u4oCZcyBuYW1lLiAgVXNlIHRoZSBhbGVydCBtZXRob2QgdG8gJyArXG4gICAgICAgICdkaXNwbGF5IHRoZSByZXN1bHQuJywgY29tcGxldGU6IGZhbHNlLCAgYWN0aXZlOiBmYWxzZSwgaGFuZGxlcjogaGFuZGxlclN0ZXAxIH0sXG4gICAge2lkOiAyLCB0ZXh0OiAnQ3JlYXRlIGFuIGFwcGxpY2F0aW9uIHRoYXQgcHJvbXB0cyB0aGUgdXNlciBmb3IgdGhlaXIgbmFtZS4gVGhlbiwgcHJvbXB0IHRoZSB1c2VyIGZvciAnICtcbiAgICAgICAgICAgICdhIG51bWVyaWMgdmFsdWUgc28gdGhhdCB0aGV5IGNhbiBmaW5kIHRoZSBsZXR0ZXIgaW4gdGhlIHN0cmluZyBiYXNlZCBvbiB0aGUgbnVtYmVyIHRoZXkgc3BlY2lmeS4nICtcbiAgICAgICAgICAgICcgVXNlIHRoZSBhbGVydCBtZXRob2QgdG8gZGlzcGxheSB0aGUgcmVzdWx0LicsIGNvbXBsZXRlOiBmYWxzZSwgIGFjdGl2ZTogZmFsc2UsIGhhbmRsZXI6IGhhbmRsZXJTdGVwMn0sXG4gICAge2lkOiAzLCB0ZXh0OiAnQ3JlYXRlIGFuIGFwcGxpY2F0aW9uIHRoYXQgcHJvbXB0cyB0aGUgdXNlciBmb3IgdGhlaXIgZmlyc3QgbmFtZS4gVGhlbiwgcHJvbXB0IHRoZSB1c2VyIGZvciAnICtcbiAgICAgICAgICAgICd0aGVpciBsYXN0IG5hbWUgdXNpbmcgYSBzZWNvbmQgcHJvbXB0LiBVc2UgdGhlIGFsZXJ0IG1ldGhvZCB0byBkaXNwbGF5IHRoZSB0ZXh0IFwiWW91ciBuYW1lIGlzOiBcIicgK1xuICAgICAgICAgICAgJyBhbG9uZyB3aXRoIHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0IG5hbWUgYW5kIGxhc3QgbmFtZSBjb25jYXRlbmF0ZWQgdG9nZXRoZXIuIFlvdSB3aWxsIHVzZSBhIGNvbmNhdGVuYXRpb24gJyArXG4gICAgICAgICAgICAnb3BlcmF0b3IgdG8gY29uY2F0ZW5hdGUgdGhlIGxpdGVyYWwgc3RyaW5nIHdpdGggdGhlIHJlc3VsdCAnICtcbiAgICAgICAgICAgICdvZiB0aGUgU3RyaW5nIG9iamVjdCBtZXRob2TigJlzIHJlc3VsdCcsIGNvbXBsZXRlOiBmYWxzZSwgIGFjdGl2ZTogZmFsc2UsIGhhbmRsZXI6IGhhbmRsZXJTdGVwM30sXG4gICAge2lkOiA0LCB0ZXh0OiAnQ3JlYXRlIGFuIGFwcGxpY2F0aW9uIHRoYXQgc3RvcmVzIHRoZSB0ZXh0IOKAnFRoZSBxdWljayBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBkb2figJ0gJyArXG4gICAgICAgICAgICAnd2l0aGluIGEgdmFyaWFibGUuIFRoZW4sIGZpbmQgYW5kIGRpc3BsYXkgd2l0aGluIGFuIGFsZXJ0JyArXG4gICAgICAgICAgICAnIHRoZSBpbmRleCBvZiB0aGUgd29yZCDigJxmb3jigJ0uJywgY29tcGxldGU6IGZhbHNlLCAgYWN0aXZlOiBmYWxzZSwgaGFuZGxlcjogaGFuZGxlclN0ZXA0fSAsXG4gICAge2lkOiA1LCB0ZXh0OiAnQ3JlYXRlIGFuIGFwcGxpY2F0aW9uIHRoYXQgc3RvcmVzIHRoZSB0ZXh0IOKAnFRoZSBxdWljayBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBmb3jigJ0gJyArXG4gICAgICAgICAgICAnd2l0aGluIGEgdmFyaWFibGUuIFRoZW4sIGZpbmQgYW5kIGRpc3BsYXkgd2l0aGluIGFuIGFsZXJ0IHRoZSBpbmRleCAnICtcbiAgICAgICAgICAgICdvZiB0aGUgbGFzdCBpbnN0YW5jZSBvZiB0aGUgd29yZCDigJxmb3jigJ0uJywgY29tcGxldGU6IGZhbHNlLCAgYWN0aXZlOiBmYWxzZSwgaGFuZGxlcjogaGFuZGxlclN0ZXA1fSxcbiAgICB7aWQ6IDYsIHRleHQ6ICdDcmVhdGUgYW4gYXBwbGljYXRpb24gdGhhdCBzdG9yZXMgdGhlIHRleHQg4oCcVGhlIHF1aWNrIGJyb3duIGZveCBqdW1wZWQgb3ZlciB0aGUgbGF6eSBkb2figJ0gJyArXG4gICAgICAgICAgICAnd2l0aGluIGEgdmFyaWFibGUuIFRoZW4sIHByb21wdCB0aGUgdXNlciBmb3IgdGhlaXIgZnVsbCBuYW1lLiBUaGVuLCByZXBsYWNlIHRoZSB0ZXh0IOKAnHRoZSBsYXp5JyArXG4gICAgICAgICAgICAnIGRvZ+KAnSBpbiB0aGUgdmFyaWFibGUgd2l0aCB0aGUgbmFtZSB0aGF0IHRoZSB1c2VyIGVudGVycyB3aXRoaW4gdGhlIHByb21wdC4gVXNlIHRoZSBhbGVydCBtZXRob2QgJyArXG4gICAgICAgICAgICAndG8gZGlzcGxheSB0aGUgcmVzdWx0LicsIGNvbXBsZXRlOiBmYWxzZSwgIGFjdGl2ZTogZmFsc2UsIGhhbmRsZXI6IGhhbmRsZXJTdGVwNn0sXG4gICAge2lkOiA3LCB0ZXh0OiAnQ3JlYXRlIGFuIGFwcGxpY2F0aW9uIHRoYXQgc3RvcmVzIHRoZSB0ZXh0IOKAnFRoZSBxdWljayBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBkb2figJ0gJyArXG4gICAgICAgICAgICAnd2l0aGluIGEgdmFyaWFibGUuIFRoZW4sIHByb21wdCB0aGUgdXNlciBmb3IgYSB3b3JkLiBOZXh0LCBzZWFyY2ggZm9yIHRoZSB3b3JkIHdpdGhpbiB0aGUgc3RyaW5nICcgK1xuICAgICAgICAgICAgJ3RoYXQgdGhlIHVzZXIgZW50ZXJzIGludG8gdGhlIHByb21wdC4gVXNlIHRoZSAnICtcbiAgICAgICAgICAgICdhbGVydCBtZXRob2QgdG8gZGlzcGxheSB0aGUgcmVzdWx0LicsY29tcGxldGU6IGZhbHNlLCAgIGFjdGl2ZTogZmFsc2UsIGhhbmRsZXI6IGhhbmRsZXJTdGVwN30sXG4gICAge2lkOiA4LCB0ZXh0OiAnQ3JlYXRlIGFuIGFwcGxpY2F0aW9uIHRoYXQgc3RvcmVzIHRoZSB0ZXh0IOKAnFRoZSBxdWljayBicm93biBmb3gganVtcHMgb3ZlciB0aGUgbGF6eSBkb2figJ0gJyArXG4gICAgICAgICAgICAnd2l0aGluIGEgdmFyaWFibGUgY2FsbGVkIG9sZF9zdHJpbmcuIFRoZW4sIHVzZSBzbGljZSgpLCBzdWJzdHIoKSwgb3Igc3Vic3RyaW5nKCkgdG8gZXh0cmFjdCB0aGUgJyArXG4gICAgICAgICAgICAnd29yZHMg4oCcdGhlIGxhenkgZG9n4oCdIGZyb20gdGhlIG9sZF9zdHJpbmcgdmFyaWFibGUgYW5kIHN0b3JlIHRoYXQgcmVzdWx0IGluIGEgc2Vjb25kIHZhcmlhYmxlJyArXG4gICAgICAgICAgICAnIGNhbGxlZCBuZXdfc3RyaW5nLiBVc2UgdGhlIGFsZXJ0IG1ldGhvZCB0byBkaXNwbGF5JyArXG4gICAgICAgICAgICAnIHRoZSB1cHBlcmNhc2UgcmVzdWx0IG9mIG5ld19zdHJpbmcuJywgY29tcGxldGU6IGZhbHNlLCAgYWN0aXZlOiBmYWxzZSwgaGFuZGxlcjogaGFuZGxlclN0ZXA4fSxcbiAgICB7aWQ6IDksIHRleHQ6ICdDcmVhdGUgYW4gYXBwbGljYXRpb24gdGhhdCBzdG9yZXMgdGhlIHRleHQg4oCcICAgICAgICAgICAgJyArXG4gICAgICAgICAgICAnVEhFIFFVSUNLIEJST1dOIEZPWCBKVU1QUyBPVkVSIFRIRSBMQVpZIERPRyAgICAgICAgICDigJ0gJyArXG4gICAgICAgICAgICAnd2l0aGluIGEgdmFyaWFibGUuIE1ha2Ugc3VyZSB0byBhZGQgc3BhY2UgYmVmb3JlIGFuZCBhZnRlciB0aGUgdGV4dCBzbyB0aGF0IGFwcGVhcnMgdmVyeSBzaW1pbGFyJyArXG4gICAgICAgICAgICAnIHRvIHRoZSB0ZXh0IGhlcmUuIFVzZSB0aGUgYWxlcnQgbWV0aG9kIHRvIGRpc3BsYXkgdGhlIGxvd2VyY2FzZSByZXN1bHQgb2YgdGhlIHZhcmlhYmxlIG9uY2UgdGhlJyArXG4gICAgICAgICAgICAnIHNwYWNlIGhhcyBiZWVuIHRyaW1tZWQgb2ZmLicsIGNvbXBsZXRlOiBmYWxzZSwgIGFjdGl2ZTogZmFsc2UsIGhhbmRsZXI6IGhhbmRsZXJTdGVwOX0sXG4gICAge2lkOiAxMCwgdGV4dDogJ0NyZWF0ZSBhbiBhcHBsaWNhdGlvbiB0aGF0IHN0b3JlcyB0aGUgdGV4dCDigJx0aGUgcXVpY2sgYnJvd24gZm94IGp1bXBzIG92ZXIgdGhlIGxhenkgZG9n4oCdJyArXG4gICAgICAgICAgICAnIHdpdGhpbiBhIHZhcmlhYmxlLiBUaGUgdXNlciBjbGVhcmx5IGZvcmdvdCB0byBjYXBpdGFsaXplIHRoZSBmaXJzdCBsZXR0ZXIgaW4gdGhlIHNlbnRlbmNlLiAnICtcbiAgICAgICAgICAgICdQcm9ncmFtbWF0aWNhbGx5IGNhcGl0YWxpemUgdGhlIGZpcnN0IGxldHRlciBpbiB0aGUgc2VudGVuY2UnICtcbiAgICAgICAgICAgICcgYW5kIGRpc3BsYXkgdGhlIHJlc3VsdCBpbiBhbiBhbGVydC4nLCBjb21wbGV0ZTogZmFsc2UsICBhY3RpdmU6IGZhbHNlLCBoYW5kbGVyOiBoYW5kbGVyU3RlcDEwfSxcbl1cblxuXG5cbiIsImV4cG9ydCBjbGFzcyBUYXNrIHtcbiAgICBsaXN0IDogIEFycmF5PHtpZDogbnVtYmVyLCB0ZXh0OiBzdHJpbmcsIGNvbXBsZXRlOiBmYWxzZSwgYWN0aXZlOiBib29sZWFuLCBoYW5kbGVyOiAoYW55KSA9PiB2b2lkfT5cbiAgICBjb25zdHJ1Y3Rvcih0YXNrTGlzdCkge1xuICAgICAgICB0aGlzLmxpc3QgID0gdGFza0xpc3RcbiAgICB9XG5cbn0iLCJpbXBvcnQge1Rhc2sgYXMgVGFza3N9IGZyb20gXCIuL1Rhc2tcIjtcbmltcG9ydCB7IExpc3QgfSBmcm9tIFwiLi9TdHJpbmdcIjtcbmltcG9ydCB7IExpc3QgYXMgTWF0aExpc3R9IGZyb20gXCIuL01hdGhcIlxuXG5jbGFzcyBNb2RlbCB7XG4gICAgdG9kb3M6IGFueVxuICAgIG1hdGhUb2RvczogYW55XG4gICAgb25Ub2RvTGlzdENoYW5nZWQgOiBhbnlcbiAgICBhY3RpdmVUYXNrOiBudW1iZXIgfCBudWxsXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgICAgICB0aGlzLnRvZG9zID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9zJykgIT09IG51bGwgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpISkgOiBuZXcgVGFza3MoTGlzdCkubGlzdCAgIC8vIHNheWluZyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb3MnKSBpcyBub3QgbnVsbFxuICAgICAgICAgICAgdGhpcy5tYXRoVG9kb3MgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbWF0aFRvZG9zJykgIT09IG51bGwgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtYXRoVG9kb3MnKSEpIDogbmV3IFRhc2tzKE1hdGhMaXN0KS5saXN0ICAgLy8gc2F5aW5nIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2RvcycpIGlzIG5vdCBudWxsXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZVRhc2sgPSBudWxsXG4gICAgfVxuXG4gICAgYmluZFRvZG9MaXN0Q2hhbmdlZChjYWxsYmFjaykge1xuICAgICAgICB0aGlzLm9uVG9kb0xpc3RDaGFuZ2VkID0gY2FsbGJhY2tcbiAgICB9XG5cbiAgICBfY29tbWl0KHRvZG9zIDogYW55KSB7XG4gICAgICAgIHRoaXMub25Ub2RvTGlzdENoYW5nZWQodG9kb3MpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvcycsIEpTT04uc3RyaW5naWZ5KHRvZG9zKSlcbiAgICB9XG5cbiAgICB0b2dnbGVUb2RvKGlkKSB7XG4gICAgICAgIHRoaXMudG9kb3MgPSB0aGlzLnRvZG9zLm1hcCh0b2RvID0+XG4gICAgICAgICAgICB0b2RvLmlkID09PSBpZCA/IHsgaWQ6IHRvZG8uaWQsIHRleHQ6IHRvZG8udGV4dCwgYWN0aXZlOiB0b2RvLmFjdGl2ZSwgY29tcGxldGU6ICF0b2RvLmNvbXBsZXRlLCBoYW5kbGVyOiB0b2RvLmhhbmRsZXIgfSA6IHRvZG9cbiAgICAgICAgKVxuXG4gICAgICAgIHRoaXMuX2NvbW1pdCh0aGlzLnRvZG9zKVxuICAgIH1cblxuICAgIGRlbGV0ZVRvZG8oaWQpIHtcbiAgICAgICAgdGhpcy50b2RvcyA9IHRoaXMudG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5pZCAhPT0gaWQpXG5cbiAgICAgICAgdGhpcy5fY29tbWl0KHRoaXMudG9kb3MpXG4gICAgfVxuXG4gICAgcmVzdGFydFRvZG9zKCkge1xuICAgICAgICB0aGlzLnRvZG9zID0gIG5ldyBUYXNrcyhMaXN0KS5saXN0XG4gICAgICAgIHRoaXMuX2NvbW1pdCh0aGlzLnRvZG9zKVxuICAgIH1cblxuICAgIGV4ZWN1dGVUYXNrKHZhbHVlKSB7XG4gICAgICAgIGlmICh0aGlzLmFjdGl2ZVRhc2sgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGxldCBoYW5kbGVyID0gdGhpcy50b2Rvc1t0aGlzLmFjdGl2ZVRhc2sgLSAxXS5oYW5kbGVyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhoYW5kbGVyKVxuICAgICAgICAgICAgaGFuZGxlcih2YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNlbGVjdEFjdGl2ZVRhc2soaWQ6IG51bWJlcikge1xuICAgICAgICB0aGlzLmFjdGl2ZVRhc2sgPSBpZFxuICAgIH1cblxufVxuXG5jbGFzcyBWaWV3IHtcbiAgICBhcHA6IGFueSAvLyBhZGQgbGF0ZXIgdHlwZSBvZiBET00gZWxlbWVudFxuICAgIGlucHV0IDogYW55IC8vIGFkZCBsYXRlciB0eXBlIG9mIERPTSBlbGVtZW50XG4gICAgdG9kb0xpc3Q6IGFueSAvLyBhZGQgbGF0ZXIgdHlwZSBvZiBET00gZWxlbWVudFxuICAgIGV4ZWNCdXR0b246IGFueVxuICAgIHRpdGxlOiBhbnlcbiAgICBtZW51OiBhbnlcbiAgICBfdGVtcG9yYXJ5VG9kb1RleHQgOiBzdHJpbmdcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hcHAgPSAgdGhpcy5nZXRFbGVtZW50KCcjcm9vdCcpXG4gICAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2lucHV0JylcbiAgICAgICAgdGhpcy5pbnB1dC50eXBlID0gJ3RleHQnXG4gICAgICAgIHRoaXMuaW5wdXQucGxhY2Vob2xkZXIgPSAnRW50ZXIgaGVyZSAnXG4gICAgICAgIHRoaXMuaW5wdXQubmFtZSA9ICd0b2RvJ1xuICAgICAgICB0aGlzLmV4ZWNCdXR0b24gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpXG4gICAgICAgIHRoaXMuZXhlY0J1dHRvbi5pbm5lclRleHQgPSAnRVhFQ1VURSBUQVNLJ1xuICAgICAgICB0aGlzLnRpdGxlID0gdGhpcy5jcmVhdGVFbGVtZW50KCdoMScpXG4gICAgICAgIHRoaXMudGl0bGUudGV4dENvbnRlbnQgPSAnSlMgUHJhY3RpY2VzJ1xuICAgICAgICB0aGlzLnRvZG9MaXN0ID0gdGhpcy5jcmVhdGVFbGVtZW50KCd1bCcsICd0b2RvLWxpc3QnKVxuICAgICAgICB0aGlzLm1lbnUgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ3VsJylcbiAgICAgICAgdGhpcy5hcHAuYXBwZW5kKHRoaXMuZXhlY0J1dHRvbiwgdGhpcy50aXRsZSwgdGhpcy5tZW51LCB0aGlzLnRvZG9MaXN0KVxuICAgICAgICB0aGlzLl90ZW1wb3JhcnlUb2RvVGV4dCA9ICcnXG4gICAgICAgIHRoaXMuX2luaXRMb2NhbExpc3RlbmVycygpXG4gICAgfVxuICAgIGRpc3BsYXlUb2Rvcyh0b2Rvcykge1xuICAgICAgICAvLyBEZWxldGUgYWxsIG5vZGVzXG4gICAgICAgIHdoaWxlICh0aGlzLnRvZG9MaXN0LmZpcnN0Q2hpbGQpIHtcbiAgICAgICAgICAgIHRoaXMudG9kb0xpc3QucmVtb3ZlQ2hpbGQodGhpcy50b2RvTGlzdC5maXJzdENoaWxkKVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gU2hvdyBkZWZhdWx0IG1lc3NhZ2VcbiAgICAgICAgaWYgKHRvZG9zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMuY3JlYXRlRWxlbWVudCgncCcpXG4gICAgICAgICAgICBwLnRleHRDb250ZW50ID0gJ05vdGhpbmcgdG8gZG8hIFN0YXJ0IG92ZXI/J1xuICAgICAgICAgICAgY29uc3QgcmVzdGFydEJ1dHRvbiA9IHRoaXMuY3JlYXRlRWxlbWVudCgnYnV0dG9uJylcbiAgICAgICAgICAgIHJlc3RhcnRCdXR0b24uaW5uZXJUZXh0ID0gJ1JFU1RBUlQnXG4gICAgICAgICAgICB0aGlzLnRvZG9MaXN0LmFwcGVuZChwLCByZXN0YXJ0QnV0dG9uKVxuXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBDcmVhdGUgbm9kZXNcbiAgICAgICAgICAgIHRvZG9zLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGkgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2xpJylcbiAgICAgICAgICAgICAgICBsaS5pZCA9IHRvZG8uaWRcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNoZWNrYm94IDogYW55ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCdcbiAgICAgICAgICAgICAgICBjaGVja2JveC5jaGVja2VkID0gdG9kby5jb21wbGV0ZVxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZGlvIDogYW55ID0gdGhpcy5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXG4gICAgICAgICAgICAgICAgcmFkaW8udHlwZSA9ICdyYWRpbydcbiAgICAgICAgICAgICAgICByYWRpby5zZXRBdHRyaWJ1dGUoXCJuYW1lXCIsIFwidGFza1NlbGVjdG9yXCIpO1xuICAgICAgICAgICAgICAgIHJhZGlvLmNoZWNrZWQgPSB0b2RvLmFjdGl2ZVxuXG4gICAgICAgICAgICAgICAgY29uc3Qgc3BhbiA6IGFueSA9IHRoaXMuY3JlYXRlRWxlbWVudCgnc3BhbicpXG4gICAgICAgICAgICAgICAgc3Bhbi5jb250ZW50RWRpdGFibGUgPSB0cnVlXG4gICAgICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdlZGl0YWJsZScpXG5cbiAgICAgICAgICAgICAgICBpZiAodG9kby5jb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdHJpa2UgPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ3MnKVxuICAgICAgICAgICAgICAgICAgICBzdHJpa2UudGV4dENvbnRlbnQgPSB0b2RvLnRleHRcbiAgICAgICAgICAgICAgICAgICAgc3Bhbi5hcHBlbmQoc3RyaWtlKVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNwYW4udGV4dENvbnRlbnQgPSB0b2RvLnRleHRcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zdCBkZWxldGVCdXR0b24gPSB0aGlzLmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicsICdkZWxldGUnKVxuICAgICAgICAgICAgICAgIGRlbGV0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdEZWxldGUnXG4gICAgICAgICAgICAgICAgbGkuYXBwZW5kKHJhZGlvLCBjaGVja2JveCwgc3BhbiwgZGVsZXRlQnV0dG9uKVxuXG4gICAgICAgICAgICAgICAgLy8gQXBwZW5kIG5vZGVzXG4gICAgICAgICAgICAgICAgdGhpcy50b2RvTGlzdC5hcHBlbmQobGkpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIC8vIERlYnVnZ2luZ1xuICAgICAgICBjb25zb2xlLmxvZyh0b2RvcylcbiAgICB9XG5cbiAgICBnZXRFbGVtZW50KHNlbGVjdG9yOiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpXG5cbiAgICAgICAgcmV0dXJuIGVsZW1lbnRcbiAgICB9XG4gICAgY3JlYXRlRWxlbWVudCh0YWc6IHN0cmluZywgY2xhc3NOYW1lPyA6IHN0cmluZykge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWcpXG5cbiAgICAgICAgaWYgKGNsYXNzTmFtZSkgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcblxuICAgICAgICByZXR1cm4gZWxlbWVudFxuICAgIH1cblxuICAgIF9pbml0TG9jYWxMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBsZXQgdGV4dCA9IGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgICAgICAgdGhpcy5fdGVtcG9yYXJ5VG9kb1RleHQgPSB0ZXh0XG4gICAgICAgIH0pXG4gICAgICAgIC8vIHRoaXMudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBldmVudCA9PiB7XG4gICAgICAgIC8vICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2VkaXRhYmxlJykge1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuX3RlbXBvcmFyeVRvZG9UZXh0ID0gZXZlbnQudGFyZ2V0LmlubmVyVGV4dFxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KVxuICAgICAgICAvLyB0aGlzLnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAvLyAgICAgY29uc3Qge3RhcmdldH0gPSBldmVudFxuICAgICAgICAvLyAgICAgaWYgKHRhcmdldC5tYXRjaGVzKCdidXR0b24nKSkge1xuICAgICAgICAvLyAgLy8gdGhpcy5kaXNwbGF5VG9kb3MoKVxuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9KVxuXG4gICAgfVxuXG4gICAgYmluZFNlbGVjdEFjdGl2ZVRhc2soaGFuZGxlcikge1xuICAgICAgICB0aGlzLnRvZG9MaXN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQudHlwZSA9PT0gJ3JhZGlvJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gcGFyc2VJbnQoZXZlbnQudGFyZ2V0LnBhcmVudEVsZW1lbnQuaWQpXG4gICAgICAgICAgICAgICAgaGFuZGxlcihpZClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBiaW5kVG9nZ2xlVG9kbyhoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldC50eXBlID09PSAnY2hlY2tib3gnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBwYXJzZUludChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5pZClcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGlkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGJpbmRSZXN0YXJ0VG9kbyhoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0Lm1hdGNoZXMoJ2J1dHRvbicpICYmIGV2ZW50LnRhcmdldC5pbm5lclRleHQgPT0gJ1JFU1RBUlQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ1Jlc3RhcnRUb2RvJylcbiAgICAgICAgICAgICAgICBoYW5kbGVyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBiaW5kRGVsZXRlVG9kbyhoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTmFtZSA9PT0gJ2RlbGV0ZScpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmlkKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdEZWxldGVUb2RvJylcbiAgICAgICAgICAgICAgICBoYW5kbGVyKGlkKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIGJpbmRFeGVjdXRlVGFzayhoYW5kbGVyKSB7XG4gICAgICAgIHRoaXMuZXhlY0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgICAgICAgICAgLy8gICAgIGlmICh0aGlzLl90ZW1wb3JhcnlUb2RvVGV4dCAhPT0gJycpIHtcbiAgICAgICAgICAgIC8vICAgICAgICAgaGFuZGxlcih0aGlzLl90ZW1wb3JhcnlUb2RvVGV4dClcbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY29kZSBmb3IgZW50ZXJ9XG4gICAgICAgICAgICAgICAgaGFuZGxlcigpXG5cbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBiaW5kU2VsZWN0VGFiKGhhbmRsZXIpIHtcbiAgICAgICAgdGhpcy5tZW51LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBoYW5kbGVyKClcbiAgICAgICAgfSlcbiAgICB9XG5cbn1cblxuY2xhc3MgQ29udHJvbGxlciB7XG4gICAgbW9kZWw6IE1vZGVsXG4gICAgdmlldzogVmlld1xuICAgIGNvbnN0cnVjdG9yKG1vZGVsIDogTW9kZWwsIHZpZXc6IFZpZXcpIHtcbiAgICAgICAgdGhpcy5tb2RlbCA9IG1vZGVsXG4gICAgICAgIHRoaXMudmlldyA9IHZpZXdcblxuICAgICAgICB0aGlzLm1vZGVsLmJpbmRUb2RvTGlzdENoYW5nZWQodGhpcy5vblRvZG9MaXN0Q2hhbmdlZClcbiAgICAgICAgdGhpcy52aWV3LmJpbmRUb2dnbGVUb2RvKHRoaXMuaGFuZGxlVG9nZ2xlVG9kbylcbiAgICAgICAgdGhpcy52aWV3LmJpbmREZWxldGVUb2RvKHRoaXMuaGFuZGxlRGVsZXRlVG9kbylcbiAgICAgICAgdGhpcy52aWV3LmJpbmRSZXN0YXJ0VG9kbyh0aGlzLmhhbmRsZVJlc3RhcnRUb2RvKVxuICAgICAgICB0aGlzLnZpZXcuYmluZFNlbGVjdEFjdGl2ZVRhc2sodGhpcy5oYW5kbGVBY3RpdmVUYXNrKVxuICAgICAgICB0aGlzLnZpZXcuYmluZEV4ZWN1dGVUYXNrKHRoaXMuaGFuZGxlRXhlY3V0ZVRhc2spXG5cbiAgICAgICAgdGhpcy5vblRvZG9MaXN0Q2hhbmdlZCh0aGlzLm1vZGVsLnRvZG9zKVxuXG4gICAgfVxuICAgIG9uVG9kb0xpc3RDaGFuZ2VkID0gdG9kb3MgPT4ge1xuICAgICAgICB0aGlzLnZpZXcuZGlzcGxheVRvZG9zKHRvZG9zKVxuICAgIH1cblxuICAgIGhhbmRsZVRvZ2dsZVRvZG8gPSBpZCA9PiB7XG4gICAgICAgIHRoaXMubW9kZWwudG9nZ2xlVG9kbyhpZClcbiAgICB9XG4gICAgaGFuZGxlRGVsZXRlVG9kbyA9IGlkID0+IHtcbiAgICAgICAgdGhpcy5tb2RlbC5kZWxldGVUb2RvKGlkKVxuICAgIH1cbiAgICBoYW5kbGVSZXN0YXJ0VG9kbyA9ICgpID0+IHtcbiAgICAgICAgdGhpcy5tb2RlbC5yZXN0YXJ0VG9kb3MoKVxuICAgIH1cblxuICAgIGhhbmRsZUFjdGl2ZVRhc2sgPSBpZCA9PiB7XG4gICAgICAgIHRoaXMubW9kZWwuc2VsZWN0QWN0aXZlVGFzayhpZClcbiAgICB9XG4gICAgaGFuZGxlRXhlY3V0ZVRhc2sgPSB2YWx1ZSA9PiB7XG4gICAgICAgIHRoaXMubW9kZWwuZXhlY3V0ZVRhc2sodmFsdWUpXG4gICAgfVxuXG5cbn1cblxuZXhwb3J0IGNvbnN0IGFwcCA9IG5ldyBDb250cm9sbGVyKG5ldyBNb2RlbCgpLCBuZXcgVmlldygpKSJdfQ==
