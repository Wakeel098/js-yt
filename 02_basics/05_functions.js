function AddTwo(num1,num2){
    console.log(num1+num2);
}

AddTwo();   // op:NaN because without arguments passed

AddTwo(2,3);

function userLogInMsg(username){
    console.log(`${username} just logged in`)
}

userLogInMsg();   // op:undefined just logged in ///because called without arguments

userLogInMsg("wakeel")