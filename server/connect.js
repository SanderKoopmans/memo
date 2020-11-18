require('dotenv').config();
const { MongoClient } = require("mongodb");

const user = process.env.MongoUser;
const pass = process.env.MongoPW;
const db = process.env.MongoDB;
// Replace the following with your Atlas connection string

const url = `mongodb+srv://${user}:${pass}@memo.gw201.mongodb.net/${db}?retryWrites=true&w=majority`;

const client = new MongoClient(url);

async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);