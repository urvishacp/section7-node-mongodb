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

    /*db.collection('Users').deleteMany({name: 'Urvisha Patel'}).then((result) => {
        console.log(result);
    });*/

    /*db.collection('Users').deleteOne({age: 22}).then((result) => {
        console.log(result);
    });*/

    /*db.collection('Users').findOneAndDelete({name: 'Urvisha Patel'}).then((result) => {
        console.log(result);
    });*/

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5c29dce072e09b3a9c03cf8a')}).then((result) => {
        console.log(result);
    });

    client.close();
});