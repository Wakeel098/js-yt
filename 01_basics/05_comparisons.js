
//simple comparisons
console.log(2>1);    //op:true
console.log(2>=1);   //op:true
console.log(2<1);    //op:false
console.log(2<=1);   //op:false
console.log(2==1);   //op:false
console.log(2!=1);   //op:true

// js  automatically treats numbers whose data types are strings as numbers
console.log("2">1);    //true  
console.log("02">1);   //true

console.log("abc">3);  //false

//some important comparisons

console.log(null > 0)     //op:  false
console.log(null == 0)   //op:false
console.log(null >=0)   //op:  true
console.log(null <=0)   //op:  true

console.log(undefined ==0)    //op:false
console.log(undefined >0 )    //op:false
console.log(undefined <0 )    //op:false
console.log(undefined >=0)    //op:false   
console.log(undefined <=0)    //op:false

//strict equal to:   ===

console.log("2"==2)    //true
console.log("2"===2)   //false
  

