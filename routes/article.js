const express = require('express')
// this gives us a router that we can use to create views
const router = express.Router()

//
router.get('/', (req, res) => {
    res.send('In articles')
})

// need to tell app to use this router
module.exports = router