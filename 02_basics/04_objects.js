// objects using constructor---singleton object

const user= new Object();

user.id=123;
user.name="wakeel";
user.email="kumarwakeel@gmail.com";

console.log(user);


//nesting of objects 

const obj={
    email:"abc@123",
    fullname:{
        userFullName:{
            firstName:"wakeel",
            lastName:"kumar",
        }
    }

}

//accessing nested objects

console.log(obj.fullname?.userFullName.lastName);   //    ? -->used for optional chaining

//merging of objects: 1) by using Object.assign  2) by using spread operator

const obj1={
    1:"abc",
    2:"def"
}

const obj2={
    3:"geh",
    4:"ijk"
}

const m1=Object.assign({},obj1,obj2);
const m2={...obj1,...obj2}
console.log(m1,m2)

console.log(Object.keys(obj1));
console.log(Object.values(obj));
console.log(Object.entries(obj2));

console.log(obj.hasOwnProperty('key'))
console.log(obj.hasOwnProperty('email'))

// object destructuring 

const course={
    courseName: "js mastery ",
    price:"free",
    CourseInstructor: "Wakeel Ahmad Kumar"
}

console.log(course.CourseInstructor);

const {CourseInstructor}=course

console.log(CourseInstructor)

const {CourseInstructor: instrctor}=course
console.log(instrctor)


///destructuring the object
console.log("************destructuring the object**************");

const courseObject={
    cName: "js mastry",
    CourseInstructorName:"wakeel",
    
}

console.log(courseObject.CourseInstructorName);

const {CourseInstructorName}=courseObject;
console.log(CourseInstructorName)

 

const {CourseInstructorName: instName}=courseObject;

console.log(instName);


