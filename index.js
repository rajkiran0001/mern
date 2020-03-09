var express = require('express')
var app = express()
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rajkiran111:rajkiran.o@mycluster-rc5ys.mongodb.net/test?retryWrites=true&w=majority',
{useNewUrlParser: true}).then(() => console.log('DB connected')).catch(err => console.error(err));

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(5000)