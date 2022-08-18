// Functions with Parameter

function greet(firstName){
    console.log(` Hey, ${firstName}`)
}
greet('tushar') // Function Argument

// Two Parameter

function names2(fName, lName){
    console.log(`Hey, ${fName} what is your surname ${lName}`)
}
names2('tushar','Patel') // Two Arguments


// Example of multiple Parameter

function repeat(str, numTimes){
    let result = ''
    for(let i=0; i<numTimes; i++){
            result += str
    }
     console.log(result)   
}
 repeat('h', 5)

// Self Invoke Function

(function stud(){
    console.log('tushar')
})(); // this function called by it self....... by this bracket


// use of Return keyword
function add(x, y){
    console.log(x + y) // using console it will just print value
}
const a = add(10,10)
console.log(a)  // it will show undefine variable 'a'

// now use Return key word

function addNum(x, y){
    return x + y;   // using return we can store value in variable
}
const b = addNum(10,10)
console.log(b)


// Lexical Scope, Child Functions can access Parent functions variables... 

function bankRobbery(){
    const heroes = ['tushar', 'tarun', 'tp']
    function cryForHelp(){
        for(let hero of heroes){
                console.log(`Please Help Us, ${hero.toUpperCase()}`)
        }
    }
    cryForHelp();
}


let greet2 = function() {console.log('Hey')}
greet2()


/// Passing a function as an argument

function callTwice(func){
    func();
    func();
}
function rollDie(){
    const roll = Math.floor(Math.random() * 6) + 1
    console.log(roll)
}
callTwice(rollDie)


// Return Function

function makeMystery(){
    const rand = Math.random();
    if(rand > 0.5){
        return function(){
            console.log("Congrats, Good try")
            console.log("You Win")
        }
    }   else{ 
            return function(){
                alert('You Have been virus infected!!')
            }
        }
}
const test = makeMystery()
test()


// Methods 

const myMath = {
    PI : 3.14,
    square : function (num){
        return num * num;
    },
    cube : function (num){
       return num ** 3; }
}

myMath.cube(3)

const myMath2 = {
    PI : 3.14,
    square(num){
        return num * num;
    },
    cube(num){
       return num ** 3; },
    add(num, num2){
        return num + num2
    }
}

myMath2.add(5,5)

// THIS keyword explnation

const cat = {
    name: 'blue steele',
    color: 'grey',
    breed: 'scottish fold',
    meow(){
          console.log(`${this.name} says MEOWWW`) ; 
    }
}
cat.meow()







