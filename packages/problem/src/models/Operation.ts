/**
 * Interface for operation constructor
 */
export interface IOperation {
    duration: number
}

/**
 * Model for problem's operation
 */
export default class Operation {
    /**
     * Operation duration
     */
    public readonly duration: number

    /**
     * Create operation
     * @param operation options for operation
     */
    constructor(operation: IOperation) {
        this.duration = operation.duration
    }

    /**
     * Create operaton only from duration
     *
     * @param duration
     * @returns operation
     */
    static fromDuration(duration: number) {
        return new this({ duration })
    }
}
