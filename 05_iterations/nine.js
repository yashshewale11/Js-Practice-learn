const myNums=[1,2,3]

// const myTotal=myNums.reduce(function (acc,currval){
//     console.log(`acc:${acc}and currval:${currval}`);
//     return acc+currval
// },0)

const myTotal=myNums.reduce((acc,currval)=>acc+currval,0)
console.log(myTotal);

const shoppingCart=[
    {
        itemName: "js course",
        price:1000
    },
    {
        itemName: "py course",
        price:1500
    },
    {
        itemName: "java course",
        price:20000
    },
]

const priceToPay=shoppingCart.reduce((acc,item)=>acc+(item.price),0)

console.log(priceToPay);