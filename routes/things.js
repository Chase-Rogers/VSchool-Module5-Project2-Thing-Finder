const express = require('express')
const thingsRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

// Fake Data
const things = [
    { food: 'orange', type: 'fruit', _id: uuidv4() },
    { food: 'cake', type: 'other', _id: uuidv4() },
    { food: 'steak', type: 'meat', _id: uuidv4() },
    { food: 'carrot', type: 'vegtable', _id: uuidv4() },
    { food: 'bread', type: 'grain', _id: uuidv4() },
    
]

// Get all and post
thingsRouter.route('/')
    .get((req, res) => {
        res.send(things)
    })
    .post((req, res) => {
        const newthing = req.body
        newthing._id = uuidv4()
        things.push(newthing)
        res.send(`Successfully added ${newthing.food} to the shopping list!`)
    })

    thingsRouter.get('/search', (req, res) => {
        const type = req.query.type
        const filteredthings = things.filter(food => food.type === type)
        res.send(filteredthings)
    })

    module.exports = thingsRouter