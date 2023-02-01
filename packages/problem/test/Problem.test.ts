import { Matrix } from '@diploma/linear-algebra'
import { Operation, Problem } from '../src/index'

describe('Matrix test', () => {
    test('Creating problem from matrix of numbers', () => {
        const matrixProblem = new Matrix([
            [1, 2, 3],
            [2, 3, 4],
            [1, 2, 3]
        ])
        const problem = new Problem(matrixProblem)

        expect(problem.matrix)
            .toStrictEqual(matrixProblem)
    })

    test('Operations matrix returns matrix of operations', () => {
        const matrixProblem = new Matrix([
            [1],
            [2]
        ])
        const operationsMatrix = matrixProblem
            .map(duration => new Operation({ duration }))
        const problem = new Problem(matrixProblem)

        expect(problem.OperationsMatrix)
            .toStrictEqual(operationsMatrix)
    })

    test('Passed matrix in problem not returned by matrix getter', () => {
        const matrixProblem = new Matrix([
            [1]
        ])
        const problem = new Problem(matrixProblem)

        expect(problem.matrix).not.toBe(matrixProblem)
    })
})
