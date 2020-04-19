import {Singleton as Task } from "./Task";
import { List as StringList} from "./String";
import { List as MathList} from "./Math"
// do I need a singleton here?
let appTask = Task.getInstance()
let initTask = [StringList, MathList]
class Model {
    todos: any
    onTodoListChanged : any
    activeTask: number | null
    activeTab: number
    constructor() {
            appTask.addList('Strings', StringList)
            appTask.addList('Math', MathList)
            this.todos = localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')!) : appTask.list   // saying localStorage.getItem('todos') is not null
            this.activeTask = null
            this.activeTab = 0
    }

    bindTodoListChanged(callback) {
        this.onTodoListChanged = callback
    }

    _commit(activeTab, todos : any) {
        this.onTodoListChanged(activeTab, todos)
        localStorage.setItem('todos', JSON.stringify(todos))
    }

    toggleTodo(id) {
        this.todos[this.activeTab].todoList = this.todos[this.activeTab].todoList.map(todo =>
            todo.id === id ? { id: todo.id, text: todo.text, active: todo.active, complete: !todo.complete, handler: todo.handler } : todo
        )
        // this.todos = this.todos.map(todo =>
        //     todo.id === id ? { id: todo.id, text: todo.text, active: todo.active, complete: !todo.complete, handler: todo.handler } : todo
        // )

        this._commit(this.activeTab, this.todos)
    }

    deleteTodo(id) {
        this.todos[this.activeTab].todoList = this.todos[this.activeTab].todoList.filter(todo => todo.id !== id)
        console.log(this.todos)
        this._commit(this.activeTab, this.todos)
    }

    restartTodos() {
        console.log('start over')
        console.log(this.activeTab, initTask[this.activeTab], initTask)
        appTask.restartQuiz(this.activeTab, initTask)
        console.log(appTask.list)
        this.todos =  appTask.list
        this._commit(this.activeTab, this.todos)
    }

    executeTask(value) {
        if (this.activeTask !== null) {
            let handler = this.todos[this.activeTab].todoList[this.activeTask - 1].handler
            handler(value)

        }
    }

    selectActiveTask(id: number) {
        this.activeTask = id
    }

    selectActiveTab(id: number) {
        this.activeTab = id
        this.onTodoListChanged(this.activeTab, this.todos)
    }

}

class View {
    app: any // add later type of DOM element
    input : any // add later type of DOM element
    todoList: any // add later type of DOM element
    execButton: any
    title: any
    menu: any
    _temporaryTodoText : string
    _activeTab : number | undefined
    constructor() {
        this.app =  this.getElement('#root')
        this.input = this.createElement('input')
        this.input.type = 'text'
        this.input.placeholder = 'Enter here '
        this.input.name = 'todo'
        this.execButton = this.createElement('button')
        this.execButton.innerText = 'EXECUTE TASK'
        this.title = this.createElement('h1')
        this.title.textContent = 'JS Practices'
        this.todoList = this.createElement('ul', 'todo-list')
        this.menu = this.createElement('ul')
        this.app.append(this.execButton, this.title, this.menu, this.todoList)
        this._temporaryTodoText = ''
        this._activeTab = 0
        this._initLocalListeners()
    }
    displayTodos(activeTab, todos) {
        // Delete all nodes
        // for (let item in todos) {
        //     let li = this.createElement('li')
        //     li.textContent = todos[item].name
        //     this.menu.append(li)
        // }
        while (this.menu.firstChild) {
            this.menu.removeChild(this.menu.firstChild)
        }

        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild)
        }
        this.displayTasks(activeTab, todos)
        // Debugging
        console.log(todos)
    }

    displayTasks(activeTab, todos) {
        let currentTodos = todos[activeTab].todoList

        for (let item in todos) {
            let li = this.createElement('li')
            li.textContent = todos[item].name
            this.menu.append(li)
        }
        console.log(currentTodos.length)
        if (currentTodos.length === 0) {
            const p = this.createElement('p')
            p.textContent = 'Nothing to do! Start over?'
            const restartButton = this.createElement('button')
            restartButton.innerText = 'RESTART'
            this.todoList.append(p, restartButton)

        } else {
            // Create nodes
            currentTodos.forEach(todo => {
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
    }

    bindSelectActiveTask(handler) {
        this.todoList.addEventListener('change', event => {
            if (event.target.type === 'radio') {
                const id = parseInt(event.target.parentElement.id)
                handler(id)
            }
        })
    }

    bindSelectActiveTab(handler) {
        this.menu.addEventListener('click', event => {
            event.preventDefault()
            let el = event.target
            this._activeTab = [...el.parentNode.children].indexOf(el)
            console.log(this._activeTab)
            handler(this._activeTab)
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
                handler()
        })
    }
// iterate through appTask.list name


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
        this.view.bindSelectActiveTab(this.handleActiveTab)
        this.view.bindExecuteTask(this.handleExecuteTask)

        this.onTodoListChanged(this.model.activeTab,this.model.todos)
        // this.onActiveTabChanged(this.model.activeTab,this.model.todos)
    }
    onTodoListChanged = (activeTab, todos) => {
        this.view.displayTodos(activeTab, todos)
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
    handleActiveTab = id => {
        this.model.selectActiveTab(id)
    }

    handleExecuteTask = value => {
        this.model.executeTask(value)
    }


}

export const app = new Controller(new Model(), new View())