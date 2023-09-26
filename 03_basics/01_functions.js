// function sayMyName(){
//     console.log("Y");
//     console.log("A");
//     console.log("S");
//     console.log("H");
// }

// //sayMyName()
// function addTwoNumbers(number1, number2){
//     let result= number1+number2

//    // return result
//     console.log("Hitesh");
// }

// // const result=addTwoNumbers(3,5)
// // console.log("Result:", result);

// function loginUserName(username){
//     if(username===undefined){
//         console.log("Please Enter The Username");
//         return 
//     }
    
//     return `${username} just logged in`
// }

// //console.log(loginUserName("Yashkumar"))


function calculateCartPrice(val1,val2,...num1){
return num1

}

//console.log(calculateCartPrice(300,400,800));

const user={
    usrername: "Yashkumar",
    price: 800
}

function handleObject(anyobject){
 console.log(`username is ${anyobject.usrername} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({

    usrername: "Vikas",
    price:600
})

const myNewArray=[100,200,300,400]

function returnSecondValue(getArray){
return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([100,200,300,400]));