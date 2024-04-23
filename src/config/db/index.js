const mongoose = require('mongoose');

async function connect(){
    try {
        await mongoose.connect('mongodb://localhost:27017/Thanhhaudb',
        {
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log('đã kết nối tới mongodb');
    } catch (error) {
        console.log('Kết nối db thất bại');
    }
}

module.exports = {connect};