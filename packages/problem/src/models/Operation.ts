import { IOperation } from "../types"

interface IOperationOptions extends IOperation {}

export default class Operation implements IOperation {
    public get duration() {
        return this._duration
    }

    private _duration: IOperation['duration']

    constructor(options: IOperationOptions) {
        this._duration = options.duration
    }
}
