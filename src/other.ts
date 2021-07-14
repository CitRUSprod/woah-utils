export function getRandom(min: number, max: number, floating?: boolean): number
export function getRandom<T>(array: Array<T>): T | undefined
export function getRandom<T>(minOrArray: number | Array<T>, max?: number, floating = false) {
    if (Array.isArray(minOrArray)) {
        const index = getRandom(0, minOrArray.length - 1)
        return minOrArray[index]
    } else {
        if (floating) {
            return Math.random() * (max! - minOrArray) + minOrArray
        } else {
            return Math.floor(Math.random() * (max! - minOrArray + 1) + minOrArray)
        }
    }
}

export function getUniq<T>(array: Array<T>) {
    return Array.from(new Set(array))
}

export function wait(ms: number): Promise<void> {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    })
}
