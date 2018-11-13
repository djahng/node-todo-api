// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

const dbName = 'TodoApp';

// const obj = new ObjectID();
// console.log(obj);
// console.log(obj.getTimestamp());

MongoClient.connect(`mongodb://localhost:27017/${dbName}`, { useNewUrlParser: true }, (err, client) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server.');
  }

  console.log('Connected to MongoDB server');
  const db = client.db(dbName);

  // db.collection('Todos').find({
  //   _id: new ObjectID('5beb2781064e9f0090645a28')
  // }).toArray().then((docs) => {
  //   console.log('Todos:');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }).catch(error => {
  //   console.log('Unable to fetch todos.\n', error);
  // });

  // db.collection('Todos').find().count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }).catch(error => {
  //   console.log('Unable to fetch todos.\n', error);
  // });

  db.collection('Users').find({
    name: 'Angela'
  }).toArray().then(docs => {
    console.log(docs);
  }).catch(error => {
    console.log(`Error: ${error}`);
  });

  client.close();
});
