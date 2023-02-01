import { cloneDeep } from 'lodash'

export default class Vector<T = number> {
    /**
     * Vector components
     *
     * Don't use it for modify vector
     */
    public get components() {
        return cloneDeep(this._components)
    }

    /**
     * Private vector components
     *
     * Use it if you want change components inside within class
     */
    private _components: T[];

    /**
     * Create Vector from array of components
     * @param components vector components
     */
    constructor(components: T[]) {
        this._components = cloneDeep(components)
    }

    /**
     * Vector components count
     */
    public get size() {
        return this._components.length
    }

    /**
     * Is empty vector
     */
    public get isEmpty() {
        return this.size === 0
    }

    /**
     * Get vector value
     *
     * Throws `RangeError` if cannot find `value` with `index`
     * @param index index vector component
     * @returns vector value
     */
    public get(index: number) {
        const value = this._components[index]

        if (!value) {
            throw new RangeError(`Cannot value with ${index} index`)
        }

        return value
    }

    /**
     * Set component of vector
     *
     * If `index` bigger than vector length push it to end
     * @param index index to set value
     * @param component new component
     */
    public set(index: number, component: T) {
        if (index < 0) {
            throw new RangeError(`Cannot set value with negative index(${index})`)
        }

        if (index > this.size) this.push(component)
        else this._components[index] = component
    }

    /**
     * Push component to end vector
     * @param component components to push
     */
    public push(...component: T[]) {
        this._components.push(...component)
    }
}
