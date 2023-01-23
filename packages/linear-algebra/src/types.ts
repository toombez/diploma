import Vector from "./structures/Vector"

/**
 * Interface for implements all vector math operations
 */
export interface IMathVector<T> {
    /**
     * Length of vector
     * @returns hypot of vector components
     */
    get length(): number

    /**
     * Normalized vector
     * @returns normalized vector
     */
    normalize(): Vector<T>

    /**
     * Negative direction vector
     * @returns vector with negative direction
     */
    negate(): Vector<T>

    /**
     * Add vector
     * @param vector vector to add
     * @returns addition of vectors
     */
    add(vector: Vector<T>): Vector<T>

    /**
     * Substract vector
     * @param vector vector to substract
     * @returns subtraction of vectors
     */
    subtract(vector: Vector<T>): Vector<T>

    /**
     * Multiply vector by value
     * @param value value to multiply
     * @returns scaled by value vector
     */
    scaleBy(value: T): Vector<T>

    /**
     * Dot product of vectors
     * @param vector vector to multiply
     * @returns dot product of vector
     */
    dot(vector: Vector<T>): number

    /**
     * Cross product of vectors
     * @param vector vector to multiply
     * @returns cross product of vector
     */
    cross(vector: Vector<T>): Vector<T>
}
