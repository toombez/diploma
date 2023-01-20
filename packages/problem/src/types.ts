export interface IRawOperation {
    duration: number
}

export interface IRawTask {
    operations: IRawOperation[]
}

export interface IRawMachine {
    tasks: IRawTask[]
}

export interface IProblem {
    machines: IRawMachine[]
}
