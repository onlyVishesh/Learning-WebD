// the idea behind a module is that it's a file of reusable code 
// We can import section of pre-written code to use whenever
// Great for any general utility values and functions 
// Helps to make your code more reusable and maintainable
// think od modules as separate chapter of the book

import {PI, getCircumference, getArea } from "./Math_util.js"

console.log(PI)

console.log(getCircumference(10))
console.log(getArea(10))

import * as math from "./math.js"
console.log(math.sum(2,34,6,76,45,67,7))
console.log(math.max(8,2,3,4,45,67,7))
console.log(math.min(54,2,34,45,67,7))
console.log(math.count(8,2,34,45,67,7))

