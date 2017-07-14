import express from 'express';
import bodyParser from 'body-parser';

// adding Mongo as database and then loading models
const config = require('./config/index.json');
require('./models/index').connect(config.dbUri);

const app = express();


app.use(bodyParser.json());

const users = require('./routes/users');
app.use('/api/users', users);

const auth = require('./routes/auth');
app.use('/api/auth', auth);


app.listen(8080, () => console.log("Running on localhost:8080"));
