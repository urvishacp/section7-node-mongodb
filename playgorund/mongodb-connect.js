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

    /*db.collection('todos').insertOne({
     text: 'something text',
     completed: false
     }, (err,result) => {
     if(err) {
     return console.log('unable to insert record', err);
     }
     console.log(JSON.stringify(result.ops, undefined, 2));
     });
     */

 /*   db.collection('Users').insertOne({
        name: 'Urvisha Patel',
        age: 28,
        location: 'Ahmedabad',
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert record', err);
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });*/
    client.close();
});