const { Router } = require('express')
const router = Router()
const fetch = require('node-fetch')

router.get('/', async (req, res) => {
        const nasaApiMars = await fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=3Ya1hEsiIh4ayBiD0kkuAFqnHZI3wtRFxLBVrpNp')
        const onlyTwentyFive = await nasaApiMars.json()
        let mastCamera = onlyTwentyFive.photos
        res.json({mastCamera})
})

module.exports = router
