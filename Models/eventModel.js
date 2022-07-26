const mongoose = require('mongoose');

const eventModel = new mongoose.Schema({
    event_Name: {
        type: String,
        unique: true,
        trim: true
    },
    eventDescription: {
        type: String,
        trim: true
    },
    star: {
        type:Date
    },
    end:{ 
        type:String
    },
    weekDay: {
        type:String
    },
    email: {
        type:String
    },
   
}, {
    timestamps: true
});

module.exports = mongoose.model('event', eventModel); 