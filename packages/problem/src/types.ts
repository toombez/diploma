export type Vector<T> = Array<T>
export type Vector2D<T> = Vector<Vector<T>>
export type Vector3D<T> = Vector2D<Vector<T>>

export interface IOperation {
    duration: number
}

export interface ITask {
    operations: Vector<IOperation>
}

export interface IMachine {
    tasks: Vector<ITask>
}

export interface IProblem {
    machines: Vector<IMachine>
}
