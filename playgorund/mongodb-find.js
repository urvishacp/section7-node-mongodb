/*const MongoClient = require('mongodb').MongoClient;*/

const {MongoClient, ObjectID} = require('mongodb');

/*var obj = new ObjectID();
 console.log(obj);*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect mongodb server.');
    }
    console.log('database connected');
    const db = client.db('TodoApp');

  /*  db.collection("Users").find().toArray().then((docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log("unable to fetch todos", err);
    });*/

     db.collection("Users").find({
         _id: new ObjectID('5c29dce2579e473aa8dcffc6')
     }).toArray().then((docs) => {
     console.log("Todos");
     console.log(JSON.stringify(docs,undefined,2));
     }, (err) => {
     console.log("unable to fetch todos", err);
     });

    db.collection("Users").find({name: 'Urvisha Patel'}).toArray().then((docs) => {
        console.log("Todos");
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log("unable to fetch todos", err);
    });

    db.collection("Users").find().count().then((count) => {
        console.log(`Total Users: ${count}`);
    }, (err) => {
        console.log("unable to count totals", err);
    });

    client.close();
});