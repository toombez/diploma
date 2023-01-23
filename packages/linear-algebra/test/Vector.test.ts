import { Vector } from '../src/'

describe('Vector structure', () => {
    it('Size vector', () => {
        const rawVector = [1, 2, 3]
        const vector = new Vector(rawVector)

        expect(vector.size).toBe(rawVector.length)
    })

    it('Pushing component really adding component', () => {
        const vector = new Vector([1, 2, 3])
        const newComponent = 8

        const previousSize = vector.size

        vector.push(newComponent)

        expect(vector.size).toBe(previousSize + 1)
    })

    it('Pushing components works', () => {
        const vector = new Vector([1, 2, 3])
        const newComponents = [5, 7 , 8]

        const previousSize = vector.size

        vector.push(...newComponents)

        expect(vector.size).toBe(previousSize + newComponents.length)
    })

    it('Vector components isn\'t raw vector array', () => {
        const rawVector = [1, 2, 3]
        const vector = new Vector(rawVector)

        expect(vector.components).not.toStrictEqual(rawVector)
    })

    it ('Raw vector not affect on vector components', () => {
        const rawVector = [1, 2, 3]
        const vector = new Vector(rawVector)

        rawVector.push(5)

        expect(vector.size).not.toBe(rawVector.length)
    })

    it('Vector components not affect on raw vector', () => {
        const rawVector = [1, 2, 4, 5]
        const vector = new Vector(rawVector)

        vector.push(1, 3, 5)

        expect(vector.size).not.toBe(rawVector.length)
    })

    it('Vector components returns deepcopy of components', () => {
        const rawVector: { a: number }[] = [{ a: 2 }]
        const vector = new Vector(rawVector)

        const newComponentAValue = 653
        vector.components[0] = { a: newComponentAValue }

        expect(vector.components[0].a).not.toBe(newComponentAValue)
    })

    it('IsEmpty works', () => {
        const vector = new Vector([])

        expect(vector.isEmpty).toBe(true)
    })

    // it('Get with negative index throws error', () => {
    //     const vector = new Vector([1])

    //     expect(vector.get(-45)).toThrow(`Cannot value with -45 index`)
    // })
})
