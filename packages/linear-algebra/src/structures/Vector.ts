export default class Vector<T = number> {
    /**
     * Create Vector from array of values
     *
     * @param values vector values
     *
     * @example
     * // create vector with values `1`, `2`
     * const vector = new Vector([1, 2])
     */
    constructor(public values: T[]) {}

    /**
     * Get vector value
     *
     * @param index index vector component
     * @returns vector value
     */
    public get(index: number) {
        return this.values[index]
    }

    public set(value: T, index: number) {
        this.values[index] = value
    }

    /**
     * Create Vector from values
     *
     * @param values values
     * @returns new Vector
     */
    static fromValues<T = number>(...values: T[]) {
        return new this(values)
    }

    /**
     * Create Vector filled zeros
     *
     * @param count vector components count
     * @returns new Vector with zeros
     */
    public static zeros(count: number) {
        return new this(new Array(count).fill(0))
    }
}
