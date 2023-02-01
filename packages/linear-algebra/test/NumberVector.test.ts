import { NumberVector } from '../src'

describe('NumberVector structure', () => {
    test('Vector length equals hypothesis of components', () => {
        const components = [3, 4, 5]
        const vector = new NumberVector(components)

        const length = Math.hypot(...components)

        expect(vector.length)
            .toEqual(length)
    })

    test('Negate vector method returns negative direction vector', () => {
        const vector = new NumberVector([1, 2, 3])
        const negativeVector = vector.negate()

        const negativeComponents = vector.components.map(c => c * (-1))

        expect(negativeVector.components)
            .toEqual(negativeComponents)
    })

    test('Sum of normalized vector components equals 1', () => {
        const vector = new NumberVector([1, 2])
        const normalizedVector = vector.normalize()

        expect(normalizedVector.length)
            .toEqual(1)
    })
})
