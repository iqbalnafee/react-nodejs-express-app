const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv  = require('dotenv');
const routeUrls = require('./routes/routes');
const cors = require('cors');

const connectDB = require('./routes/connect');


dotenv.config();

// const db = config.get('mongodb+srv://reactNodejs:reactNodejs123456@contactkeeper.srtmq.mongodb.net/mytable?retryWrites=true&w=majority');


mongoose.connect(process.env.DATABASE_ACCESS, () => {
    
    console.log('Database Connected');
});


//connectDB();

const PORT = 4000;

app.use(express.json());

app.use(cors());

app.use('/app',routeUrls);

app.listen(PORT, (req,res)=> {

    console.log('SERVER is up and running at port '+PORT );
});