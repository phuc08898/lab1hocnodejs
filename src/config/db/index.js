const mongoose = require('mongoose');

async function connect() {
   try{
    await mongoose.connect('mongodb://localhost:27017/F8_Education_dev',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Connect to MongoDB successfully');
    } catch (error) {
        console.log('Connect to MongoDB failed');
    }
}
module.exports = { connect };



