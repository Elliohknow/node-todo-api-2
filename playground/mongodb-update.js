// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59df27b9c422dd12f095cf58')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result) => {
  //   console.log(result);
  // });
  
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a1224f158f9942e349f43b4')
  }, {
    $set: {
      name: "Elliott"
    },
    $inc: {
      age: 2
    }
  }, {
    returnOriginal: false
  }).then((results) => {
    console.log(JSON.stringify(results, undefined, 2));
  });
  
  // db.close();
});
