const express = require('express');

const morgan = require('morgan');
const homeRouter = require('./routes/homeRouter'); 
const amenitiesRouter = require('./routes/amenitiesRouter');
const contactusRouter = require('./routes/contactusRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/home', homeRouter);
app.use('/amenities', amenitiesRouter);
app.use('/contactus', contactusRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Welcome to Kenmar Apartment, Tacoma</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});