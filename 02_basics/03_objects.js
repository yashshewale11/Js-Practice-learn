// singleton
//object.create

//object literals

const mySym= Symbol("Key1")


const JsUser={
    name: "Yashkumar",

    "full name":"Yashkumar Shewale",
    [mySym]:"myKey1",
    age:24,

    location: "Nashik",

    email: "yash@gmail.com",

    isLoggedIn: false,
    
    lastLoggedinDays: ["Friday","Monday"]

}

console.log(JsUser.email);
console.log(JsUser["email"]);
console.log(JsUser["full name"]);
console.log(JsUser[mySym]);

JsUser.email="yash@google.com"
//Object.freeze(JsUser)
JsUser.email="yash@chatgpt.com"

console.log(JsUser);


JsUser.greeting= function(){
    console.log("Hello JS User");
}

console.log(JsUser.greeting());

JsUser.greetingTwo= function(){
    console.log(`Hello JS User,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
