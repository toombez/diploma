/**
 * Decorator for static interfaces
 * @returns static class interface
 */
export function staticImplements<T>() {
    return <U extends T>(constructor: U) => {constructor};
}
