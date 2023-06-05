const express = require('express');

const router = express.Router() 
const dataFile = require('../data/albums.json')

let albumstrackList = dataFile.albums

router.get("/albums", (req, res) => {
  res.render('albums', {
    PageTitle: 'Albums',
    albums:albumstrackList
  })
})

router.get('/albums/:albumsID', (req,res) => {
    let shortname = req.params.albumsID
    let vinyl =[]

    albumstrackList.forEach(albumsObj =>{
        if(albumsObj.shortName == shortname){
            vinyl.push(albumsObj)
        }

    })
        res.render('albums', {
            albums : vinyl,
            PageTitle: `Albums -- ${vinyl[0].albumName}`
        })
})

module.exports = router