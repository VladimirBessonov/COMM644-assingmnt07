export class Tasks {
    list :  Array<{id: number, text: string, complete: false, active: boolean, handler: (any) => void}>
    constructor(taskList) {
        this.list  = taskList
    }

}