const router = require('express').Router()
const { v4: generateID } = require('uuid')
const data = require('../db/data')

// Get all users
router.get('/users', (req, res) => {
    const nameQuery = req.query.name?.toLowerCase()

    if (nameQuery) {
        const user = data.find(uObj => uObj.name.toLowerCase() === nameQuery)

        return res.json(user)
    }

    res.json(data)
})

// Get user by ID
router.get('/users/:id', (req, res) => {
    const paramId = req.params.id

    const user = data.find(uObj => uObj.id == paramId)
    res.json(user || { message: 'User not found by that ID' })
})

// POST add a user
router.post('/users/form', (req, res) => {
    console.log(req.body)

    res.redirect('/')
})

router.post('/users', (req, res) => {
    const id = generateID()

    data.push({
        ...req.body,
        id: id
    })

    res.json({ message: 'User has been added!' })
})


module.exports = router