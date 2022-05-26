const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
// const colore = require("colors");
const fileUpload = require('express-fileupload');
const connectDB = require('./db/db');
const app = express();
require('dotenv').config();
const { errorHandler } = require('./middleware/errorHandler');

//middleware
app.use(cors());
app.use(morgan('tiny'));
app.use(express.json({ extended: false }));
app.use(express.urlencoded({ extended: false }));

app.use(errorHandler);

// conncet database
connectDB();

const contentRoute = require('./routes/contentRoute');

//routes
app.use('/api', contentRoute);

//server
const port = process.env.PORT || 1993;
const host = '0.0.0.0';
app.listen(port, host, () => {
	console.clear();
	console.log(`App is running at port ${port}`);
});
