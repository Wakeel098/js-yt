// this keyword tells about the curret context 

const user={
    userName:"wakeel kumar",
    price:999,
    welComeMsg: function() {
        console.log(`${this.userName}, welcome`)
        console.log(this)
    }
    
}

console.log(this)
user.welComeMsg();
user.userName="sameeer"
user.welComeMsg();
/*****************************arrow function******************/
 
function funcName(){
    console.log(this)
} 
funcName();     ///op:<ref *1> Object [global] {global: [Circular *1],clearImmediate: [Function: clearImmediate],setImmediate: [Function: setImmediate] {[Symbol(nodejs.util.promisify.custom)]: [Getter]},clearInterval: [Function: clearInterval]clearTimeout: [Function: clearTimeout],setInterval: [Function: setInterval],setTimeout: [Function: setTimeout] {  [Symbol(nodejs.util.promisify.custom)]: [Getter] }, queueMicrotask: [Function: queueMicrotask], structuredClone: [Function: structuredClone], atob: [Getter/Setter], btoa: [Getter/Setter], performance: [Getter/Setter], fetch: [Function: fetch], crypto: [Getter]}


// now in arrow function 

const fName=()=>{
    console.log(this);
}
fName()    //op:{}


//explicit return in arrow functions

const addTwo=(num1,num2)=>{
    return num1+num2
}
addTwo(2,3);
//when there is single line in function we use implicit return as:

const addthree=(num1,num2,num3)=>(num1+num2+num3)
//object is returned implicitly as

const retobj=()=>({name:"wakeel",
                   price:999})




