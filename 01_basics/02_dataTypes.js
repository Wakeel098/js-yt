"use strict";  //  treat all js code as newer version of js as per ECMA script 6

// alert("hello")  //we are using nodejs , not browser
//the official documentation of js is at   ----->.>>>https://tc39.es/ecma262/

console.log(Number.MIN_VALUE);  // Output: 5e-324
console.log(Number.MAX_VALUE);  // Output: 1.798e+308


let no=123   //------->number
let x=null    // ----->typeof=====>object
let boolean=false
let str="string"
let smbl=Symbol([ "is smbl"])
console.log(typeof smbl,smbl)
let undef;      // ----->typeof=====>undefined

console.table([typeof no,typeof x,typeof str, typeof smbl, typeof undef, typeof null, typeof undefined])
 
