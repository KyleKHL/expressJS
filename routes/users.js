const express = require('express')
const router = express.Router()



router.get('/', (req, res) => {
    res.send('User List')
})

router.get('/new', (req, res) => {
    res.send('User New Form')
})

router.post('/', (req, res) => {
    res.send('Create User')
})

// dynamic route /:id --> make sure other routes are above dynamic route, otherwise it wont read

// use router.route to define route in one location and all requests get, put and delete to the one route
router
    .route('/:id')
    .get((req, res) => {
        console.log(req.user)
        res.send(`Get User with ID ${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`Update User with ID ${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`Delete User with ID ${req.params.id}`)
    })

// the same as the below:

// router.get('/:id', (req, res) => {
//     res.send(`Get User with ID ${req.params.id}`)
// })

// router.put('/:id', (req, res) => {
//     res.send(`Update User with ID ${req.params.id}`)
// })

// router.delete('/:id', (req, res) => {
//     res.send(`Delete User with ID ${req.params.id}`)
// })

const users = [{ name: "Kyle"}, { name: "Sally"}]

router.param('id', (req, res, next, id) => {
    req.user = users[id]
    next()
})

module.exports = router