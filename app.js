const express = require('express')
const app = express()
const path = require('path');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(express.static('public'));
app.set('view engine', 'ejs');
// app.set('views', path.join(__dirname, 'views'));

const homeRoute = require('./routes/homeRoute')
const aboutRoute = require('./routes/aboutRoute')
const contactRoute = require('./routes/contactRoute')
const addMealRoute = require('./routes/addMealRoute')

app.use('/', homeRoute);
app.use('/about', aboutRoute);
app.use('/contact', contactRoute);
app.use('/addMeal', addMealRoute)

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})