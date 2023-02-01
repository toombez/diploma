import { Matrix } from '../src'

describe('Matrix module', () => {
    test('Matrix from values will contain it values', () => {
        const values = [
            [1],
            [2],
            [3],
        ]
        const matrix = new Matrix(values)

        expect(matrix.values)
            .toStrictEqual(values)
    })

    test('Matrix from not rectangle 2d array throws error', () => {
        const rawMatrix = [
            [1],
            [2, 2],
            [3, 3, 3],
        ]

        expect(() => new Matrix(rawMatrix))
            .toThrow(Error)
    })

    test('Double transpose operation returns first matrix', () => {
        const matrix = new Matrix([
            [1, 1, 1],
            [2, 2, 2],
            [3, 3, 3],
        ])

        expect(matrix.transpose().transpose())
            .toStrictEqual(matrix)
    })
})
