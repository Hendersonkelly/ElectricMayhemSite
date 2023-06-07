# ElectricMayhemSite

This was made in response to an assignment to create a band website with chat and commenting capabilities using the templating system EJS and routes. 

![homepageband](https://github.com/Hendersonkelly/ElectricMayhemSite/assets/126027193/9b73f7f0-3539-4aff-9377-3679917fec8a)

## Technologies Used
* HTML
* CSS
* EJS
* Socket io
* express


## Learnings and Challenges
I had alot of fun with my band choice and wanted to do something unexpected. It was a struggle to gather all the img and find the videos for the bands appearances and because of their long history with the muppets the pages holding the data became long very quickly. I chose to extend the project by not only listing albums but also their performances and movies they had particpated in.Keeping all the routes straight to GET the correct data and then moving through the data depending on the strucutre was challenging but overall successful. Here is a snippet of some of my routes:

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
## How it Works
You can navigate through the site by the type of performances in the drop down menu.

![dropdown](https://github.com/Hendersonkelly/ElectricMayhemSite/assets/126027193/61ebbcb6-4d20-48ec-a489-e82d4b10232d)
From there you will move to a page of a list of their performances and with a click you can see a specific performance with an embedded video.

![categoryband](https://github.com/Hendersonkelly/ElectricMayhemSite/assets/126027193/5f0b0919-cfa4-4d4f-9cb5-c5ad741a4bdc)

![detailband](https://github.com/Hendersonkelly/ElectricMayhemSite/assets/126027193/7b10436d-7bcf-4c9b-a1cf-62adf44e5b7a)

There is a comment page that allows you to post a comment to the site. 

![comment](https://github.com/Hendersonkelly/ElectricMayhemSite/assets/126027193/1eb51deb-c1ea-42ae-bf71-a6841a9642ac)

A chat feature also exits using socket io.
![chat](https://github.com/Hendersonkelly/ElectricMayhemSite/assets/126027193/e71eaf0d-abdc-4cbe-a55f-a3148f8a5043)

I had alot of fun making this I hope you enjoy.

