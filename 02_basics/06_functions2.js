//uses of rest operator : used when there is single parameter in functions and multiple aurgments are passed then it returns all arguments in array
function hello(v1,v2,...num1){
    return num1;
}

console.log(hello(23,53,534,5355,3535,54,656,46));   //OP:  [ 534, 5355, 3535, 54, 656, 46 ]

const user={
    uname:"wakeel kumar",
    price:199,
}

function objectHandle(anyobj){
    console.log(`user name is ${this.uname} and price is ${anyobj.price}`)
}

objectHandle(user); // op:user name is undefined and price is 199      ////---->i,e we cant use this inside the function


 //js functions can be used as variables
   
  //console.log(addtwo(7))   //op: ReferenceError: Cannot access 'addtwo' before initialization
 const addtwo=function(Num){
    return Num+2;
 }
 console.log(addtwo(7))
 console.log(add1(5)) //OP: 6 without any error 

 function add1(Num){
    return Num+1
 }
