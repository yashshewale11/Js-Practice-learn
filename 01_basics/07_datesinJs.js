let myDate= new Date();

// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());

//let myCreatedDate= new Date("2023-07-11");
// let myCreatedDate= new Date("05-14-1998");
// // console.log(myCreatedDate.toLocaleDateString());

// let myTimeStamp= Date.now()
// console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate)
console.log(newDate.getMonth())

newDate.toLocaleString('default',{
    weekda: "long",
    
})