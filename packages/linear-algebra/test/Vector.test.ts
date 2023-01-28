import { Vector } from '../src/'

describe('Vector structure', () => {
    test('Size vector', () => {
        const rawVector = [1, 2, 3]
        const vector = new Vector(rawVector)

        expect(vector.size).toBe(rawVector.length)
    })

    test('Pushing component really adding component', () => {
        const vector = new Vector([1, 2, 3])
        const newComponent = 8

        const previousSize = vector.size

        vector.push(newComponent)

        expect(vector.size).toBe(previousSize + 1)
    })

    test('Pushing components works', () => {
        const vector = new Vector([1, 2, 3])
        const newComponents = [5, 7 , 8]

        const previousSize = vector.size

        vector.push(...newComponents)

        expect(vector.size).toBe(previousSize + newComponents.length)
    })

    test('Vector components isn\'t raw vector array', () => {
        const rawVector = [1, 2, 3]
        const vector = new Vector(rawVector)

        expect(vector.components).not.toStrictEqual(rawVector)
    })

    test ('Raw vector not affect on vector components', () => {
        const rawVector = [1, 2, 3]
        const vector = new Vector(rawVector)

        rawVector.push(5)

        expect(vector.size).not.toBe(rawVector.length)
    })

    test('Vector components not affect on raw vector', () => {
        const rawVector = [1, 2, 4, 5]
        const vector = new Vector(rawVector)

        vector.push(1, 3, 5)

        expect(vector.size).not.toBe(rawVector.length)
    })

    test('Vector components returns deepcopy of components', () => {
        const rawVector: { a: number }[] = [{ a: 2 }]
        const vector = new Vector(rawVector)

        const newComponentAValue = 653
        vector.components[0] = { a: newComponentAValue }

        expect(vector.components[0].a).not.toBe(newComponentAValue)
    })

    test('IsEmpty works', () => {
        const vector = new Vector([])

        expect(vector.isEmpty).toBe(true)
    })

    // test('Get wtesth negative index throws error', () => {
    //     const vector = new Vector([1])

    //     expect(vector.get(-45)).toThrow(`Cannot value wtesth -45 index`)
    // })
})
