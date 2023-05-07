const express = require('express')
const app = express()

// app.get
// app.post
// app.delete
// app.patch

app.set('view engine', 'ejs')
// use middleware everywhere use it at the top of server, otherwise use it in other endpoints
app.use(logger)

app.get('/', logger, logger, (req, res) => {
    res.render('index', {text:'world'})
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

// middleware function
function logger(req, res, next) {
    console.log(req.url)
    next()
}



app.listen(3000)