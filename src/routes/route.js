const express = require('express');
//const externalModule = require('./logger')
//const welcome = require('../logger/logger')
const logger = require('../logger/logger')
const util = require('../util/helper')
const router = express.Router();
const validator = require('../validator/formatter')

// router.get('/test-me', function (req, res) {
//     //console.log'welcome to my application.i am snehal jadhao and a part of functionup radon batch "
//     //'+externalModule.endpoint)
//     // console.log('The current batch is '+externalModule.name)
//     // externalModule.log()
//     // console.log('the function up trainee is'+externalModule.ankush)
//     // console.log("welcome" +externalModule.welcome)
//     logger.welcome()
//     res.send('My first ever api!')

//});

router.get('/test-me1', function (req, res) {
    logger.welcome()
    util.printDate()
    util.printMonth()
    util.getBatchInfo()
    validator.trim()
    validator.string1()
    validator.string2()
    res.send('My second ever api!')
});

// router.get('/test-me2', function (req, res) {
//     util.printMonth()
//     res.send('My third api!')
// });

// router.get('/test-me3', function (req, res) {
//     util.getBatchInfo()
//     res.send('My 4th api!')
// });

// router.get('/test-me4', function (req, res) {
//     validator.trim()
//     res.send('My last api!')
// });

module.exports = router;
// adding this comment for no reason