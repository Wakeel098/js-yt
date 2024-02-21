// by using object literals
const user={
    name:"wakeel",   // the key here viz name is treated as string and value can be anything
    age: 23,
    email:"hello@gmail.com",
    "is Logedin":false,    // we cant use this value by dot method so we have to use sqaure braces to access
}

//to access objects

console.log(user.email)
console.log(user["email"])
console.log(user["is Logedin"])

//to use symbol data type as key

const  mysymb=Symbol("symbolKey")   //creating symbol

const user2={
    //mysymb:"key is symbol", // when we console log op: key is symbol, but the key is not treated as symbol yet
   // to use key as a symbole write in square braces
   [mysymb]:"now the key is actually symbol",
}
console.log(user2.mysymb)
console.log(typeof user2.mysymb)

//to access type symbole use square braces method without comma's
console.log(user2[mysymb])

// we can overwrite the values of object by = as
user.email="hel0@122"
//we can lock the object so the the values can be changed use freez method
Object.freeze(user2)  //now the values of user2 can't be changed


 
console.log(user)

/****************************************************** */
// in js functions are treated as variables and can be used as values to a key in js

user.greeting=function(){
      console.log("hello user")
}

//console.log(user.greeting) //op:[Function (anonymous)]
 
console.log(user.greeting())  //op: hello user
 // when we have the refrence the same object we have to use the key word this as;
 user.greetingtwo =function(){
    console.log(`hello my js user ${this.name}`)
 }

 console.log(user.greetingtwo())
 
