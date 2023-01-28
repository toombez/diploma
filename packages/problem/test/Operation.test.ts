import { Operation } from '../src/index'

describe('Operation test', () => {
    const duration = 3

    test('Create operation from object', () => {
        expect(new Operation({ duration })).not.toBeUndefined()
    })

    test('Create operation from duration number', () => {
        expect(Operation.fromDuration(duration)).not.toBeUndefined()
    })

    test('Operation duration return passed duration', () => {
        const operation = new Operation({ duration })

        expect(operation.duration).toBe(duration)
    })
})
