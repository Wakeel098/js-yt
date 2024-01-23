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

