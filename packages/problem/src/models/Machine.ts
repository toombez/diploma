import { IMachine } from "../types"

interface IMachineOptions extends IMachine {}

export default class Machine implements IMachine {
    public get tasks() {
        return this._tasks
    }

    private _tasks: IMachine['tasks']

    constructor(options: IMachineOptions) {
        this._tasks = options.tasks
    }
}
