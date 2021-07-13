import { getRandom, wait, getUniq, isObject } from "$/main"

import "jest-extended"

describe("getRandom function", () => {
    const min = 1
    const max = 10

    test("should return integer", () => {
        const num = getRandom(min, max)

        expect(num).toBeNumber()
        expect(Number.isInteger(num)).toBeTrue()
    })

    test("should return integer from range", () => {
        const num = getRandom(min, max)

        expect(num).toBeGreaterThanOrEqual(min)
        expect(num).toBeLessThanOrEqual(max)
    })

    test("should return float", () => {
        const num = getRandom(min, max, true)

        expect(num).toBeNumber()
        expect(Number.isInteger(num)).toBeFalse()
    })

    test("should return float from range", () => {
        const num = getRandom(min, max, true)

        expect(num).toBeGreaterThanOrEqual(min)
        expect(num).toBeLessThanOrEqual(max)
    })

    const arr = ["a", "b", "c", "d"]

    test("should return string", () => {
        const char = getRandom(arr)

        expect(char).toBeString()
    })

    test("should return undefined", () => {
        const char = getRandom([] as Array<string>)

        expect(char).toBeUndefined()
    })

    test("should return element from array", () => {
        const char = getRandom(arr)

        expect(arr).toContain(char)
    })
})

describe("wait function", () => {
    test("should return promise", () => {
        expect(wait(1000)).toResolve()
    })

    test("should wait 1 second", async () => {
        const second = 1000
        const diff = 10
        const startTime = Date.now()
        await wait(second)
        const time = Date.now() - startTime

        expect(time).toBeGreaterThanOrEqual(second - diff)
        expect(time).toBeLessThanOrEqual(second + diff)
    })
})

describe("getUniq function", () => {
    const arr = [2, 4, 3, 9, 3, 1, 1, 2, 2, 6]

    test("should return array", () => {
        expect(getUniq(arr)).toBeArray()
    })

    test("should return array of unique elements", () => {
        const uniqElements = [2, 4, 3, 9, 1, 6]

        expect(getUniq(arr)).toEqual(uniqElements)
    })
})

describe("isObject function", () => {
    test("should return true", () => {
        expect(isObject({})).toBeTrue()
        expect(isObject([])).toBeTrue()
        expect(isObject(/1/)).toBeTrue()
        expect(isObject(() => {})).toBeTrue()
        expect(isObject(new Date())).toBeTrue()
    })

    test("should return false", () => {
        expect(isObject("")).toBeFalse()
        expect(isObject(1)).toBeFalse()
        expect(isObject(true)).toBeFalse()
        expect(isObject(null)).toBeFalse()
        expect(isObject(undefined)).toBeFalse()
        expect(isObject(Symbol("abc"))).toBeFalse()
    })
})
