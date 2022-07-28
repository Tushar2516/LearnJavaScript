
function sayMyName(name){
    console.log(name)
}

sayMyName("TP")  // PAssing Arguments


function greeting(name){
     
    console.log("Hi"+ name + "Nice To Meet You!" )

    // temple literals

    console.log(`Hi ${name} Nice To Meet You.. `)
}


 greeting("Tarun")

                    // Function ------------------------------


function sumTwo(a,b){
    return a+b
}
num1 = sumTwo(1,2)
console.log(num1)

//const sumArrow2 = (a,b) => a + b

function calculateFoodTotal(foodPrice, tipPercentage){
   const tipAmount = foodPrice * (tipPercentage / 100)
   const total = sumTwo(tipAmount,foodPrice)
   return total
}
console.log(calculateFoodTotal(100,10))

// Arrow Function =>

const sumArrow = (a,b) => {
    return a +b
 }

const sumArrow2 = (a,b) => a + b  // Implicite Return Arrow Function,
                                // In Which Don't Need To Call Return Method


                //    ARRAY [ ] ----------------------------------

const names = ['tp', 'tushar', 'tarun', 'fanti']
console.log(names)
console.log(names[0])
console.log(names[3])

// --------------- ARRAY METHOD ----------------------


names.push('Gopal','Chetan','Nixit')
console.log(names)
console.log(names.slice(3,7))
console.log(names.slice(1,4))
console.log(`Name Which you want is located on ` + names.indexOf('tushar') + ` Index Number `)
console.log(`Total elements in array is ` + names.length)
 

 // -------------------- Object {} --------------------------

 const person = {
    name : 'Tushar',
    shirt : 'UCB Black Shirt', 
    shoes : 'UCB Nevy Blue shoes'
}
    // Access Objects : Dot Notation VS. Bracket Notation
console.log(person.shirt)
    // Access Object Value Using Bracket Notation..
console.log(person['shoes'])

//   --------- Assign or Add key value in object

// Add usign dot notation
person.phone = '1-222-222-2222'
console.log(person.phone)

// Add using bracket notation
person['email'] = 'fanti@12.com'
console.log(person)

const personFunction = (name, shirt, shoes) =>
    {

        const person = {
            name : name,
            shirt : shirt,
            shoes : shoes,
            assets : 10000,
            liabilities : 5000,
            netWorth:  function () { return this.assets - this.liabilities } 
            
        }
         
    const intro = `Hi, My Name Is ${person.name} and My shirt is ${person.shirt} and love to wear ${person.shoes} and my netWorth is ${person.netWorth()}` 
    return intro
} 
console.log(personFunction('Mitesh','BlueNotes White Shirt', 'Addidas White Shoes'))


// -------------------- FOR LOOP --------------------------

const student = ['tp', 'tushar', 'tarun', 'fanti','tp', 'tushar', 'tarun', 'fanti']
/*
for (let i=0; i<student.length; i++)
{
    console.log(i,student[i])
}*/

for(const students of student){
    console.log(students)
}

const numbers = [1,2,3,4,5,6,7]
let sum = 0
for (const number of numbers){
    sum = sum + number
}
//console.log(sum)



// ---------------  Sum Of array

const sumArray = (numbers) => {
    let result = 0
    for (const number of numbers){
        //console.log(number)
        result = result + number
    }
    return result + ` Sum of Array `
}
console.log(sumArray([1,2,3,4,5,6]))


//  ------------   Sum Of Letter

const howManyLetters = (a) => {
    let sum = 0
    for(const letter in a){
        //console.log(Number(letter) + 1)
        sum = Number(letter)+1
    }
    return {sum} + ` Total letter In String `  

}
//console.log(howManyLetters(prompt("Enter Text")))

// ----------- Max Number Function in Array

const maxNumber = (numbers) =>{
    let result = numbers[0]
    for(const number of numbers)
    {
        if(number > result )
        {   
            result = number
        }
    }
    //console.log(`${result} is greater`)
    return result + ` Is Greater Number`
}
console.log(maxNumber([2,5,1,9,3]))


// --------- Letter Frequency


const letterFrequency = (a) => {
    let obj = {}
    for(const letter of a){
        if(letter in obj){
            obj[letter] += 1
        }
        else {
            obj[letter] = 1
        }
    }
    return obj
}
// console.log(letterFrequency("tutu"))
 


// --------------- Word Frequency ------

const wordFrequency = (phrase) => {
    let frequency = {}
    words = phrase.split(' ')
    return letterFrequency(words)
}
console.log(wordFrequency("TP MP TP RJ"))


// ----------------------DOuble Number Function

const doubleNumber = (numbers) => {
    let result = []
    for(const number of numbers)
    {
        result.push(number * 2)
    }
    return result
}
console.log(doubleNumber([1,12,3]))

// ------- Same Function Using Array method MAP

const doubleNumberMap = (numbers) =>{
    return numbers.map(number => number * 2)
}


// ----------------  Filter Method

const filter = (numbers, gT) => {
    let result = []
    for(const number of numbers){
        if(number>gT){
            result.push(number)
        }
    }
    return result
}
console.log(filter([1,2,3,4,5,6], 3))

// -----------------  Using .Filter Method

const nums = [ 1, 2 , 3, 4, 5, 6].filter(num => num>4)
console.log(nums)

const students = [
    { name: 'TP', city : 500},
    { name: 'Tarun', city : 100},
    { name: 'Tushar', city : 300},
]
let result = students.filter(student => student.city > 200)
console.log(result)

const testReduce = [10, 20, 30]
console.log(testReduce.reduce((pre,nex) => pre + nex ))




