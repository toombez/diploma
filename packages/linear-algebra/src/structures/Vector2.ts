import Vector from "./Vector"

export default class Vector2<T> extends Vector<Vector<T>> {
    constructor(values: T[][]) {
        super(values.map((values1) => new Vector(values1)))
    }

    /**
     * Two dimensional array of values
     */
    public get rawValues() {
        return this.values.map(row => row.values)
    }

    /**
     * Two dimensional transposed array of values
     */
    public get transposedRawValues() {
        const { rawValues } = this

        return rawValues[0].map((_, colIndex) => {
            return rawValues.map(row => row[colIndex])
        })
    }

    /**
     * Create transposed vector
     *
     * @returns new transposed vector
     */
    public transposed() {
        return new Vector2(this.transposedRawValues)
    }

    /**
     * Transpose this vector
     *
     * @returns this vector
     */
    public transpose() {
        const transposed = this.transposed()

        this.values = transposed.values
        return this
    }
}
