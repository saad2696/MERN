const mongoose = require('mongoose');


const ProductHomeSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    img:{
        type: String
    },
    incart: false
    });
    module.exports = mongoose.model('HomeProducts',ProductHomeSchema);



