const express = require('express');
const mongoose = require('mongoose');
const config = require('./config/dev');
const Fakedb = require('./fake-db');
const rentalRouter = require('./routes/rental');

const app = express();
mongoose.connect(config.dbUri,{ useNewUrlParser: true ,useUnifiedTopology: true}).then(()=>{
    const fakedb = new Fakedb();
    fakedb.seedDB();
});

app.use('/api/v1/rentals',rentalRouter);

const PORT = process.env.PORT || 3001;

app.listen(PORT,function(){
    console.log(`Server is up and running at port ${PORT}`);
})

