const express = require('express');
const app = express();
const parser = require('body-parser')
const cors = require('cors');
const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_router.js');

app.use(cors());
app.use(parser.json())

MongoClient.connect('mongodb://localhost:27017')
  .then((client) => {
    const db = client.db('project');
    const historicalFiguresCollection = db.collection('historical_figures');
    const historicalFiguresRouter = createRouter(historicalFiguresCollection);
    app.use('/api/historical_figures', historicalFiguresRouter);
  })
  .catch(console.err);

app.listen(3000, function () {
  console.log(`Listening on port ${ this.address().port }`);
});
