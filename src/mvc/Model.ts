import {List as StringList} from "../tasks/String";
import {List as MathList} from "../tasks/Math";
import {List as DataList} from "../tasks/dates";
import {List as DeathbyList} from "../tasks/deathby";
import {Singleton as Task} from "../util/Task";

let appTask = Task.getInstance()
let initTask = [StringList, MathList, DataList, DeathbyList]

class Model {
    todos: any
    onTodoListChanged : any
    activeTask: number | null
    activeTab: number
    constructor() {
        appTask.addList('Strings', StringList)
        appTask.addList('Math', MathList)
        appTask.addList('Data', DataList)
        appTask.addList('Deathby', DeathbyList)

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

        this._commit(this.activeTab, this.todos)
    }

    deleteTodo(id) {
        this.todos[this.activeTab].todoList = this.todos[this.activeTab].todoList.filter(todo => todo.id !== id)
        console.log(this.todos)
        this._commit(this.activeTab, this.todos)
    }

    restartTodos() {
        console.log('start over')
        appTask.restartQuiz(this.activeTab, initTask)
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

export default Model;