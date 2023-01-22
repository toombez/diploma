export default class Vector<T = number> {
    /**
     * Public components
     */
    public get components() {
        return structuredClone(this._components)
    }

    protected set components(components: T[]) {
        this._components = components
    }

    /**
     * Components of vector
     */
    private _components: T[];

    /**
     * Create Vector from array of components
     *
     * @param components vector components
     *
     * @example
     * // create vector with components `1`, `2`
     * const vector = new Vector([1, 2])
     */
    constructor(components: T[]) {
        this._components = structuredClone(components)
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
     *
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
     *
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
     *
     * @param component
     */
    public push(component: T) {
        this._components.push(component)
    }
}
