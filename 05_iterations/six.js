// const coading=["js","cpp","py","ruby"]

// const values=coading.forEach( (item)=>{
// console.log(item);
// })
// console.log(values);


 const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=> {
//    return  num>4
// })



// const newNums=[]

// myNums.forEach((num)=> {
// if (num>4) {
//     newNums.push(num)
// }
// })
// console.log(newNums);

const books=[
    {title:'Book one',genre:'Science', publish:2000, edition:2005},

    {title:'Book Two',genre:'Math', publish:1996, edition:2001},

    {title:'Book Three',genre:'History', publish:1998, edition:2009},

    {title:'Book Four',genre:'Non-Friction', publish:2008, edition:2018},

    {title:'Book Five',genre:'Science', publish:1968, edition:1997},
];

let userBooks=books.filter((bk)=>bk.genre==='History')

 userBooks=books.filter((bk)=>bk.publish>=2000)
console.log(userBooks);
