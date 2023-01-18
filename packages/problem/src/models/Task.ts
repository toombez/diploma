import { ITask } from "../types"

interface ITaskOptions extends ITask {}

export default class Task implements ITask {
    public get operations() {
        return this._operations
    }

    private _operations: ITask['operations']

    constructor(options: ITaskOptions) {
        this._operations = options.operations
    }
}
