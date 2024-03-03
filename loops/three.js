//for each loop
const arr=[2,4,56,46,7,4]
arr.forEach((num,ind,arr)=>{
     console.log(num*2,ind,arr)
}) 

const  printme= function(val){
    console.log(val);

}
console.log("array")

arr.forEach(printme)