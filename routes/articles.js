const express = require('express')
// this gives us a router that we can use to create views
const router = express.Router()

//
router.get('/new', (req, res) => {
    res.render('articles/new')
})

// need to tell app to use this router
module.exports = router