const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const confing = require('./config/config')


const app =  express()

mongoose.connect(`mongodb://${confing.dbUser}:${confing.dbPassword}@ds133814.mlab.com:33814/gwallet`,{ useNewUrlParser: true },(err)=>{
    if (err) {
        console.log(`Mcod:.......................v1.0 ${err}`);
    } else {
        console.log(`mlab DB is runing.......`);
    }
})


app.use(
    bodyParser.json(),
    bodyParser.urlencoded({extended:false}),
    morgan('dev'),
    cors()
)

const userRouters = require('./routes/user.routes')
const marketRouters = require('./routes/marketCap.routes')


app.use('/api/accounts',userRouters)
app.use('/api/market',marketRouters)




app.listen(process.env.PORT || 3090 ,()=>{
    console.log('node.js server is runing........');
})