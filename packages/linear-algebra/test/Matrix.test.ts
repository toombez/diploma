import { Matrix } from '../src'

describe('Matrix module', () => {
    test('Matrix from 2d array', () => {
        const rawMatrix = [
            [1],
            [2],
            [3],
        ]
        const matrix = new Matrix(rawMatrix)

        expect(matrix.values).toEqual(rawMatrix)
    })

    test('Matrix from not rectangle 2d array throws error', () => {
        const rawMatrix = [
            [1],
            [2, 2],
            [3, 3, 3],
        ]

        expect(() => new Matrix(rawMatrix)).toThrow(Error)
    })

    test('Transposed matrix on transponse returns first not transposed matrix', () => {
        const matrix = new Matrix([
            [1, 1, 1],
            [2, 2, 2],
            [3, 3, 3],
        ])

        const transposedMatrix = matrix.transpose()
        expect(matrix.values).toStrictEqual(transposedMatrix.transpose().values)
    })
})
