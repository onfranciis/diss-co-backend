const { MongoClient } = require("mongodb");
const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

const connectDB = () => client.connect();

const dbReceive = async () => {
  await client.connect();
  const db = client.db("users");
  const collection = db.collection("user");
  const ReceivedData = await collection.find().toArray();
  // await client.close();
  return ReceivedData;
};

const dbSend = async (form) => {
  await client.connect();
  const db = client.db("details");
  const collection = db.collection("users");
  const ReceivedData = await collection.insertOne(form);
  // await client.close();
  const Response = ReceivedData?.acknowledged
    ? { sent: true }
    : { sent: false };
  return Response;
};

const loginDb = async (email, password) => {
  await client.connect();
  const db = client.db("details");
  const collection = db.collection("users");
  const ReceivedData = await collection
    .find({
      email: email,
      password: password,
    })
    .toArray();
  // await client.close();
  const Response = ReceivedData.length !== 0 ? { sent: true } : { sent: false };
  return Response;
};

const homeFetch = async (email) => {
  await client.connect();
  const db = client.db("details");
  const collection = db.collection("users");
  const ReceivedData = await collection
    .findOne({ email: email })
    .catch((err) => console.log(err));
  // await client.close();
  const Response =
    ReceivedData !== null ? ReceivedData : { image: null, name: null };
  return Response;
};

module.exports = { dbSend, dbReceive, connectDB, loginDb, homeFetch };
