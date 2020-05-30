var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("mydb");
  var query = { address: "Park Lane 38" };
  dbo.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});

const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;
const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

    if (err) throw err;

    const db = client.db("testdb");

    db.stats((err, stats) => {

        if (err) throw err;

        console.log(stats);

        client.close();
    })
});

const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

    if (err) throw err;

    const db = client.db("testdb");

    db.collection('cars').find({}).toArray().then((docs) => {

        console.log(docs);

    }).catch((err) => {

        console.log(err);
    }).finally(() => {

        client.close();
    });
});

const mongo = require('mongodb');

const MongoClient = mongo.MongoClient;

const url = 'mongodb://localhost:27017';

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

    if (err) throw err;

    const db = client.db("testdb");

    db.collection('cars').find({}).toArray().then((docs) => {

        console.log(docs);

    }).catch((err) => {

        console.log(err);
    }).finally(() => {

        client.close();
    });
});

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

    if (err) throw err;

    const db = client.db("testdb");

    let collection = db.collection('cars');
    let query = { name: 'Volkswagen' }

    collection.findOne(query).then(doc => {

        console.log(doc);

    }).catch((err) => {

        console.log(err);
    }).finally(() => {

        client.close();
    });
});

const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  client.close();
});

const insertDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Insert some documents
  collection.insertMany([
    {a : 1}, {a : 2}, {a : 3}
  ], function(err, result) {
    assert.equal(err, null);
    assert.equal(3, result.result.n);
    assert.equal(3, result.ops.length);
    console.log("Inserted 3 documents into the collection");
    callback(result);
  });
}

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';
const client = new MongoClient(url, {useNewUrlParser: true});

// Use connect method to connect to the server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    client.close();
  });
});

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected correctly to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    findDocuments(db, function() {
      client.close();
    });
  });
});

const Algorithn = algorithm(db, callback, school1, deviceCount1, location1, school2, deviceCount2, location2) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });

  function distance(lat1, lon1, lat2, lon2, unit) {
  	if ((lat1 == lat2) && (lon1 == lon2)) {
  		return 0;
  	}
  	else {
  		var radlat1 = Math.PI * lat1/180;
  		var radlat2 = Math.PI * lat2/180;
  		var theta = lon1-lon2;
  		var radtheta = Math.PI * theta/180;
  		var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
  		if (dist > 1) {
  			dist = 1;
  		}
  		dist = Math.acos(dist);
  		dist = dist * 180/Math.PI;
  		dist = dist * 60 * 1.1515;
  		if (unit=="K") { dist = dist * 1.609344 }
  		if (unit=="N") { dist = dist * 0.8684 }
  		return dist;
  	}
  }

  if(deviceCount1 =~ deviceCount2){
    return pairing;
  }
}

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Find some documents
  collection.find({'a': 3}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs);
    callback(docs);
  });
}

const updateDocument = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Update document where a is 2, set b equal to 1
  collection.updateOne({ a : 2 }
    , { $set: { b : 1 } }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Updated the document with the field a equal to 2");
    callback(result);
  });
}

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    updateDocument(db, function() {
      client.close();
    });
  });
});

async function findCar() {

    const client = await MongoClient.connect(url, { useNewUrlParser: true })
        .catch(err => { console.log(err); });

    if (!client) {
        return;
    }

    try {

        const db = client.db("testdb");

        let collection = db.collection('cars');

        let query = { name: 'Volkswagen' }

        let res = await collection.findOne(query);

        console.log(res);

    } catch (err) {

        console.log(err);
    } finally {

        client.close();
    }
}

findCar();

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

    if (err) throw err;

    const db = client.db("testdb");

    let query = { price: { $gt: 30000 } };

    db.collection('cars').find(query).toArray().then((docs) => {

        console.log(docs);

    }).catch((err) => {

        console.log(err);
    }).finally(() => {

        client.close();
    });
});

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

   if (err) throw err;

   const db = client.db("testdb");

   let query = { $and: [{ price: { $gt: 20000 } }, { price: { $lt: 50000 } }] };

   db.collection('cars').find(query).toArray().then((docs) => {

      console.log(docs);
   }).catch((err) => {

      console.log(err);
   }).finally(() => {

      client.close();
   });
});

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

   if (err) throw err;

   const db = client.db("testdb");

   db.collection('cars').find({}).project({_id: 0}).toArray().then((docs) => {

      console.log(docs);
   }).catch((err) => {

      console.log(err);
   }).finally(() => {

      client.close();
   });
});

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

   if (err) throw err;

   const db = client.db("testdb");

   let myagr = [{$group: {_id: 1, all: { $sum: "$price" } }}];

   db.collection('cars').aggregate(myagr).toArray().then((sum) => {

      console.log(sum);
   }).catch((err) => {

      console.log(err);
   }).finally(() => {

      client.close();
   });
});

MongoClient.connect(url, { useNewUrlParser: true }, (err, client) => {

    if (err) throw err;

    const db = client.db("testdb");

    let myagr = [
        { $match: { $or: [{ name: "Audi" }, { name: "Volvo" }] } },
        { $group: { _id: 1, sum2cars: { $sum: "$price" } } }
    ];

    db.collection('cars').aggregate(myagr).toArray().then((sum) => {

        console.log(sum);
    }).catch((err) => {

        console.log(err);
    }).finally(() => {

        client.close();
    });
});

const removeDocument = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('documents');
  // Delete document where a is 3
  collection.deleteOne({ a : 3 }, function(err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    console.log("Removed the document with the field a equal to 3");
    callback(result);
  });
}

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'myproject';

const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    updateDocument(db, function() {
      removeDocument(db, function() {
        client.close();
      });
    });
  });
});

const indexCollection = function(db, callback) {
  db.collection('documents').createIndex(
    { "a": 1 },
      null,
      function(err, results) {
        console.log(results);
        callback();
    }
  );
};

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

const dbName = 'myproject';

const client = new MongoClient(url);
// Use connect method to connect to the server
client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);

  insertDocuments(db, function() {
    indexCollection(db, function() {
      client.close();
    });
  });
});
