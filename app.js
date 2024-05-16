const express = require('express')
const app = express()
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const logger = require('./middlewares/logger')

app.use(express.static('public'));
app.set('view engine', 'ejs');

const homeRoute = require('./routes/homeRoute')
const aboutRoute = require('./routes/aboutRoute')
const contactRoute = require('./routes/contactRoute')
const addMealRoute = require('./routes/addMealRoute')
const newLetterRoute = require('./routes/newLetterRoute')

app.use(logger);
app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/addMeal', addMealRoute);
app.use('/newsletter', newLetterRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})