const express = require('express')
const colors = require("colors");
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()
const connectDB = require('./db/index')
const router = require('./router/index')
const morgan = require('morgan')
require('dotenv').config();
const port = 3000


app.use(cors())
app.use(morgan("dev"))
app.use(express.json());

app.use(router)

    connectDB().then(()=>{
        app.listen(port, () => {
            console.log(`App listening on port ${port}`.bgCyan.white)
          })
    }).catch((err)=>{
        console.log(err);
    })


    

