var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {toDoModel} = require('./models/todo');
var {userModel} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new toDoModel({
       text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});

app.post('/users', (req, res) => {
    var users = new userModel({
        email: req.body.email
    });
    users.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    });

});

app.listen(3000, () => {
    console.log("Starting on port 3000");
});

/*var newToDo = new TodoModel({
    text: "test11"
});

newToDo.save().then((doc) => {
    console.log("saved data", doc);
}, (e) => {
    console.log("Not able to save the data.", e);
});*/

/*
var otherToDo = new TodoModel({
    text: "this is test",
    completed: true,
    completedAt: 50
});

otherToDo.save().then((doc) => {
    console.log("saved data", doc);
}, (e) => {
    console.log("Not able to save the data.", e);
});*/



/*

var userData = new userModel({
   email: 'urvisha@commercepundit.com'
});

userData.save().then((doc) => {
    console.log("saved data in users");
    console.log(JSON.stringify(doc,undefined,2));
}, (err) => {
    console.log("not able to save data in Users", e);
});*/
