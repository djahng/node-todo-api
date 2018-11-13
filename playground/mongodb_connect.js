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

  // db.collection('Todos').insertOne({
  //   text: 'Do something...',
  //   completed: false
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'David Jahng',
  //   age: 36,
  //   location: 'Canmore, Alberta'
  // }, (err, result) => {
  //   if (err) {
  //     return console.log('Unable to insert user', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  client.close();
});
