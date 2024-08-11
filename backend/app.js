require('./src/db/mongoose');
const path = require('path'); // Add this line at the top of your file

const multer = require('multer');
const upload = multer({ dest: 'uploads/' });


const cors = require('cors');
const express = require('express');
const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.json());

// app.use(cors())

const env = require('dotenv');
env.config({path:__dirname + '/env/.env'});
const port = process.env.PORT;

app.use(express.json());
const allowedDomains = "http://localhost:3000";
app.use(cors({
    credentials:true,
    origin:function (origin, callback) {
        // bypass the requests with no origin
        if (!origin) return callback(null, true);
        if (allowedDomains.indexOf(origin) === -1) {
            let msg = `This site ${origin} does not have an access. Only specific domains are allowed to access it.`;
            return callback(new Error(msg), false);
        }
        return callback(null, true);
    }
}))

// Import and use resource routes
const resourceRoutes = require('./src/routes/resourceAllocatorRoutes');
app.use('/api/', resourceRoutes);

const authRoutes = require('./src/routes/authRoutes');
app.use('/api/auth', authRoutes);



const postRoutes = require('./src/routes/posts');
app.use('/api/post', postRoutes);
const chatbotRoutes = require('./src/routes/chatBotRoute');
app.use('/api', chatbotRoutes);

app.all("/*",(req,res)=>{
    res.status(404).send("page not found");
});

app.use('/uploads', express.static(path.join(__dirname, '../uploads')));


//const port = process.env.PORT

app.listen(port,() => {
    console.log("server running on port ", port);
})
