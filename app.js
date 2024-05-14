const express = require('express')
const app = express()
const path = require('path');

app.use(express.static('public'));
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

const homeRoute = require('./routes/homeRoute')
const aboutRoute = require('./routes/aboutRoute')
const contactRoute = require('./routes/contactRoute')

app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})