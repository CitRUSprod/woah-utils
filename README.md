# woah-utils

Just useful utilities.

## Installation

```sh
npm add woah-utils
```

## Usage

### getRandom

```typescript
import { getRandom } from "woah-utils"

const integer = getRandom(1, 10) // get any integer from 1 to 10
console.log(integer) // => 7

const float = getRandom(1, 10, true) // get any float from 1 to 10
console.log(float) // => 5.6499374036869385

const element = getRandom(["a", "b", "c", "d"]) // get any element from an array
console.log(element) // => "b"
```

### wait

```typescript
import { wait } from "woah-utils"

async function fn() {
    // code
    await wait(5000) // wait 5 seconds
    // code
}
```

### getUniq

```typescript
import { getUniq } from "woah-utils"

const uniqElements = getUniq([2, 4, 3, 9, 3, 1, 1, 2, 2, 6]) // get an array of unique elements
console.log(uniqElements) // => [2, 4, 3, 9, 1, 6]
```
