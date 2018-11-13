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

  // deleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then(result => console.log(result));

  // deleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then(result => console.log(result.result));

  // findOneAndDelete
  // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then(result => console.log(result));

  // db.collection('Users').deleteMany({name: 'David'}).then(result => console.log(result.result));
  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5beb2b14064e9f0090645aab')
  }).then(res => console.log(res));

  // client.close();
});
