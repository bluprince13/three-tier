const express = require("express");
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
var path = require("path");
const keys = require("./config/keys")
require('./models/user')

mongoose.connect(keys.mongoURI)
const User = mongoose.model('user')

const app = express();
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);

app.get("/", function(req, res) {
    User.find({}, function(err, data) {
        const users = data.map(record => record.name)
        res.render('index', {users: users});
     })
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post("/", (req, res) => {
    new User ({name: req.body.name}).save()
    console.log(req.body.name)
	res.redirect("/");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));