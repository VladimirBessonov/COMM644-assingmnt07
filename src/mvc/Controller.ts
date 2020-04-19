import Model from "./Model";
import View from "./View";

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

export default Controller