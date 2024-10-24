const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.PORT
const db = require('./models')
app.use(express.json());
//routers
const postsRoute = require('./routes/posts.js')
app.use('/posts' , postsRoute);

//end of routers


db.sequelize.sync().then(()=>{
    
    app.listen(port , ()=>{
        console.log(`server is lestining on port ${port}`)
    })

}).catch((err)=>{
    console.log(err)
})
