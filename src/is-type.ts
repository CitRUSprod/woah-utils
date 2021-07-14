export function isUndefined(value: unknown) {
    return value === undefined
}

export function isNull(value: unknown) {
    return value === null
}

export function isNil(value: unknown) {
    return isUndefined(value) || isNull(value)
}

export function isBoolean(value: unknown) {
    return typeof value === "boolean"
}

export function isNumber(value: unknown) {
    return typeof value === "number"
}

export function isBigInt(value: unknown) {
    return typeof value === "bigint"
}

export function isString(value: unknown) {
    return typeof value === "string"
}

export function isSymbol(value: unknown) {
    return typeof value === "symbol"
}

export function isObject(value: unknown) {
    return !!value && Object.getPrototypeOf(value) === Object.prototype
}

export function isArray(value: unknown) {
    return Array.isArray(value)
}

export function isFunction(value: unknown) {
    return typeof value === "function"
}

export function isPromise(value: unknown) {
    return value instanceof Promise
}

export function isObjectLike(value: unknown) {
    return value instanceof Object
}
