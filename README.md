# @Simple-Curry-Converter
This is a simple javascript class that creating a 
closure that holds onto the value of the original function and its arguments.

#Installation
```sh
npm i simple-curry-converter
```

#Usage
```sh
import CurryConvert from 'simple-curry-converter'

....
function sum(a, b, c) {
    return a + b + c
}

let amount = CurryConvert.me(sum)

console.log(amount(1)(2)(5));
// or
console.log(amount(1, 2, 5));
....
```
