import compile = WebAssembly.compile;
// import { Tasks } from "./strings";
// import {assignmentStrings} from "./strings";

//STEP 1
const handlerStep1 = () => {
    let name : string | null = prompt('Enter you Name')
    if (name !== null) { alert(`Your name is ${name.length} long`)}
}
//STEP 2
const handlerStep2 = () => {
    let name : string | null = prompt('Enter you Name')
    let orderNumber  = parseInt(prompt('Enter number of letter you want to find')!)
    if (name !== null) {
        if (orderNumber < name.length) {
            alert(`The letter under ${orderNumber} is  ${name[orderNumber - 1]}`)}
    }
}
//STEP 3

//STEP 4

//STEP 5

//STEP 6

//STEP 7

//STEP 8

//STEP 9

//STEP 10

export const assignmentStrings = [{id: 1, text: 'Create an application that prompts the user for their name. Then, find the ' +
        'length of characters in the person’s name.  Use the alert method to ' +
        'display the result.', complete: false,  active: false, handler: handlerStep1 },
    {id: 2, text: 'Create an application that prompts the user for their name. Then, prompt the user for ' +
            'a numeric value so that they can find the letter in the string based on the number they specify.' +
            ' Use the alert method to display the result.', complete: false,  active: false, handler: handlerStep2},
    {id: 3, text: 'Create an application that prompts the user for their first name. Then, prompt the user for ' +
            'their last name using a second prompt. Use the alert method to display the text "Your name is: "' +
            ' along with the result of the first name and last name concatenated together. You will use a concatenation ' +
            'operator to concatenate the literal string with the result ' +
            'of the String object method’s result', complete: false,  active: false, handler: () => {}},
    {id: 4, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy dog” ' +
            'within a variable. Then, find and display within an alert' +
            ' the index of the word “fox”.', complete: false,  active: false, handler: () => {}},
    {id: 5, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy fox” ' +
            'within a variable. Then, find and display within an alert the index ' +
            'of the last instance of the word “fox”.', complete: false,  active: false, handler: () => {}},
    {id: 6, text: 'Create an application that stores the text “The quick brown fox jumped over the lazy dog” ' +
            'within a variable. Then, prompt the user for their full name. Then, replace the text “the lazy' +
            ' dog” in the variable with the name that the user enters within the prompt. Use the alert method ' +
            'to display the result.', complete: false,  active: false, handler: () => {}},
    {id: 7, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy dog” ' +
            'within a variable. Then, prompt the user for a word. Next, search for the word within the string ' +
            'that the user enters into the prompt. Use the ' +
            'alert method to display the result.',complete: false,   active: false, handler: () => {}},
    {id: 8, text: 'Create an application that stores the text “The quick brown fox jumps over the lazy dog” ' +
            'within a variable called old_string. Then, use slice(), substr(), or substring() to extract the ' +
            'words “the lazy dog” from the old_string variable and store that result in a second variable' +
            ' called new_string. Use the alert method to display' +
            ' the uppercase result of new_string.', complete: false,  active: false, handler: () => {}},
    {id: 9, text: 'Create an application that stores the text “            ' +
            'THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG          ” ' +
            'within a variable. Make sure to add space before and after the text so that appears very similar' +
            ' to the text here. Use the alert method to display the lowercase result of the variable once the' +
            ' space has been trimmed off.', complete: false,  active: false, handler: () => {}},
    {id: 10, text: 'Create an application that stores the text “the quick brown fox jumps over the lazy dog”' +
            ' within a variable. The user clearly forgot to capitalize the first letter in the sentence. ' +
            'Programmatically capitalize the first letter in the sentence' +
            ' and display the result in an alert.', complete: false,  active: false, handler: () => {}},
]

export class Tasks {
    list :  Array<{id: number, text: string, complete: false, active: boolean, handler: (any) => void}>
    constructor(taskList) {
        this.list  = taskList
    }

}



class Model {
    todos: any
    onTodoListChanged : any
    activeTask: number | null
    constructor() {
            this.todos = (localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')!) : new Tasks(assignmentStrings).list)   // saying localStorage.getItem('todos') is not null
            this.activeTask = null
    }

    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback
    }

    _commit(todos : any) {
        this.onTodoListChanged(todos)
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    toggleTodo(id) {
        this.todos = this.todos.map(todo =>
            todo.id === id ? { id: todo.id, text: todo.text, active: todo.active, complete: !todo.complete, handler: todo.handler } : todo
        )

        this._commit(this.todos)
    }

    deleteTodo(id) {
        this.todos = this.todos.filter(todo => todo.id !== id)

        this._commit(this.todos)
    }

    restartTodos() {
        this.todos =  new Tasks(assignmentStrings).list
        this._commit(this.todos)
    }

    executeTask(value) {
        if (this.activeTask !== null) {
            let handler = this.todos[this.activeTask - 1].handler
            console.log(handler)
            handler(value)
        }
    }

    selectActiveTask(id: number) {
        this.activeTask = id
    }

}

class View {
    app: any // add later type of DOM element
    input : any // add later type of DOM element
    todoList: any // add later type of DOM element
    execButton: any
    title: any
    _temporaryTodoText : string
    constructor() {
        this.app =  this.getElement('#root')
        this.input = this.createElement('input')
        this.input.type = 'text'
        this.input.placeholder = 'Enter here '
        this.input.name = 'todo'
        this.execButton = this.createElement('button')
        this.execButton.innerText = 'EXECUTE TASK'
        this.title = this.createElement('h1')
        this.title.textContent = 'Todos'
        this.todoList = this.createElement('ul', 'todo-list')

        this.app.append(this.execButton, this.title, this.todoList)
        this._temporaryTodoText = ''
        this._initLocalListeners()
    }
    displayTodos(todos) {
        // Delete all nodes
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild)
        }

        // Show default message
        if (todos.length === 0) {
            const p = this.createElement('p')
            p.textContent = 'Nothing to do! Start over?'
            const restartButton = this.createElement('button')
            restartButton.innerText = 'RESTART'
            this.todoList.append(p, restartButton)

        } else {
            // Create nodes
            todos.forEach(todo => {
                const li = this.createElement('li')
                li.id = todo.id

                const checkbox : any = this.createElement('input')
                checkbox.type = 'checkbox'
                checkbox.checked = todo.complete
                const radio : any = this.createElement('input')
                radio.type = 'radio'
                radio.setAttribute("name", "taskSelector");
                radio.checked = todo.active

                const span : any = this.createElement('span')
                span.contentEditable = true
                span.classList.add('editable')

                if (todo.complete) {
                    const strike = this.createElement('s')
                    strike.textContent = todo.text
                    span.append(strike)
                } else {
                    span.textContent = todo.text
                }

                const deleteButton = this.createElement('button', 'delete')
                deleteButton.textContent = 'Delete'
                li.append(radio, checkbox, span, deleteButton)

                // Append nodes
                this.todoList.append(li)
            })
        }
        // Debugging
        console.log(todos)
    }

    getElement(selector: string) {
        const element = document.querySelector(selector)

        return element
    }
    createElement(tag: string, className? : string) {
        const element = document.createElement(tag)

        if (className) element.classList.add(className)

        return element
    }

    _initLocalListeners() {
        this.input.addEventListener('input', event => {
            let text = event.target.value
            this._temporaryTodoText = text
        })
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
                const id = parseInt(event.target.parentElement.id)
                handler(id)
            }
        })
    }

    bindToggleTodo(handler) {
        this.todoList.addEventListener('change', event => {
            if (event.target.type === 'checkbox') {
                const id = parseInt(event.target.parentElement.id)
                handler(id)
            }
        })
    }

    bindRestartTodo(handler) {
        this.todoList.addEventListener('click', event => {
            if (event.target.matches('button') && event.target.innerText == 'RESTART') {
                console.log('RestartTodo')
                handler()
            }
        })
    }

    bindDeleteTodo(handler) {
        this.todoList.addEventListener('click', event => {
            if (event.target.className === 'delete') {
                const id = parseInt(event.target.parentElement.id)
                console.log('DeleteTodo')
                handler(id)
            }
        })
    }

    bindExecuteTask(handler) {
        this.execButton.addEventListener('click', (event) => {
            // if (event.key === 'Enter') {
            //     if (this._temporaryTodoText !== '') {
            //         handler(this._temporaryTodoText)
            //     }
                // code for enter}
                handler()

        })
    }

}

class Controller {
    model: Model
    view: View
    constructor(model : Model, view: View) {
        this.model = model
        this.view = view

        this.model.bindTodoListChanged(this.onTodoListChanged)
        this.view.bindToggleTodo(this.handleToggleTodo)
        this.view.bindDeleteTodo(this.handleDeleteTodo)
        this.view.bindRestartTodo(this.handleRestartTodo)
        this.view.bindSelectActiveTask(this.handleActiveTask)
        this.view.bindExecuteTask(this.handleExecuteTask)

        this.onTodoListChanged(this.model.todos)

    }
    onTodoListChanged = todos => {
        this.view.displayTodos(todos)
    }

    handleToggleTodo = id => {
        this.model.toggleTodo(id)
    }
    handleDeleteTodo = id => {
        this.model.deleteTodo(id)
    }
    handleRestartTodo = () => {
        this.model.restartTodos()
    }

    handleActiveTask = id => {
        this.model.selectActiveTask(id)
    }
    handleExecuteTask = value => {
        this.model.executeTask(value)
    }


}

const app = new Controller(new Model(), new View())