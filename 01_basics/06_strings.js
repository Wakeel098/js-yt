const name="wakeel";


const age=23;


//console.log("my name is "+name+" and my age is"+age);   //an outdated syntax and should be avoided
 
//use the string interpolation method to do the same as:

console.log(`my name is ${name} and my age is ${age}`);


//another way to declare strings

const fullName=new String("wakeel ahmad kumar")
console.log(fullName);

/***********************************************************following are the string methods******************************************************************** */

/* 

 anchor
: 
ƒ anchor()
at
: 
ƒ at()
big
: 
ƒ big()
blink
: 
ƒ blink()
bold
: 
ƒ bold()
charAt
: 
ƒ charAt()
charCodeAt
: 
ƒ charCodeAt()
codePointAt
: 
ƒ codePointAt()
concat
: 
ƒ concat()
constructor
: 
ƒ String()
endsWith
: 
ƒ endsWith()
fixed
: 
ƒ fixed()
fontcolor
: 
ƒ fontcolor()
fontsize
: 
ƒ fontsize()
includes
: 
ƒ includes()
indexOf
: 
ƒ indexOf()
isWellFormed
: 
ƒ isWellFormed()
italics
: 
ƒ italics()
lastIndexOf
: 
ƒ lastIndexOf()
length
: 
0
link
: 
ƒ link()
length
: 
1
name
: 
"link"
arguments
: 
(...)
caller
: 
(...)
[[Prototype]]
: 
ƒ ()
[[Scopes]]
: 
Scopes[0]
localeCompare
: 
ƒ localeCompare()
match
: 
ƒ match()
matchAll
: 
ƒ matchAll()
normalize
: 
ƒ normalize()
padEnd
: 
ƒ padEnd()
padStart
: 
ƒ padStart()
repeat
: 
ƒ repeat()
replace
: 
ƒ replace()
replaceAll
: 
ƒ replaceAll()
search
: 
ƒ search()
slice
: 
ƒ slice()
small
: 
ƒ small()
split
: 
ƒ split()
startsWith
: 
ƒ startsWith()
strike
: 
ƒ strike()
sub
: 
ƒ sub()
substr
: 
ƒ substr()
substring
: 
ƒ substring()
sup
: 
ƒ sup()
toLocaleLowerCase
: 
ƒ toLocaleLowerCase()
toLocaleUpperCase
: 
ƒ toLocaleUpperCase()
toLowerCase
: 
ƒ toLowerCase()
toString
: 
ƒ toString()
toUpperCase
: 
ƒ toUpperCase()
toWellFormed
: 
ƒ toWellFormed()
trim
: 
ƒ trim()
trimEnd
: 
ƒ trimEnd()
trimLeft
: 
ƒ trimStart()
trimRight
: 
ƒ trimEnd()
trimStart
: 
ƒ trimStart()
valueOf
: 
ƒ valueOf()
Symbol(Symbol.iterator)
: 
ƒ [Symbol.iterator]()
[[Prototype]]
: 
Object
[[PrimitiveValue]]
: 
""
[[PrimitiveValue]]
: 
"wakeel"
﻿

*/

console.log(fullName.length)

console.log(fullName[3]);

console.log(fullName.charAt(3));
console.log(fullName.indexOf("k"));
console.log(fullName.substring(0,4));
console.log(fullName.slice(0,4));

/*
 difference between slice and substring:
In slice(), negative indexes are counted from the end of the string. For example, -1 refers to the last character, -2 refers to the second-to-last character, and so on.
In substring(), negative indexes are treated as zero.

*/

newName= "     hererhe     "
console.log(newName);
console.log(newName.trim());
console.log(fullName.replace("ahmad","Ah."));
console.log(fullName.includes("eel"));
console.log(fullName.includes("hehe"));
console.log(fullName.split(" "));


