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
                handler()
            }
        })
    }

    bindDeleteTodo(handler) {
        this.todoList.addEventListener('click', event => {
            if (event.target.className === 'delete') {
                const id = parseInt(event.target.parentElement.id)
                handler(id)
            }
        })
    }

    bindExecuteTask(handler) {
        this.execButton.addEventListener('click', (event) => {
            handler()
        })
    }

}

export default View;