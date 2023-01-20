import { IRawOperation } from "../types"

export default class Operation {
    public get duration() {
        return this._duration
    }

    private _duration: number

    constructor(options: IRawOperation) {
        this._duration = options.duration
    }
}
