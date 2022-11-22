import express from "express"
import bodyParser from "body-parser"

import  MongoClient  from "mongodb"


const MongoClient = require("mongodb")

const uri ="mongodb+srv://AndyLufic:<80x1125nultramen7!>@cluster0.ii27qvw.mongodb.net/test"
  
const client = new MongoClient(uri)
const app = express()
const port = 3000

app.use(bodyParser.json())


app.get("/saveItem", (req, res) => {
    async function run() {
        try {
          const database = client.db('blitz2');
          const shop = database.collection('blitzevi');
          
          const query = { title: 'Hlace' };
          const item= await shop.findOne(query);
          console.log(item);
        } finally {
          
          await client.close();
        }
      }
      run().catch(console.dir);
});
app.post("/getBrand", (req, res) => {

});

async function run() {
    try {
      const database = client.db('sample_mflix');
      const movies = database.collection('movies');
      
      const query = { title: 'Back to the Future' };
      const movie = await movies.findOne(query);
      console.log(movie);
    } finally {
      
      await client.close();
    }
  }
  run().catch(console.dir);


app.listen(port, () => console.log(`Works on port ${port}`));













