const express = require('express');

const router = express.Router() 

const dataFile= require('../data/data.json') // this gives us an obj of information


router.get('/', (req, res) => {

    res.render('index', {
        
        
    })
    
})

module.exports = router