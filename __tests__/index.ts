import { wait } from "$/index"

import "jest-extended"

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
