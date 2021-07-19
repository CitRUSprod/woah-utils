# woah-utils

Just useful utilities.

## Installation

```sh
npm add woah-utils
```

## List of utilities

1. [wait](#wait)

## Usage

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
