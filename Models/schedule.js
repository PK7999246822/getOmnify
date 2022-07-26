const mongoose = require('mongoose');

const scheduleModel = new mongoose.Schema({
    schedules: {
        type:String
    },
    event: {
        type:String
    },
    start: {
        type:String
    },
    end: {
        type:String
    },
    weekDay: {
        type:String
    },
    email: {
        type:String
    },
    

}, {timestamps: true});

module.exports = mongoose.model('schedule', scheduleModel); 