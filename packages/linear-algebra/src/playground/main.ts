import { Vector2 } from '../index'

const v = new Vector2([[1, 2]])
const tv = v.transposed()

console.log(v.rawValues)
console.log(tv.rawValues)
console.log(v.transpose().rawValues)

