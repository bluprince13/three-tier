const express = require('express')
const bodyParser= require('body-parser')
const app = express()
const port = 3000

app.use(express.static('public'));
app.get('/', function(req, res){
    res.sendFile('index.html');
  }); 

app.use(bodyParser.urlencoded({extended: true}))

app.post('/', (req, res) => {
console.log(req.body)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))