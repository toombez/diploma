import { Vector } from '../src/'

describe('Vector structure', () => {
    test('Size vector equals passed components array length', () => {
        const components = [1, 2, 3]
        const vector = new Vector(components)

        expect(vector.size)
            .toEqual(components.length)
    })

    test('Pushing component adding component', () => {
        const vector = new Vector([1, 2, 3])
        const newComponent = 8

        const previousSize = vector.size

        vector.push(newComponent)

        expect(vector.size)
            .toEqual(previousSize + 1)
        expect(vector.components[vector.size - 1])
            .toEqual(newComponent)
    })

    test('Pushing array of components', () => {
        const vector = new Vector([1, 2, 3])
        const newComponents = [5, 7 , 8]

        const previousSize = vector.size

        vector.push(...newComponents)

        expect(vector.size)
            .toEqual(previousSize + newComponents.length)
    })

    test('Vector components not equals passed components to constructor', () => {
        const rawVector = [1, 2, 3]
        const vector = new Vector(rawVector)

        expect(vector.components)
            .not
            .toBe(rawVector)
    })

    test('Vector components returns deepcopy of components', () => {
        interface Component {
            a: number
        }

        const components: Component[] = [{ a: 2 }]
        const vector = new Vector(components)

        const newComponentAValue = 653
        vector.components[0] = { a: newComponentAValue }

        expect(vector.components[0].a)
            .not
            .toEqual(newComponentAValue)
    })

    test('IsEmpty works', () => {
        const vector = new Vector([])

        expect(vector.isEmpty)
            .toEqual(true)
    })

    test('Vector of instances of class on components must return instane', () => {
        class TestingClass {}
        const vector = new Vector([new TestingClass(), new TestingClass()])

        expect(vector.components.filter(c => c instanceof TestingClass))
            .not
            .toEqual(0)
    })
})
