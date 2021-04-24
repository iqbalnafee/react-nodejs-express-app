const mongoose = require('mongoose');
const config = require('config');
//const db = config.get(process.env.DATABASE_ACCESS);



const connectDB = async () => {
    try {
      
      await mongoose.connect(process.env.DATABASE_ACCESS, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      });

    } catch (err) {
      console.log('MongoDB can not Connected... ');
      console.error(err.message);
      process.exit(1);
    }
  };

module.exports = connectDB;