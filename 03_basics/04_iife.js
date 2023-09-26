//Immediately Invoked Function Expression (IIFE)

(function mobile(){
    // named IIFE
    console.log(`DB CONNECTED`);
}
)();

((name)=> {
    console.log(`DB CONNECTED TWO ${name}`);
})('Yashkumar')