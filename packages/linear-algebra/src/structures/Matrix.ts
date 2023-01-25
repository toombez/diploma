export default class Matrix<T = number> {
    /**
     * Matrix values
     */
    public get values() {
        return structuredClone(this._values)
    }

    /**
     * Set matrix values
     */
    protected set values(values) {
        if (!this.isRectangle(values)) {
            throw new Error('Matrix must be rectangle form.')
        }

        this._values = structuredClone(values)
    }

    /**
     * Real matrix values
     */
    private _values!: T[][]

    constructor(values: T[][]) {
        this.values = values
    }

    /**
     * Matrix rows count
     */
    public get rowsCount() {
        return this._values.length
    }

    /**
     * Matrix columns count
     */
    public get columnsCount() {
        return this._values[0].length
    }

    /**
     * Matrix rows
     */
    public get rows() {
        return this.values
    }

    /**
     * Matrix colums
     *
     * Transposed matrix rows
     */
    public get columns() {
        return this.values[0]
            .map((_, colIndex) => this.values.map(row => row[colIndex]))
    }

    /**
     * Transposed matrix
     * @returns new transposed matrix
     */
    public transpose() {
        return new Matrix(this.columns)
    }

    /**
     * Check is matrix have rectangle form
     *
     * @param matrix target matrix
     * @returns is rectangle form matrix
     */
    private isRectangle(matrix: T[][]) {
        const rowLengths = matrix
            .map(r => r.length)
        const oneLengthRows = rowLengths.filter(l => l === matrix[0].length)

        return oneLengthRows.length === matrix.length
    }
}
