import express from 'express';
import {MongoClient} from 'mongodb';
import { cartItems as cartItemsRaw,products as productsRaw } from '../src/temp-data';

let cartItems = cartItemsRaw;
let products = productsRaw;

const url = `mongodb+srv://admin:admin@cluster0.1gbnguq.mongodb.net/?retryWrites=true&w=majority`
const client = new MongoClient(url)

const app = express();
app.use(express.json());

app.get('/hello', async (req, res) => {
    await client.connect();
    
    const db = client.db('vueEcom-db');
    console.log(db);
    const products =  await db.collection('products').find({}).toArray();
    res.send(products);
});

app.get('/products', (req, res) => {
    res.json(products);
})

function populatedCartIds(ids){
    return ids.map(id => products.find(product => product.id === id));
}

app.get('/cart', (req, res) => {
    const populatedCart = populatedCartIds(cartItems);
    res.json(populatedCart);  
})
app.get('/products/:productId', (req, res) => {
    const productId = req.params.productId
    const product = products.find(product => product.id === productId)
    res.json(product)
})
app.post('/cart', (req,res) => {
    const productId = req.body.id;
    // const product = products.find(product => product.id === productId)
    cartItems.push(productId);
    const populatedCart = populatedCartIds(cartItems);
    res.json(populatedCart);
});

app.delete('/cart/:productId', (req, res) =>{
    const productId = req.params.productId;
    cartItems = cartItems.filter(id => id !== productId)
    const populatedCart = populatedCartIds(cartItems);
    res.json(populatedCart)
})




app.listen(8000, () => {
    console.log(`Server is start on 8000`);
});


//  

// Nancy Ramirez

