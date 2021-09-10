const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/redstore');
const DB = `mongodb+srv://bluestar:bluestar123@cluster0.uucjt.mongodb.net/bluestar?retryWrites=true&w=majority`;

mongoose.connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(()=>{console.log("Database Connection established successfully!")})
    .catch(()=>{console.log("Database does not connected")});
    
mongoose.Promise = Promise;

mongoose.set('debug',true);

module.exports.Products = require('./product');
module.exports.Users = require('./user');