const userEmail=[]


if (userEmail) {
    console.log("got user email");
}else{
    console.log("dont have user email");
}

//falsy values

//false, 0,-0, BigInt 0n, "",null,undefined,NaN

//truthy Values

// "0",'false'," ",[],{}, function(){}

// if (userEmail.length===0) {
//     console.log("Array is empty");
// }

const emptyObj={}
if (Object.keys(emptyObj).length===0) {
    console.log("object is empty");
}

//nullish coalescing Operator(??): null undefined

let val1;

//val1= 5 ?? 10

//val1=null ?? 10

//val1 =undefined ?? 15

val1 =null ?? 10 ?? 15




console.log(val1);


//Terniray Operator

//condition ? true : false

const iceTeaPrice=100

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");