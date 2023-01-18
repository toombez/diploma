import { IProblem } from "../types"

interface IProblemOptions extends IProblem {}

export default class Problem implements IProblem {
    public get machines() {
        return this._machines
    }

    private _machines: IProblem['machines']

    constructor(options: IProblemOptions) {
        this._machines = options.machines
    }
}
