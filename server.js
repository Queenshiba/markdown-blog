// create server, get express from the library
const express = require('express')
// import mogodb 
const mongoose = require('mongoose')
// make access to article.js
const articleRouter = require('./routes/articles')
// calling from express and as function
const app = express()

// connect to mongodb 
mongoose.connect('mongodb://localhost/blog', { useNewUrlParser: true, useUnifiedTopology: true })



// set view engine to ejs
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))


// create a route, send to the user
app.get('/', (req,res) => {
    // res.send('test')
    const articles = [{
        title: 'Test Aritcle',
        createdAt: Date.now(),
        description: 'test description'
    },
    {
        title: 'Test Aritcle 2',
        createdAt: Date.now(),
        description: 'test description'
    }]
    // res.send('Hello World') this is addting texts everytime instead
    res.render('articles/index', { articles: articles }) // pass it the path to the view we want
})

// tell app to use this router
app.use('/articles', articleRouter)

// pass in a port to start app
app.listen(5000)