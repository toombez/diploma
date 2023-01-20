export default class Vector<T = number> {
    /**
     * Deepcopy of private values
     */
    public get values() {
        return structuredClone(this._values)
    }

    /**
     * Array values of vector
     */
    protected _values: T[];

    /**
     * Create Vector from array of values
     *
     * @param values vector values
     *
     * @example
     * // create vector with values `1`, `2`
     * const vector = new Vector([1, 2])
     */
    constructor(values: T[]) {
        this._values = structuredClone(values)
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
        const value = this._values[index]

        if (!value) {
            throw new RangeError(`Cannot value with ${index} index`)
        }

        return value
    }

    /**
     * Set value of vector
     *
     * If index bigger than vector length push it to end
     *
     * @param index index to set value
     * @param value new value
     */
    public set(index: number, value: T) {
        if (index < 0) {
            throw new RangeError(`Cannot set value with negative index(${index})`)
        }

        if (index > this.length) this.push(value)
        else this._values[index] = value
    }

    /**
     * Push value to end vector
     *
     * @param value
     */
    public push(value: T) {
        this._values.push(value)
    }

    // /**
    //  * Create Vector filled zeros
    //  *
    //  * @param count vector components count
    //  * @returns new Vector with zeros
    //  */
    // public static zeros(count: number) {
    //     return new this(new Array(count).fill(0))
    // }

    /**
     * Vector length
     */
    public get length() {
        return this.values.length
    }

    /**
     * Is empty vector
     */
    public get isEmpty() {
        return this.length === 0
    }
}
