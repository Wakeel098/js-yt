// what for each loop returns

const lang=["js","python", "java","c","ruby"]

const ret=lang.forEach((item)=>{
    return item
})
console.log(ret);   //op:undefined---->for each loop functions returns undefined i,e; nothing
/********************************************************************* */

//filter

const nums=[1,3,5,76,4,3,2,6,77,86]

let newNums=nums.filter((val)=>{
    return val>5
})
console.log(newNums);

let anotherNums=nums.filter((val)=>val<6)      //by using implicit return of arrow function
console.log(anotherNums);



//filter on objects

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let userBooks = books.filter( (bk) => bk.genre === 'History')

  userBooks = books.filter( (bk) => { 
    return bk.publish >= 1995 && bk.genre === "History"
})
  console.log(userBooks);