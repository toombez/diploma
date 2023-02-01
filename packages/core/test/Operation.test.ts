import { Operation } from '../src/index'

describe('Operation test', () => {
    const duration = 3

    test('Create operation from object', () => {
        expect(new Operation({ duration }))
            .toBeDefined()
    })

    test('Create operation from duration number', () => {
        expect(Operation.fromDuration(duration))
            .toBeDefined()
        expect(() => Operation.fromDuration(duration))
            .not
            .toThrow(RangeError)
    })

    test('Create operation from duration less than zero', () => {
        expect(() => new Operation({ duration: -3 }))
            .toThrow(RangeError)
    })

    test('Operation duration return passed duration', () => {
        const operation = new Operation({ duration })

        expect(operation.duration)
            .toEqual(duration)
    })

    test('Checking faster operation', () => {
        const targetOperation = new Operation({ duration: 3 })
        const equalsOperation = new Operation({ duration: 3 })
        const fasterOperation = new Operation({ duration: 5 })
        const slowerOperation = new Operation({ duration: 2 })

        expect(targetOperation.isFaster(equalsOperation))
            .toEqual(false)
        expect(targetOperation.isFaster(fasterOperation))
            .toEqual(false)
        expect(targetOperation.isFaster(slowerOperation))
            .toEqual(true)
    })
})
