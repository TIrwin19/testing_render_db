const express = require('express')
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

// Create a GET route that listens for the user to visit the root address/domail
app.get('/', (request, response) => {
    response.send('Hello World')
})

app.get('/api/:user_id', (req, res) => {
    console.log(req.params)
    const id = req.params.user_id

    // Pull the user's object from the data array by the id property
    const user = data.find((userObj) => {
        if (userObj.id == id) return true
    })

    if (user) {
        return res.json(user)
    }
    console.log(user)

    return res.json({
        message: 'User not found matching that .id'
    })
})

app.get('/about', (req, res) => {
    res.send('<h1>About Me</h1>')
})

app.get('/data', (req, res) => {
    const queryParams = req.query

    // Create an empty object 
    const obj = {}
    // If they request the (name: 'true'), then we add the property name to the object
    if (queryParams.name === 'true') {
        obj.name = 'JD'
    }

    // If they request the age (age: 'true'), then we add the property age to the object
    if (queryParams.age === 'true') {
        obj.age = 44
    }

    // Send the completed objest back in the response
    res.json(obj)
})

// Start the server - Tell the server to start listening for routes to be visited
// 
app.listen(PORT, () => {
    console.log('Server running on port', PORT)
})