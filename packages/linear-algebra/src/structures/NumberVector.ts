import { IMathVector, IStaticMathVector } from "../types"
import Vector from "./Vector"
import { staticImplements } from '../utils'

export default class NumberVector extends Vector<number> implements IMathVector<number> {
    get length(): number {
        return Math.hypot(...this.components)
    }
    get normalize(): NumberVector {
        const { length } = this

        return this.scaleBy(1 / length)
    }
    get negate(): NumberVector {
        return this.scaleBy(-1)
    }

    add(vector: NumberVector): NumberVector {
        return new NumberVector(this.components.map((c, i) => c + vector.components[i]))
    }

    subtract(vector: NumberVector): NumberVector {
        const negativeVector = vector.negate

        return this.add(negativeVector)
    }

    scaleBy(value: number): NumberVector {
        return new NumberVector(this.components.map(c => c * value))
    }

    dot(vector: NumberVector): number {
        return vector.components
            .reduce((dot, c, i) => dot + c * this.components[i], 0)
    }

    cross(vector: NumberVector): NumberVector {
        const { components } = vector

        return new NumberVector([
            this.components[1] * components[2] - this.components[2] * components[1],
            this.components[2] * components[0] - this.components[0] * components[2],
            this.components[0] * components[1] - this.components[1] * components[0],
        ])
    }
}
