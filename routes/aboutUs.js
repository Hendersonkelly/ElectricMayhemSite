const express = require('express')

const router = express.Router()
router.use(express.json())
router.use(express.urlencoded({extended:true}))

const feedback = require('../data/feedback.json')



//route to render the ejs page
router.get('/aboutUs', (req, res) => {
    res.render('aboutUs', {

    })
})


module.exports = router