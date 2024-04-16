const express = require('express')
const path = require('path')

console.log(path.join(__dirname, './public/index.html'))

const app = express()
const PORT = 3333

const data = [
    {
        id: 1,
        name: 'JD',
        age: 44
    },
    {
        id: 2,
        name: 'Bob',
        age: 99
    },
    {
        id: 3,
        name: 'Sara',
        age: 26
    },
]

// Create a GET route for every file inside public
app.use(express.static('./public'))

// Create a GET route that listens for the user to visit the root address/domail
// app.get('/', (request, response) => {
//     response.sendFile(path.join(__dirname, './public/index.html'))
// })

// GET api route to send back the array of users
app.get('/api/users', (req, res) => {
    const nameQuery = req.query.name.toLowerCase()

        if(nameQuery){
            const user = data.find(uObj => uObj.name.toLowerCase() === nameQuery)

            return res.json(user)
        }

    res.json(data)
})

// Get api route to capture an idof a user and send back the matching user object from the data array
app.get('/api/users/:id', (req, res) => {
    const paramId = req.params.id

    const user = data.find(uObj => uObj.id == paramId)
    res.json(user || {message: 'User not found by that ID'})
})

// BONUS - if the user sends a name query param, find the user by name instead and send back the matching object


// Start the server - Tell the server to start listening for routes to be visited
// 
app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})