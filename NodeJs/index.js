const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./config/db');
const routes = require('./routes/User');

app.use(cors());
app.use(bodyParser.json());
app.use(routes);
app.listen(8080, function () {
    console.log("listening on port 8080")
})