const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv  = require('dotenv');

dotenv.config();

mongoose.connect(process.env.DATABASE_ACCESS, () => {
    console.log('Database Connected');
});

const PORT = 4000;

app.listen(PORT, (req,res)=> {

    console.log('SERVER is up and running at port '+PORT );
});