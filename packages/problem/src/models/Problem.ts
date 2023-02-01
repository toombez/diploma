import { Matrix, Vector } from '@diploma/linear-algebra'
import { cloneDeep } from 'lodash'

import Operation from './Operation'

/**
 * Model for problem
 */
export default class Problem {
    /**
     * Problem matrix
     */
    public get matrix() {
        return cloneDeep(this._matrix)
    }

    /**
     * Private problem matrix
     */
    private _matrix: Matrix<number>

    /**
     * Create problem
     * @param matrix durations graph matrix
     */
    constructor(matrix: Matrix<number>) {
        this._matrix = matrix
    }

    /**
     * Matrix of operations
     */
    public get OperationsMatrix() {
        return this._matrix
            .map(duration => new Operation({ duration }))
    }
}
