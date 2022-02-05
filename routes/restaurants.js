var express = require('express');
var router = express.Router();

const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://abubakar2000:abubakar2000@cluster0.jm8lx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("restaurantdb").collection("restaurants");
  client.close();
});

/* GET users listing. */
router.get('/', function (req, res, next) {
  client.connect(err => {
    const collection = client.db("restaurantdb").collection("restaurants");

    if (req.query.sortBy) {
      if (req.query.sortBy === "ASC") {
        collection.find().toArray();
        // client.close();
        res.send("OK")
      } else if (req.query.sortBy === "DESC") {
        console.log("Sort by sent desc");
      }
    }
    
  });
  // res.send(data);
});

router.get('/cuisine', (req, res) => {
  res.send(data)
});

router.get('/cuisine/:cuisine', (req, res) => {
  res.send("Cusine " + req.params.cuisine)
});

module.exports = router;
