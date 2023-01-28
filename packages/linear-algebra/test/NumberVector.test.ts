import { NumberVector } from '../src'

describe('NumberVector structure', () => {
    test('Vector length', () => {
        const rawVector = [3, 4, 5]
        const vector = new NumberVector([3, 4, 5])

        const length = Math.sqrt(
            Math.pow(rawVector[0], 2)
            + Math.pow(rawVector[1], 2)
            + Math.pow(rawVector[2], 2)
        )

        expect(vector.length).toBe(length)
    })

    test('Negate vector method returns negative direction vector', () => {
        const vector = new NumberVector([1, 2, 3])
        const negativeVector = vector.negate()

        const negativeComponents = vector.components.map(c => c * (-1))

        expect(negativeVector.components).toStrictEqual(negativeComponents)
    })

    test('Sum of normalized vector components equals 1', () => {
        const vector = new NumberVector([1, 2])
        const normalizedVector = vector.normalize()

        expect(normalizedVector.length).toBe(1)
    })
})
