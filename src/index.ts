/* global NodeJS */

export function wait(ms: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}

export function setAdvancedInterval(
    handler: () => void | Promise<void>,
    ms: number,
    fastStart = false,
    waitAsync = false
) {
    let clearing = false
    let timeout: NodeJS.Timeout

    function createTimeout() {
        return setTimeout(() => {
            // eslint-disable-next-line @typescript-eslint/no-use-before-define
            if (!clearing) run()
        }, ms)
    }

    async function run() {
        const result = handler()

        if (waitAsync && result instanceof Promise) {
            await result
            if (!clearing) timeout = createTimeout()
        } else {
            if (!clearing) timeout = createTimeout()
        }
    }

    if (fastStart) {
        run()
    } else {
        timeout = createTimeout()
    }

    function clearAdvancedInterval() {
        clearing = true
        clearTimeout(timeout)
    }

    return clearAdvancedInterval
}

export async function runMultiThreading<T>(fns: Array<() => Promise<T>>, threadCount = 1) {
    const result: Array<T> = []
    let index = 0

    async function run() {
        result[index] = await fns[index]()
        index++
        if (index < fns.length) await run()
    }

    const promises: Array<Promise<void>> = []

    for (let i = 0; i < threadCount; i++) {
        promises.push(run())
    }

    await Promise.all(promises)

    return result
}
