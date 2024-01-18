let num=33
console.log(typeof num)   ///---->op:number
let strNum="56"
console.log(typeof strNum)    ////--->op:string

let strNum_to_num=Number(strNum)
console.log(typeof strNum_to_num)     //----->op:number
console.log(strNum_to_num)  ///---->op:56


let hybridString="33abc"
let hybridString_to_num=Number(hybridString)
console.log(typeof hybridString_to_num)  ///--->op:number
console.log(hybridString_to_num);        ///---->NaN


let x=null
let null_to_num=Number(x)
console.log(typeof null_to_num)     ///--->op:number
console.log(null_to_num)               ///--->op:0
/*
similarly i get the following conversion:
1>any data type to number:
    undefined----->NaN
    NaN----->NaN
    true---->1
    false----->0
 2>any data type to boolean:
      here js use truthy and falsy 
      falsy in js will return false when converted to Boolean
      falsy in js are:
                         false
                          null
                          undefined
                          0
                          -0
                          0n
                          NaN
                          ""   
        rest everything is truthy.
 3>any data type to string:
 number,undefined,null,true ,false------>everything will be printed as it is when converted to string  only data type will be string when we try to print typeof   

*/


