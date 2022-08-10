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

















































