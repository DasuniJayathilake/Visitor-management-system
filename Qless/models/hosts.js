
const mongoose = require('mongoose');

const { stringify } = require('querystring');

const hostsSchema = new mongoose.Schema({
    Name:{
        type: String,
        required: true
    },
    Department:{
        type: String,
        required: true
    },
    ContactNo:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required: true
    },
    NIC:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('hosts', hostsSchema);