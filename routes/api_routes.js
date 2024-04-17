const router = require('express').Router()
const { v4: generateID } = require('uuid')
// const data = require('../db/users.json')
const fs = require('fs/promises')

async function getData(){
    const data = await fs.readFile('./db/users.json', 'utf8')

    return JSON.parse(data)
}

// Get all users
router.get('/users', async (req, res) => {
    const data = await getData()
    const nameQuery = req.query.name?.toLowerCase()

    if (nameQuery) {
        const user = data.find(uObj => uObj.name.toLowerCase() === nameQuery)

        return res.json(user)
    }

    res.json(data)
})

// Get user by ID
router.get('/users/:id', async (req, res) => {
    const data = await getData()
    const paramId = req.params.id

    const user = data.find(uObj => uObj.id == paramId)
    res.json(user || { message: 'User not found by that ID' })
})

// POST add a user
router.post('/users/form', (req, res) => {
    console.log(req.body)

    res.redirect('/')
})

// Add a user
router.post('/users', async (req, res) => {
    const id = generateID()
    const data = await getData()

    data.push({
        ...req.body,
        id: id
    })

    await fs.writeFile('./db/users.json', JSON.stringify(data, null, 2))

    res.json({ message: 'User has been added!' })
})

// Delete a user
router.delete('/users/:id', async (req, res) => {
    const users = await getData()
    const id = req.params.id
    const filtered = users.filter(uObj => uObj.id !== id)

    await fs.writeFile('./db/users.json', JSON.stringify(filtered, null, 2))

    res.json({
        message: `User with ID of ${id} deleted successfully`
    })

    resjson({
        message: 'A user with that ID cannot be found.'
    })
})

module.exports = router