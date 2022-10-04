const mongoose = require('mongoose');

const connectToDataBase = function () {
    mongoose.connect(process.env.DB_URI).then((data)=> {
        console.log(`MongoDb connected to ${data.connection.host}`);
    })
}

module.exports = connectToDataBase;
  

