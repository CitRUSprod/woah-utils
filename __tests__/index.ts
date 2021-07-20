import { setAdvancedInterval, wait } from "$/index"

import "jest-extended"

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
        expect(handler.mock.calls.length).toBe(5)
    })

    test("should be called 6 times", async () => {
        clearAdvancedInterval = setAdvancedInterval(handler, 200, true)
        await wait(1100)
        expect(handler.mock.calls.length).toBe(6)
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
