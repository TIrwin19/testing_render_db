const express = require('express')
const app = express()
const PORT = process.env.PORT || 3333

require('dotenv').config()
const client = require('./db/client')

// Import router/routes
const api_routes = require('./routes/api_routes')

// Open json middlewear channel
app.use(express.json())

// Load our routes
app.use('/api', api_routes)

// Synch the models and connect the database
client.sync({ force: false })
  .then(() => {
    
    app.listen(PORT, ()=> {
      console.log('Server started on port', 3333)
    })

  })