const user={
username:"Yashkumar",

price:880,

welcomeMessage: function()
{
    console.log(`${this.username}, welcome to website`);
    //console.log(this);
}
}

//  user.welcomeMessage()

//  user.username="Ravi"
//  user.welcomeMessage()

//console.log(this);


// function one(){
//     let username="Yashkumar"
//     console.log(this.username);
// }
// one()


// const mobile=function(){
//     let username="Yash"
//     console.log(this.username);
// }

const mobile=()=>{
    let username="Yash"
    console.log(this);
}



//mobile()

// const addTwo=(num1,num2)=>{
//  return num1+ num2
// }
// const addTwo=(num1,num2)=>(num1+ num2)
//     return num1+ num2

//const addTwo=(num1,num2)=>(num1+num2)
   
const addTwo=(num1,num2)=>({username:"hitesh"})
   

console.log(addTwo(3,4))

//const myArray =[2,4,6,8]

