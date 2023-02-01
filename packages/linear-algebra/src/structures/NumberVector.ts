import { IMathVector } from "../types"
import Vector from "./Vector"

export default class NumberVector extends Vector<number> implements IMathVector<number> {
    public get length(): number {
        return Math.hypot(...this.components)
    }

    public normalize(): NumberVector {
        const { length } = this

        return this.scaleBy(1 / length)
    }

    public negate(): NumberVector {
        return this.scaleBy(-1)
    }

    // Math operations

    public add(vector: NumberVector): NumberVector {
        return new NumberVector(this.components.map((c, i) => c + vector.components[i]))
    }

    public subtract(vector: NumberVector): NumberVector {
        const negativeVector = vector.negate()

        return this.add(negativeVector)
    }

    public scaleBy(value: number): NumberVector {
        return new NumberVector(this.components.map(c => c * value))
    }

    public dot(vector: NumberVector): number {
        return vector.components
            .reduce((dot, c, i) => dot + c * this.components[i], 0)
    }

    public cross(vector: NumberVector): NumberVector {
        const { components } = vector

        return new NumberVector([
            this.components[1] * components[2] - this.components[2] * components[1],
            this.components[2] * components[0] - this.components[0] * components[2],
            this.components[0] * components[1] - this.components[1] * components[0],
        ])
    }
}
