const eventModel = require('../Models/eventModel');
const scheduleModel = require('../Models/schedule');
const moment = require('moment');

const Eventhandler = async (req, res) => {

    let start = moment();
    let end = moment().add(60, 'd');

    var scheduledEvent = [];

    let temp = start.clone().day(req.body.weekDay);
    if (temp.isAfter(start, 'd')) {
        scheduledEvent.push(temp.format('YYYY-MM-DD'));
    }
    while (temp.isBefore(end)) {
        temp.add(7, 'days');
        scheduledEvent.push(temp.format('YYYY-MM-DD'));
    }



    let Obj = {
        schedules: scheduledEvent,
        event: req.body.event,
        start: req.body.start,
        end: req.body.end,
        email: req.body.email
    }
    try {
        const Response = await eventModel.create(req.body);
        await scheduleModel.create(Obj);
        return res.status(201).send({
            status: true,
            message: 'Event created',
            data: Response
        });
    }
    catch (err) {

        return res.status(500).send({ ERR: err.message })
    }
}

let findSchedule = async (req, res) => {
    try {

        const schedulesResponce = await scheduleModel.find({
            email: req.decodedToken
        });

        if (!schedulesResponce) {
            return res.status(404).send({
                status: false,
                message: 'No event fount'
            });
        }
        return res.status(200).send({
            status: true,
            message: 'Scheduled events found',
            data: schedulesResponce
        });
    }
    catch (err) {

        return res.status(500).send({ ERROR: err.message })
    }
}



module.exports.Eventhandler = Eventhandler
module.exports.findSchedule = findSchedule


