
const mongoose = require('mongoose');

const { stringify } = require('querystring');

const appointmentsSchema = new mongoose.Schema({
    VisitorName:{
        type: String,
        required: true
    },
    HostName:{
        type: String,
        required: true
    },
    Purpose:{
        type: String,
        required: true
    },
    Date:{
        type: String,
        required: true
    },
    Time:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('appointments', appointmentsSchema);