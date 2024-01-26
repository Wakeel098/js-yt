//ways to declare arrays:2

arr=[1,2,3,"helo",true];
console.log(arr)

const arr1= new Array(1,3,"hello",null)
console.log(arr1);

//array methods
console.log("array methods:");

mArr=[1,2,3,4,5];

mArr.push(33);
console.log(mArr);    //op:[1,2,3,4,5,33]
mArr.pop();
console.log(mArr);    //op:[1,2,3,4,5]

mArr.unshift(99);     
console.log(mArr);    //op:[99,1,2,3,4,5]
mArr.shift();
console.log(mArr);    //op:[1,2,3,4,5]

console.log(mArr.includes(44));    //op:false
console.log(mArr.includes(3));     //op:true

console.log(mArr.indexOf(4));       //op:3
console.log(mArr.indexOf(100));      //op:-1


ary=mArr.join();
console.log(ary);              //op:1,2,3,4,5
console.log(mArr);             //op:[ 1, 2, 3, 4, 5 ]  ---->join does not alters orginal array
console.log(ary.indexOf(3));   //op:4


//slice and splice

sArr=[1,2,3,4,5,6,7];
console.log("A  :",sArr);
newArr1=sArr.slice(2,4);

console.log(newArr1);
console.log("B  :",sArr);

newArr2=sArr.splice(2,3);

console.log(newArr2);
console.log("c  :",sArr);


