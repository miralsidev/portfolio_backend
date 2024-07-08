require("dotenv").config()
const mongodbConnection = require("./db")
const express = require('express')
const port = process.env.PORT
const app = express()
app.use(express.json())
const ContactRouter = require("./Routers/Contact")
const cors = require('cors');
app.use(cors());
app.use("/Contact",ContactRouter)
mongodbConnection.then(()=>{
    app.listen(port, () => console.log(`Example app listening on port ${port}..!`))
}).catch((error)=>{
  console.log('connect error = ',error);

})  