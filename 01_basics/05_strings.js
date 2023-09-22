const name="Rahul"

const repoCount=16

console.log(name+ repoCount +"value");// Plese dont follow this syntax because this is old approch


console.log(`Hello my name is ${name} and my repocount is ${repoCount}`);//This is the best approch

const gameName=new String('Mario-game')

console.log(gameName.__protp__);

console.log(gameName.charAt(2));
console.log(gameName.indexOf('o'));

const newString =gameName.substring(0,3)

console.log(newString);

const anotherString=gameName.slice(-9,3)
console.log(anotherString);

const newStringOne="  jawan   "
console.log(newStringOne.trim());

const url= "https://normal.com/normal%10lize"
console.log(url.replace('10%','-'))


console.log(url.includes('mahesh'))

console.log(gameName.split('-'));

