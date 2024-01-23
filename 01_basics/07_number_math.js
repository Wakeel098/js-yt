const x=40;

const value= new Number(100);
console.log(x);
console.log(value);
console.log(typeof x);
console.log(typeof value);

console.log(value.toString().length);

console.log(value.toFixed(3))    //op:100.000----->toFixed gives no. precissions after decimal

console.log(value.toPrecision(4))   //op:100.0---->no of precisson values from the begining . if length of number is less than no. of precission values provided then we will get the no. of precission values provided but in exponential form

console.log(value.toPrecision(2))  // output will be in exponential form
console.log(123.8966.toPrecision(3))   //op:124

 
console.log(Number(13424322).toLocaleString())   //toLocalString converts the number into USA standered number system
console.log(Number(13424322).toLocaleString('en-IN'))   // the number will be converted  as per  indian standered number system

console.log(Number.MAX_VALUE)
console.log(Number.MIN_VALUE)






/***************************************************MATHS********************************************************* */
console.log("*************************** Math******************")
console.log(Math)

const someNumber=-3.45
console.log(Math.abs(someNumber));
console.log(Math.abs(6-87))


console.log(Math.round(6.7))   //op:7
console.log(Math.round(6.3))   //op:6

console.log(Math.ceil(5.0001))    //op:6
console.log(Math.floor(5.999999999999999999999))   //op:5

console.log(Math.min(2,5,90,1,3))  //op:1
console.log(Math.max(2,5,90,1,3))  //op:90

//random no.btw 1 and 6

console.log(Math.floor(Math.random()*(6-1+1))+1)

// formula to generate random numbers between max and min both inclusive


// Math.floor(Math.random()*(max-min+1))+min









/** math methods and functions


E
: 
2.718281828459045
LN2
: 
0.6931471805599453
LN10
: 
2.302585092994046
LOG2E
: 
1.4426950408889634
LOG10E
: 
0.4342944819032518
PI
: 
3.141592653589793
SQRT1_2
: 
0.7071067811865476
SQRT2
: 
1.4142135623730951
abs
: 
ƒ abs()
acos
: 
ƒ acos()
acosh
: 
ƒ acosh()
asin
: 
ƒ asin()
asinh
: 
ƒ asinh()
atan
: 
ƒ atan()
atan2
: 
ƒ atan2()
atanh
: 
ƒ atanh()
cbrt
: 
ƒ cbrt()
ceil
: 
ƒ ceil()
clz32
: 
ƒ clz32()
cos
: 
ƒ cos()
cosh
: 
ƒ cosh()
exp
: 
ƒ exp()
expm1
: 
ƒ expm1()
floor
: 
ƒ floor()
fround
: 
ƒ fround()
hypot
: 
ƒ hypot()
imul
: 
ƒ imul()
log
: 
ƒ log()
log1p
: 
ƒ log1p()
log2
: 
ƒ log2()
log10
: 
ƒ log10()
max
: 
ƒ max()
min
: 
ƒ min()
pow
: 
ƒ pow()
random
: 
ƒ random()
round
: 
ƒ round()
sign
: 
ƒ sign()
sin
: 
ƒ sin()
sinh
: 
ƒ sinh()
sqrt
: 
ƒ sqrt()
tan
: 
ƒ tan()
tanh
: 
ƒ tanh()
trunc
: 
ƒ trunc()
Symbol(Symbol.toStringTag)
: 
"Math"

 */