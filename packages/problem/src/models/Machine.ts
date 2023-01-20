import { Vector } from "@diploma/linear-algebra"
import { IRawMachine } from "../types"
import Task from "./Task"

export default class Machine {
    public get tasks() {
        return this._tasks
    }

    private _tasks: Vector<Task>

    constructor(options: IRawMachine) {
        const tasks = options.tasks.map(t => new Task(t))
        this._tasks = new Vector(tasks)
    }
}
