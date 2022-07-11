const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const getData = async () => {
  const results = await client.connect();
  const db = results.db("shop");
  return db.collection("mobileData");
};

module.exports = getData;
