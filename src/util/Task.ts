export class Task {

    // list : Array<[{ name: string, todoList: {id: number, text: string, complete: false, active: boolean, handler: (any) => void}}]> | never
    list : any
    constructor() {
        this.list = []
    }

    addList(name: string, taskList ) {
        this.list.push({ name : name, todoList:  taskList })
    }
    restartQuiz(index, arr) {
        this.list[index].todoList = arr[index]
    }

}

export class Singleton {
    private static instance : Task
    // list :  Array<{id: number, text: string, complete: false, active: boolean, handler: (any) => void}>
    private constructor() {

    }

    static getInstance() {
        if (!Singleton.instance) {
            Singleton.instance = new Task()
        }
        return Singleton.instance
    }
}