//for of loop

const arr=[3,4,5,2,]
 for (const val of  arr) {
    console.log(val)
 }

 const greeting ="asalamu alai kum"
 for (const  greet of greeting) {
    console.log(`eaach character is :  ${greet}`)
 }

 // maps : store values in key value pair
  const mp= new Map();
  mp.set("Key","Value")
  mp.set("IN","India")
  mp.set("SA"," South africa")
  mp.set("IN","India")  //--> india will not go into the map again because map store unique values

  console.log(mp)

// iterating map using for of loop

for (const  ke of  mp) {
    console.log(ke)   // here key stores both key value in array as: [ 'IN', 'India' ]
}

for (const  [k,v] of  mp) {
    console.log(k) 
    console.log(v)
}

//can we apply for of loop on objects as well
const obj={
    1:"one ",
    2:"two"
}
// for (const  [k,v] of  obj) {
//     console.log(k)                        //TypeError: obj is not iterable
//     console.log(v)
// }
