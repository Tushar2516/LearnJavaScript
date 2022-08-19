
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