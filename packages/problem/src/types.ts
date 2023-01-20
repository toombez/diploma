export interface IOperation {
    duration: number
}

export interface ITask {
    operations: IOperation[]
}

export interface IMachine {
    tasks: ITask[]
}

export interface IProblem {
    machines: IMachine[]
}
