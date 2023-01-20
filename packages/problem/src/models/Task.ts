import { Vector } from '@diploma/linear-algebra'
import { IRawTask } from "../types"
import Operation from "./Operation"

export default class Task {
    public get operations() {
        return this._operations
    }

    private _operations: Vector<Operation>

    constructor(options: IRawTask) {
        const operations = options.operations.map(o => new Operation(o))
        this._operations = new Vector(operations)
    }
}
