const ejs = require('ejs')
const express = require('express')

const Article = require('./../models/article')
// this gives us a router that we can use to create views
const router = express.Router()

//
router.get('/new', (req, res) => {
    res.render('articles/new', { article: new Article() })
    // res.send('test')
})

router.get('/:id', async (req, res) => {
    const article = await Article.findById(req.params.id)
    if(article == null) res.redirect('/')
    res.render('articles/show', { article: article})
})

router.post('/', async (req, res) => {
const article = new Article({
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
})
try {
    article = await article.save()
    res.redirect(`/articles/${article.id}`)
} catch(e) {
    console.log(e)
    res.render('articles/new', { article: article })
}

})


// need to tell app to use this router
module.exports = router
