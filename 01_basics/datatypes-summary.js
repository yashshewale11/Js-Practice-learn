// primative

//7 types : String, Number, Boolean, null, undefined, symbol, BigInt

const score= 100

const scoreValue= 0.3

const isLoggedIn= true

const outsideTemp= null

let userEmail;

const id= Symbol('123')
const anotherId=Symbol('123')

console.log(id==anotherId);

const bigNumber= 998822314545515151n




// Refrance (Non Primative)
//Array, Objects, Functions

const heros= ["Shivaji Maharaj","Jhasi Rani","Mahrana Pratap"]
let myObj={

    name:"Yash",
    age:25,
}

const myFunction=function(){
    console.log("Hello  all heros");
}

console.log(typeof null );

//https://262.ecma-international.org/5.1/#sec-11.4.3