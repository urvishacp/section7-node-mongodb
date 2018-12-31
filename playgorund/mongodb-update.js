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

    /*db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c29e7ca70de8e7f42a10adb')
    },{
        $set: {
            name: 'urvisha'
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });*/

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c29e87070de8e7f42a10add')
    },{
        $set: {
            name: 'uvp'
        },
        $inc: {
            age:2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

    client.close();
});