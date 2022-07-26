const express = require('express');
const router = express.Router();
const userController = require('../Controller/userController');
const eventController = require('../Controller/eventController');
const {mid} = require('../middleware/middleware');


router.post('/register', userController.createUser);
router.post('/login', userController.loginUser);

router.post('/event', mid, eventController.Eventhandler);

router.get('/schedule', mid, eventController.findSchedule);



module.exports = router; 