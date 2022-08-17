typeof []
const person = { firstName : 'Tushar', lastName: 'Patel', age: 25, city: 'Himatnagar'}
const kitchenSink = {
    favNum : 4242,
    isFunny : true,
    colors: ['red', 'blue']
}
kitchenSink

person['age']
kitchenSink['colors']
kitchenSink.colors

const years = {1998: 'GOOD', 1999: 'Still Good', 2022:'ever worse'}

const midTerms = { tushar: 30, tarun:60 }
midTerms.tushar
midTerms['tarun']
midTerms.tushar = 40
midTerms.tp = 50


// Array + Objects

const shoppingCart2 = [{
    product:'Jenga Classic',
    price: 6.88,
    quantity: 1,
},
{
    product: 'Echo Dot',
    price: 29.99,
    quantity: 3,
},
{
    product: 'Fire Stick',
    price:39.99,
    quantity:2,
}]

shoppingCart2.length
shoppingCart2[1].price  // array + object access value

// Loop practice

for(let row=1; row<=3; row++){
    for(let coloum=1;coloum<=row; coloum++){
        console.log(coloum)
    }
        console.log('')
}

for ( let i = 100; 10 <= i; i -=  10){
    console.log(i)
}

// Accessing array + object using for loop

for(let i=0; i<shoppingCart2.length; i++){
    console.log(i, shoppingCart2[i])
}

const names = ['tushar','tarun','tp']

for(let i=0; i<names.length;i++){
    console.log(i,names[i])
}


// Nested Array

const frds = [ 
    ['mitesh','mayank','rohan'],
    ['anish','harpal','purvesh'],
    ['nixit','chetan','gopal'] 
]

for(let i=0; i<frds.length; i++){
    const row = frds[i]
    for(let j=0; j<row.length; j++){
        console.log(row[j])
    }
}



const SECRET = "BabyHippo";

let guess = prompt("enter the code")

while(guess !== SECRET){
    guess = prompt("enter code");
}
console.log("Congrats!!")


// -----------------------
let input = prompt("enter something")
while(true){
    input = prompt(input);
    if(input === "stop copying"){
        break;
    }
}
 console.log("win")       

//////------------------------
let maximun = parseInt(prompt("enter number"));
while(!maximun) {
    maximun = parseInt(prompt("enter valid num"))
}

const targetNum = Math.floor(Math.random() * maximun) + 1 
console.log(targetNum)

let guess2 = prompt("enter your first num");
let attempts = 1;
while(parseInt(guess2) !== targetNum){
    if(guess2 === 'q')
    break;
    attempts++;
    if(guess2 > targetNum){
        guess2 = prompt("Tooo high, enter new")
    }
    else{
        guess2 = prompt("Too low, enter new")
    }
}
console.log(`You Got It, you took ${attempts} attempts `)



// -------------- for... of loop
for (let fr of frds){

    for(let j of fr){
        console.log(j)
    }
}

for(let char of "hello world"){
    console.log(char)
} 

// --- objects with for...of

const testScore = {
    tp : 70,
    tushar:80,
    tarun:10,
    rohan:100,
    mitesh:99,
    mayank:98
} 
for (let test in testScore){
    console.log(test)
}
for (let test in testScore){
    console.log(`${test} scored ${testScore[test]}`)
}

let total = 0;
for(let score of Object.values(testScore)){
    total += score;
    console.log(total);
}







































