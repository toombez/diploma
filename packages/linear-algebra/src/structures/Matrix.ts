import { cloneDeep } from "lodash"

type MatrixMapCB<T, K> = (
    value: T,
    rowIndex: number,
    columnIndex: number,
    matrix: Matrix<T>
) => K

export default class Matrix<T = number> {
    /**
     * Matrix values
     */
    public get values() {
        return cloneDeep(this._values)
    }

    /**
     * Set matrix values
     */
    private set values(values) {
        if (!this.isRectangle(values)) {
            throw new Error('Matrix must be rectangle form.')
        }

        this._values = cloneDeep(values)
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
        return this._values
    }

    /**
     * Matrix colums
     *
     * Transposed matrix rows
     */
    public get columns() {
        return this._values[0]
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

    /**
     * Array map like method
     *
     * @param callbackFn callback to run for every value
     * @returns new matrix
     */
    public map<K>(callbackFn: MatrixMapCB<T, K>) {
        const newValues = this.values.map((row, rowIndex) => {
            return row.map((value, columnIndex) => {
                return callbackFn(value, rowIndex, columnIndex, this)
            })
        })

        return new Matrix(newValues)
    }
}
