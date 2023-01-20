import { Vector, Vector2 } from '@diploma/linear-algebra'

import { IProblem } from "../types"
import Machine from './Machine'
import Task from './Task'

export default class Problem {
    public machines: Vector<Machine>

    constructor(options: IProblem) {
        const machines = options.machines.map(m => new Machine(m))
        this.machines = new Vector(machines)
    }

    public get aMatrix() {
        return this.machines.values.map(m => {
            return m.tasks.values.map(m => m.operations.values.map(o => o.duration))
        })
    }

    public operations(task: Task) {
        return task.operations.values.map(o => o.duration)
    }
}
