import { runMultiThreading, setAdvancedInterval, wait, wrapPromise } from "$/index"

import "jest-extended"

describe("runMultiThreading function", () => {
    const fns = [
        async () => {
            await wait(500)
            return 3
        },
        async () => {
            await wait(1000)
            return 2
        },
        async () => {
            await wait(2000)
            return 8
        },
        async () => {
            await wait(500)
            return 1
        },
        async () => {
            await wait(200)
            return 7
        },
        async () => {
            await wait(1500)
            return 0
        },
        async () => {
            await wait(800)
            return 4
        }
    ]

    test("should return array of results", async () => {
        const result = await runMultiThreading(fns, 2)

        expect(result).toStrictEqual([3, 2, 8, 1, 7, 0, 4])
    })

    test("should be faster than via Promise.all", async () => {
        const startTime = Date.now()
        await runMultiThreading(fns, 2)
        const time = Date.now() - startTime

        expect(time).toBeLessThan(5300)
    })
})

describe("setAdvancedInterval function", () => {
    let handler: jest.Mock
    let clearAdvancedInterval: () => void

    beforeEach(() => {
        handler = jest.fn()
    })

    afterEach(() => {
        clearAdvancedInterval()
    })

    test("should be function", () => {
        clearAdvancedInterval = setAdvancedInterval(handler, 200)

        expect(clearAdvancedInterval).toBeFunction()
    })

    test("should be called 5 times", async () => {
        clearAdvancedInterval = setAdvancedInterval(handler, 200)
        await wait(1100)

        expect(handler.mock.calls).toHaveLength(5)
    })

    test("should be called 6 times", async () => {
        clearAdvancedInterval = setAdvancedInterval(handler, 200, true)
        await wait(1100)

        expect(handler.mock.calls).toHaveLength(6)
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

describe("wrapPromise function", () => {
    async function fn(error = false) {
        await wait(500)

        if (error) throw new Error("Just error")

        return 1
    }

    test("should return promise", () => {
        expect(wrapPromise(fn())).toResolve()
    })

    test("should return 1 and null", async () => {
        const [data, err] = await wrapPromise(fn())

        expect(data).toBe(1)
        expect(err).toBeNull()
    })

    test("should return null and error", async () => {
        const [data, err] = await wrapPromise(fn(true))

        expect(data).toBeNull()
        expect(err).toBeInstanceOf(Error)
    })
})
