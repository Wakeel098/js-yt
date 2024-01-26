let mydate=Date();
//console.log(mydate);

//console.log(typeof mydate)      //   -------  string
                                        ///
mydate=new Date();                     ///
//console.log(mydate)                   ///
                                    ///       
//console.log(typeof mydate)          /// object

//console.log(mydate.toString)
//console.log(mydate.toLocaleString());


///some foamats to to create a date:
let createdDate= new Date(2023,0,28)    /// in this way month start with 0 not with 1

//console.log(createdDate)
//console.log(createdDate.toDateString());
//console.log(createdDate.toLocaleDateString())

let newCreated=new Date(2023,5,20,4,8);
//console.log(newCreated.toLocaleString());

let d=new Date(`12-26-2024`)        
console.log(d.toLocaleString())


/****************time Stamps*************** */
 
console.log(Date.now())    //--->op:1706248061835--->time in ms from midnight 1970 1 jan


console.log(d.getTime())    //op:1735171200000    ---->time in ms from midnight 1970 1 jan  upto midnight 0f  12-26-2024

let somedate=new Date();
console.log(somedate.toLocaleString("default",{
    weekday:"long",
    month:"long",
    day:"2-digit",
   // timeStyle:"short",
 
}))



