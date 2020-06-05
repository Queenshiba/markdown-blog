// create server, get express from the library
const express = require('express')
// make access to article.js
const articleRouter = require('./routes/article')
// calling from express and as function
const app = express()

// set view engine to ejs
app.set('view engine', 'ejs')

// tell app to use this router
app.use('/articles', articleRouter)

// create a route, send to the user
app.get('/', (req,res) => {
    const articles = [{
        title: 'Test Aritcle',
        createdAt: new Date(),
        description: 'test description'
    },
    {
        title: 'Test Aritcle 2',
        createdAt:  new Date(),
        description: 'test description'
    }]
    // res.send('Hello World') this is addting texts everytime instead
    res.render('index', { articles: articles }) // pass it the path to the view we want
})

// pass in a port to start app
app.listen(5000)