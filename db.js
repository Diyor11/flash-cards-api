
const mongoose = require('mongoose');
const URL = 'mongodb+srv://Diyor12:Diyor122023@ecommerce.irphs38.mongodb.net/?retryWrites=true&w=majority'
// const URL = "mongodb+srv://diyor11:Diyor122023@cluster1.5xug2po.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";

module.exports = () => {
    mongoose.connect(URL)
        .then(() => console.log('Mongodb connect...'))
        .catch(e => console.log('Mongodb connect error !!!'))
}