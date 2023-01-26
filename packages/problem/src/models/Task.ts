import { Vector } from '@diploma/linear-algebra'
import Machine from './Machine'
import Operation from "./Operation"

/**
 * Model for problem's task
 */
export default class Task {
    /**
     * Map for machines and operations
     */
    public operations = new Map<Machine, Operation>

    /**
     * Task operation durations vector
     */
    public get durationsVector() {
        return new Vector([...this.operations.values()])
    }

    /**
     * Create task from map
     *
     * @param map map of machines and operations
     * @returns task
     */
    public static fromMap(map: Map<Machine, Operation>) {
        const task = new Task()
        task.operations = map

        return task
    }

    /**
     * Create task from durations array
     *
     * @param durations durations array
     * @returns new task, created machines and operations
     */
    public static fromDurations(durations: number[]) {
        const operationsMap = new Map(durations.map(duration => {
            return [new Machine(), new Operation({ duration })]
        }))

        const task = this.fromMap(operationsMap)

        return {
            task,
            machines: operationsMap.keys(),
            operations: operationsMap.values(),
        }
    }
}
