const express = require("express");
const app = express();
const env =require('dotenv').config()
const PORT = process.env.port ||3000
app.use(express.json());

require("./dot.env")

// this is path to connect all files to eachOther
const router =require('./controller/index')
app.use("/",router)



//it is working on server 
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`);
})