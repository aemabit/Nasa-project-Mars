if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const path = require("path")
const express = require("express")
const app = express()
const morgan = require("morgan")

// MIDDLEWARES
app.use(morgan('dev'))
app.use(express.json())

// ROUTES
app.use('/api/mast', require('./src/routes/mast'))
app.use('/api/nav', require('./src/routes/nav'))

// JUST FOR DEMO PURPOSES, PUT YOUR ACTUAL API CODE HERE
app.get('/api/demo', (request, response) => {
    response.json({
      message: "Hello from server.js"
    })
})

// END DEMO
if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')))
  // Handle React routing, return all requests to React app
  app.get('*', (request, response) => {
    response.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}
  
const port = process.env.PORT || 8000
app.listen(
  port,
  () => { console.log(`API listening on port ${port}...`) }
)