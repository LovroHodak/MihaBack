require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/MihaBackShop', { useNewUrlParser: true }, { useUnifiedTopology: true })
    .then(() => {
        console.log('DB MihaBackShop connected')
    })
    .catch((err) => {
        console.log('Error: ', err)
})