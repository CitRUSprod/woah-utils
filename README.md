# woah-utils

Just useful utilities.

## Installation

```sh
npm add woah-utils
```

## List of utilities

1. [runMultiThreading](#runmultithreading)
2. [setAdvancedInterval](#setadvancedinterval)
3. [wait](#wait)
4. [wrapPromise](#wrappromise)

## Usage

### runMultiThreading

```javascript
import * as woah from "woah-utils"

// run multi threading the specified number of threads

async function fn() {
    // code
    const result = await woah.runMultiThreading(
        [
            async () => {
                await woah.wait(500)
                return 3
            },
            async () => {
                await woah.wait(1000)
                return 2
            },
            async () => {
                await woah.wait(2000)
                return 8
            }
        ],
        2
    )
    console.log(result) // => [3, 2, 8]
    // code
}
```

### setAdvancedInterval

```javascript
import * as woah from "woah-utils"

// set interval

const clearAdvancedInterval = woah.setAdvancedInterval(() => {
    console.log("Hello world")
}, 1000)

// clear interval

clearAdvancedInterval()

// set interval with fast start (start right after call)

const clearAdvancedInterval = woah.setAdvancedInterval(
    () => {
        console.log("Hello world")
    },
    1000,
    true
)

// set interval with fast start & wait for async function before starting the next timeout

const clearAdvancedInterval = woah.setAdvancedInterval(
    async () => {
        await woah.wait(2000)
        console.log("Hello world")
    },
    1000,
    true,
    true
)
```

### wait

```javascript
import * as woah from "woah-utils"

// wait indicated time

async function fn() {
    // code
    await woah.wait(5000) // wait 5 seconds
    // code
}
```

### wrapPromise

```javascript
import * as woah from "woah-utils"

async function getOne(error = false) {
    await woah.wait(500)
    if (error) throw new Error("Just error")
    return 1
}

// wrap promise to avoid try-catch hell

async function fn() {
    const [data, err] = await woah.wrapPromise(getOne())
    console.log(data) // => 1
    console.log(err) // => null

    const [data, err] = await woah.wrapPromise(getOne(true))
    console.log(data) // => null
    console.log(err) // => Error
}
```
