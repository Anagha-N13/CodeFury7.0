const mongoose = require('mongoose');
// const url = 'mongodb://127.0.0.1:27017/ieee'
require('dotenv').config({path:__dirname+"/../env/.env"})
const url = process.env.URL

mongoose.connect(url, { useNewUrlParser: true });
const con = mongoose.connection

con.on('open', () => {
    console.log('connected...')
})
con.on("error",(error)=>console.log(error))