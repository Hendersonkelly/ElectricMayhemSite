const express = require('express');

const router = express.Router() 

const dataFile = require('../data/data.json')

let performanceList = dataFile.performances

router.get('/performances', (req, res) => {
    let trackListArr = []
    let artworkArr= []
    performanceList.forEach(performanceObj => {
       
        trackListArr = trackListArr.concat(performanceObj.tracklist)
        artworkArr = artworkArr.concat(performanceObj.artwork)   
     })
        
    res.render('performances', {
        artworkArr :[],
        trackListArr :[],
        pageTitle : 'Muppet Show --Episode',
        perf : performanceList


    })
})



router.get('/performances/:performancesID',(req,res) =>{
    let shortname = req.params.performancesID
    let show = []
    
    performanceList.forEach(performanceObj =>{
        if(performanceObj.shortName == shortname){
            show.push(performanceObj)
        }
    })
    console.log(show);
    res.render('performances', {
        perf: show,
        pageTitle: `Muppet Show -- ${show[0].performanceName}`,
        summary: show[0].summary,
        video: show[0].albumListen,
        song: show[0].tracklist
    })
})

module.exports = router