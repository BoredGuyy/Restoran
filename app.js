const express = require('express')
const app = express()

app.use(express.static('public'));

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