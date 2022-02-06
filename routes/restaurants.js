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
        // localhost:3000/restaurants?sortBy=ASC
        const uri = "mongodb+srv://abubakar2000:abubakar2000@cluster0.jm8lx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(err => {
          const collection = client.db("restaurantdb").collection("restaurants");
          collection.find().sort({ restaurant_id: 1 }).toArray().then(_ => {
            console.log(_);
            res.send(_)
          });
          // client.close();
        });
      } else if (req.query.sortBy === "DESC") {
        // localhost:3000/restaurants?sortBy=DESC
        console.log("Sort by sent desc");
        const uri = "mongodb+srv://abubakar2000:abubakar2000@cluster0.jm8lx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        client.connect(err => {
          const collection = client.db("restaurantdb").collection("restaurants");
          collection.find().sort({ restaurant_id: -1 }).toArray().then(_ => {
            console.log(_);
            res.send(_)
          });
          // client.close();
        });
      }
    } else {
      // localhost:3000/restaurants
      const uri = "mongodb+srv://abubakar2000:abubakar2000@cluster0.jm8lx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
      const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
      client.connect(err => {
        const collection = client.db("restaurantdb").collection("restaurants");
        collection.find().sort().toArray().then(_ => {
          console.log(_);
          res.send(_)
        });
        // client.close();
      });
    }

  });
  // res.send(data);
});

router.get('/cuisine', (req, res) => {

});

router.get('/cuisine/:cuisine', (req, res) => {


  const uri = "mongodb+srv://abubakar2000:abubakar2000@cluster0.jm8lx.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
  const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
  client.connect(err => {
    const collection = client.db("restaurantdb").collection("restaurants");
    collection.find(
      { cuisine: req.params.cuisine }
    ).toArray().then(_ => {
      console.log(_);
      res.send(_)
    });
    // client.close();
  });
});

module.exports = router;
