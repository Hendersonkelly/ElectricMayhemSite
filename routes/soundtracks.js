const express = require('express');

const router = express.Router() 
const dataFile = require('../data/soundtracks.json')

let soundtrackList = dataFile.soundtracks

router.get("/soundtracks", (req, res) => {
  res.render('soundtracks', {
    PageTitle: 'Soundtracks --Movie',
    soundtrack:soundtrackList
  })
})

router.get('/soundtracks/:soundtracksID', (req,res) => {
    let shortname = req.params.soundtracksID
    let movie =[]

    soundtrackList.forEach(soundtracksObj =>{
        if(soundtracksObj.shortName == shortname){
            movie.push(soundtracksObj)
        }

    })
        res.render('soundtracks', {
            soundtrack : movie,
            PageTitle: `Soundtracks -- ${movie[0].albumName}`
        })
})

module.exports = router