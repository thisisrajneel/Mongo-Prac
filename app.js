// Local Mongo Server
const { MongoClient } = require("mongodb");

// Replace the uri string with your MongoDB local port number (27017)
const uri =
  "mongodb://localhost:27017";

const client = new MongoClient(uri);

async function run() {
  try {
    await client.connect();

    const database = client.db('myDB');
    const products = database.collection('products');

    // Query for a product that has the name 'Pen'
    const query = { name: 'Pen' };
    const pen = await products.findOne(query);

    console.log(pen);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);