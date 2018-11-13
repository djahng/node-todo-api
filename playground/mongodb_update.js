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

  // findOneAndUpdate
  // db.collection('Todos')
  //   .findOneAndUpdate({
  //     _id: new ObjectID('5beb52dc064e9f0090645d9b')
  //   }, {
  //     $set: {
  //       completed: true
  //     }
  //   }, {
  //     returnOriginal: false
  //   })
  //   .then(res => console.log(res));

  db.collection('Users')
    .findOneAndUpdate({
      _id: new ObjectID('5beb2aff064e9f0090645aa3')
    }, {
      $inc: {
        age: 1
      },
      $set: {
        name: 'Angela'
      }
    }, {
      returnOriginal: false
    })
    .then(res => console.log(res));

  // client.close();
});
