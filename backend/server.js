const express = require('express');


const app = require('./app');

const connectToDataBase = require('./config/database');


connectToDataBase();
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
})
