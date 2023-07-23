const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const routes = require('../src/routes/routes');
const authMiddleware = require('./middlewares/authMiddleware');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb://127.0.0.1:27017/TellUs', () => console.log('successful database connection'));

const app = express();

app.use(cors());

app.use(fileUpload());

app.use(bodyParser.urlencoded({
    extended: true,
}));
app.use(bodyParser.json());

app.use(express.static('src/public'));

app.use(cookieParser());

app.use(express.urlencoded({ extended: false }));

app.use(authMiddleware.authentication);

app.use(routes);

app.listen(3000, () => console.log('Server started'));
