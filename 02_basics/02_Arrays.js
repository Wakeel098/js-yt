let heros=["thor","spiderman","flash"];
let heros2=["supperman","batman","shaktimaan"];

heros.push(heros2);     ///hero2 is psuhed as single element(i.e, array) in heros not as three elements
console.log(heros);
console.log(heros[3]);
console.log(heros[3][1]);  

//to avoid the aboe problem:use concat
let arr1=[1,2,3,4];
let arr2=[5,6,7]

arr_merged=arr1.concat(arr2);

console.log("arr_merged  :",arr_merged);

///we can also merge two arrys by using spread operator

arr_merged2=[...arr1,...arr2];
console.log("arr_merged2  :",arr_merged2);

//use of flat method

x=[1,2,3,[4,5,6],7,[8,9,[4,5]]];

unnested_arr=x.flat(2);

console.log("unnested_arr: ",unnested_arr);

//
console.log(Array.isArray("wakeel"));
console.log(Array.from("wakeel ahmad kumar"));

console.log(Array.from({name:"wakeel"}))    // we get empty array as op because objects are not iterable;

//to make objects iterable

console.log(Array.from(Object.values({ name: "wakeel" })));
console.log(Array.from(Object.keys({ name: "wakeel" })));
console.log(Array.from(Object.entries({ name: "wakeel" })));



//use of of method

var1=100;
var2=true;
var3="hello";
console.log(Array.of(var1,var2,var3));
