# OTFS
A light weight npm library for converting objects in to properly indented ES6 template strings.

## Install
```cmd
npm install otfs
```
## Usage

otfs has a single method called create which accepts an object and returns a template string.

```js
const otfs = require("otfs");

let something = {
    a: "something",
    b: "something else",
    c: {
        d: "this also works",
        e: ["and this", "and this", "and this"]
    }
}

otfs.create(something)
```