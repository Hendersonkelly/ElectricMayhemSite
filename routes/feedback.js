const express = require('express')

const router = express.Router()

const fs = require('fs')

const feedback = require('../data/feedback.json')

router.use(express.json())
router.use(express.urlencoded({extended:true}))

//route to render the ejs page
router.get('/feedback', (req, res) => {
    res.render('feedback', {

    })
})

// route to get the messages from the json

router.get('/api',(req,res) => {
    res.json(feedback)
})

//how to submit a new message

router.post('/api', (req, res) => {

    // need to get the data from the header which we required at the top
    let{name, message}= req.body
    // put the new message at the beginning 
    
    feedback.unshift(req.body)

    //write the feedback to the file
    fs.writeFile('data/feedback.json', JSON.stringify(feedback), "utf8", err=>{
        if(err){
            res.status(423)
        }
    })


    //send back all the messages with new message attached

    res.json(feedback)
})



router.delete('/api/:id', (req,res) => {
    const {id}= req.params
    feedback.splice(id,1)
    fs.writeFile('data/feedback.json', JSON.stringify(feedback), "utf8", err=>{
        if(err){
            res.status(423)
        }
    })
    res.json(feedback)
})

module.exports = router