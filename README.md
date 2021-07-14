# woah-utils

Just useful utilities.

## Installation

```sh
npm add woah-utils
```

## List of utilities

1. [getRandom](#getrandom)
2. [getUniq](#getuniq)
3. [isArray](#isarray)
4. [isBigInt](#isbigint)
5. [isBoolean](#isboolean)
6. [isFunction](#isfunction)
7. [isNil](#isnil)
8. [isNull](#isnull)
9. [isNumber](#isnumber)
10. [isObject](#isobject)
11. [isObjectLike](#isobjectlike)
12. [isPromise](#ispromise)
13. [isString](#isstring)
14. [isSymbol](#issymbol)
15. [isUndefined](#isundefined)
16. [wait](#wait)

## Usage

### getRandom

```javascript
import { getRandom } from "woah-utils"

// get any integer from 1 to 10

getRandom(1, 10) // => 7

// get any float from 1 to 10

getRandom(1, 10, true) // => 5.6499374036869385

// get any element from an array

getRandom(["a", "b", "c", "d"]) // => "b"
```

### getUniq

```javascript
import { getUniq } from "woah-utils"

// get an array of unique elements

getUniq([2, 4, 3, 9, 3, 1, 1, 2, 2, 6]) // => [2, 4, 3, 9, 1, 6]
```

### isArray

```javascript
import { isArray } from "woah-utils"

// check if a value is an array

isArray([]) // => true

isArray("[]") // => false
isArray({}) // => false
isArray(null) // => false
isArray(undefined) // => false
```

### isBigInt

```javascript
import { isBigInt } from "woah-utils"

// check if a value is a bigint

isBigInt(-1n) // => true
isBigInt(0n) // => true
isBigInt(1n) // => true

isBigInt("123n") // => false
isBigInt(123) // => false
isBigInt(null) // => false
isBigInt(undefined) // => false
```

### isBoolean

```javascript
import { isBoolean } from "woah-utils"

// check if a value is a boolean

isBoolean(false) // => true
isBoolean(true) // => true

isBoolean("") // => false
isBoolean(1) // => false
isBoolean(null) // => false
isBoolean(undefined) // => false
```

### isFunction

```javascript
import { isFunction } from "woah-utils"

// check if a value is a function

isFunction(() => {}) // => true

isFunction("() => {}") // => false
isFunction(1) // => false
isFunction(null) // => false
isFunction(undefined) // => false
```

### isNil

```javascript
import { isNil } from "woah-utils"

// check if a value is undefined or null

isNil(null) // => true
isNil(undefined) // => true

isNil("null") // => false
isNil(0) // => false
isNil({}) // => false
isNil([]) // => false
```

### isNull

```javascript
import { isNull } from "woah-utils"

// check if a value is null

isNull(null) // => true

isNull("null") // => false
isNull(0) // => false
isNull({}) // => false
isNull(undefined) // => false
```

### isNumber

```javascript
import { isNumber } from "woah-utils"

// check if a value is a number

isNumber(0) // => true
isNumber(1) // => true
isNumber(Infinity) // => true
isNumber(NaN) // => true

isNumber("123") // => false
isNumber(1n) // => false
isNumber(null) // => false
isNumber(undefined) // => false
```

### isObject

```javascript
import { isObject } from "woah-utils"

// check if a value is an object

isObject({}) // => true

isObject([]) // => false
isObject(new Date()) // => false
isObject(null) // => false
isObject(undefined) // => false
```

### isObjectLike

```javascript
import { isObjectLike } from "woah-utils"

// check if a value is an object-like

isObjectLike({}) // => true
isObjectLike([]) // => true
isObjectLike(() => {}) // => true
isObjectLike(new Date()) // => true

isObjectLike("{}") // => false
isObjectLike(1) // => false
isObjectLike(null) // => false
isObjectLike(undefined) // => false
```

### isPromise

```javascript
import { isPromise } from "woah-utils"

// check if a value is a promise

isPromise(Promise.resolve()) // => true

isPromise(() => {}) // => false
isPromise({}) // => false
isPromise(null) // => false
isPromise(undefined) // => false
```

### isString

```javascript
import { isString } from "woah-utils"

// check if a value is a string

isString("") // => true
isString("123") // => true
isString(`"Woah"`) // => true

isString({}) // => false
isString(1) // => false
isString(null) // => false
isString(undefined) // => false
```

### isSymbol

```javascript
import { isSymbol } from "woah-utils"

// check if a value is a symbol

isSymbol(Symbol("woah")) // => true

isSymbol("Symbol()") // => false
isSymbol(1) // => false
isSymbol(null) // => false
isSymbol(undefined) // => false
```

### isUndefined

```javascript
import { isUndefined } from "woah-utils"

// check if a value is undefined

isUndefined(undefined) // => true

isUndefined("undefined") // => false
isUndefined(0) // => false
isUndefined({}) // => false
isUndefined(null) // => false
```

### wait

```javascript
import { wait } from "woah-utils"

// wait indicated time

async function fn() {
    // code
    await wait(5000) // wait 5 seconds
    // code
}
```
