import Vector from "./structures/Vector"

/**
 * Interface for implements all vector math operations
 */
export interface IMathVector<T> {
    /**
     * Length of vector
     */
    get length(): number

    /**
     * Normalized vector
     */
    get normalize(): Vector<T>

    /**
     * Negative direction vector
     */
    get negate(): Vector<T>

    /**
     * Add vector
     *
     * @param vector vector to add
     */
    add(vector: Vector<T>): Vector<T>

    /**
     * Substract vector
     *
     * @param vector vector to substract
     */
    subtract(vector: Vector<T>): Vector<T>

    /**
     * Multiply vector by value
     *
     * @param value value to multiply
     */
    scaleBy(value: T): Vector<T>

    /**
     * Dot product of vectors
     *
     * @param vector vector to multiply
     */
    dot(vector: Vector<T>): number

    /**
     * Cross product of vectors
     *
     * @param vector vector to multiply
     */
    cross(vector: Vector<T>): Vector<T>
}

/**
 * Interface for implement static methods for math vector class
 */
export  interface IStaticMathVector<T> {
    /**
     * Add vectors
     *
     * @param vector1 first vector to add
     * @param vector2 second vector to add
     * @returns addition result of vectors
     */
    add(vector1: Vector<T>, vector2: Vector<T>): Vector<T>

    /**
     * Substract vectors
     *
     * @param vector1 first vector to substract
     * @param vector2 second vector to substract
     * @returns substraction result of vectors
     */
    substract(vector1: Vector<T>, vector2: Vector<T>): Vector<T>

    /**
     * Multiply vector by value
     *
     * @param vector vector to multiply
     * @param value value to multiply
     * @returns multiply result
     */
    multiply(vector: Vector<T>, value: T): Vector<T>

    /**
     * Dot product of vectors
     *
     * @param vector1 vector to multiply
     * @param vector2 vector to multiply
     * @returns dot product of vectors
     */
    dot(vector1: Vector<T>, vector2: Vector<T>): number


    /**
     * Magnitude of vector
     *
     * @param vector target vector
     */
    magnitude(vector: Vector<T>): number

    // /**
    //  * Cross product of vectors
    //  *
    //  * @param vector1 vector to multiply
    //  * @param vector2 vector to multiply
    //  * @returns dot product of vectors
    //  */
    // cross(vector1: Vector<T>, vector2: Vector<T>): Vector<T>

    // /**
    //  * Normalize vector
    //  *
    //  * @param vector vector to normalize
    //  * @returns normalized vector
    //  */
    // normalize(vector: Vector<T>): Vector<T>
}
