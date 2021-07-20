# woah-utils

Just useful utilities.

## Installation

```sh
npm add woah-utils
```

## List of utilities

1. [setAdvancedInterval](#setadvancedinterval)
2. [wait](#wait)

## Usage

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
