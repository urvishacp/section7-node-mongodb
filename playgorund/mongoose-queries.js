const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {userModel} = require('./../server/models/user');

var id = '5c2b093f537fc120f9ce09fa1';

if(!ObjectID.isValid(id)) {
    console.log("Id not found.");
}

userModel.find({
 _id: id
}).then((usrs) => {
    console.log("Users: ", usrs);
});


userModel.findOne({
    _id: id
}).then((usr) => {
    console.log("User: ", usr);
});


userModel.findById(id).then((usrs) => {
    if (!usrs) {
        return console.log("Id not found");
    }
    console.log("User By ID: ", usrs);
}).catch((e) => console.log(e));