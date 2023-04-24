require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const AuthRoutes = require('./routes/authRoute')

const app = express()

//middleware
app.use(express.json())
app.use(morgan('dev'))

//routes
app.use('/api/v1/auth',AuthRoutes)


//rest api
app.get('/',(req,res)=>{
    res.send("<h1>DR_ON_CLICK</h1>")
})

//connect to db
mongoose.connect(process.env.MONG_URI)
.then(()=>{
    //listen for requests
    app.listen(process.env.PORT,()=>{
        console.log(`connected to db&listening on port ${process.env.PORT}`)
    })

})
.catch((err)=>{
    console.log(err)
})
