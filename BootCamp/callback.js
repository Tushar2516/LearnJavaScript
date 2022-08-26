
// forEach 

const nums = [9,8,7,6]
nums.forEach(function(n,i){
  console.log(n*n)
  console.log(i)
});

const movies = [
    {   
        title: 'kgf',
        score: 100
    },
    {
        title: 'kgf2',
        score: 99
    },
    {
        title: 'kgf3',
        score: 98
    },
    {
        title: 'kgf4',
        score: 97
    }
]

movies.forEach(function(single){
    console.log(single)
}) 
movies.forEach(function(single){
    console.log(`title of movie ${single.title} and score of movie is ${single.score}`)
});


// Map 

const texts = ['tushar', 'tarun', 'tp']
const caps = texts.map(function(t){
    return t.toUpperCase();
});
texts;
caps;

const tp = movies.map(function(t){
    return t.title
})

// FreeCodecamp

const recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  
  function updateRecords(records, id, prop, value) {
    if (prop !== 'tracks' && value !== "") {
      records[id][prop] = value;
    } else if (prop === "tracks" && records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [value];
    } else if (prop === "tracks" && value !== "") {
      records[id][prop].push(value);
    } else if (value === "") {
      delete records[id][prop];
    }
    return records;
  }
  
  updateRecords(recordCollection, 5439, 'artist', 'ABBA');


  // Arrow Functions 

const square = (x) =>{
    return x * x;
}
square(5)

const mySum = (x, y) =>{
    return x + y;
}
mySum(15,10)

const rollDie = () => {
    return Math.floor(Math.random() * 6) + 1
}
rollDie()

const isEven = num => (
    num % 2 === 0
)
isEven(10)
const isEven2 = num => num%2 === 0;
isEven2(5)


const t = movies.map(function(movie) {
    return `${movie.title} - ${movie.score / 10}`
})


// setTimeOut

console.log("Helllo")
setTimeout(() => {
    console.log("... are you still there ?")
}, 3000)
console.log("good bye")

// filter method
const number = [1,2,3,4,5,6,7]
number.filter(n => {
    return n % 2 == 0
})

movies.filter(newVar => { 
    return newVar.score >98 
})

// Implicite Return

const highStar = movies.filter(m => m.score > 97 )

movies.filter(m => m.score > 97).map(m => m.title)


// Some AND Every Method()

const exams = [50,40,30,20,80,70]
exams.every


[3,5,7,9,11].reduce((acc, curr) =>
    {
        return acc + curr;
    });

const prices = [9,15,20,7,50]
prices.reduce((total, price) => {
    return total + price
})


// Spread Operator with function

const nums2 = [9,8,7,6]
Math.min(...nums2)
Math.max(...nums2)

// spread with array

const stud = ['tp','tushar','tarun']
const stud2 = ['tp2','tushar2','tarun2']
const allStud = [...stud, ...stud2]

// spread with objects

const dataFrom = {
    email : 'tp@gmail.com',
    pass : 'ttt@123',
    username : 'tushar322'
}
const newUser = {...dataFrom, id:23, isAdmin: false}


function sum2(...nums){
    return nums.reduce((total,el) => total + el)
}

// Rest parameter 
// here ... spread opeator work for collecting parameter 
// passing multiple parameter using ...rest params

function raceResults(gold, silver, ...everyoneElse){
    console.log(`GOLD MEDAL GOES TO:  ${gold}`)
    console.log(`silver MEDAL GOES TO:  ${silver}`)
    console.log(`THANKS TO EVERYONE:  ${everyoneElse}`)
}

// Array Destructuring

const madels = ['tp', 'tushar', 'tarun', 'mitesh'];
const [gold,silver,bronze] = madels
gold;
silver;

const [gold2, ...all] = madels
all;


// Object Destrcturing 

const user = {
    email : 'patel@gmail.com',
    pass : 'patel123',
    fName : 'Tushar',
    lName : 'Patel',
    bDate : '21/10/1998'
}
const {email, pass, ...allUser} = user
email;
allUser;

const {bDate : birthYear, pass : password}  = user


// Parameter Destructuring

const fullName = ({first, last}) => {
    return `${first} ${last}` }
const runner = {
    first : 'tushar',
    last : 'Patel',
    country : 'IND'
}
fullName(runner)













