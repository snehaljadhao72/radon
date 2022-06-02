const express = require('express');
//const externalModule = require('./logger')

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

router.get('/hello',function(req,res){
   

    let year = ['JAN','FEB','MARCH','APRIL','MAY','JUNE','JULY','AUGUST','SEPT','OCT','NOV','DEC']
    let _= require("lodash");
    console.log(_.chunk(year,3))
    res.send('loadash installed')
    
    })

    let array =[1,3,5,7,9,11,13,15,17,19.]

    const _ = require('lodash');
     let newArray = _.tail(array);
      
     console.log(newArray);


     let array1=[1,2,3,4,5]
let array2=[1,3,4,6,7]
let array3=[1,3,6,7,9]
let array4=[3,4,6,7,9]
let array5=[1,3,6,7,9]

console.log(_.union(array1,array2,array3,array4,array5))

let movie= [['horror','The Shining'],['drama','Titanic'],['thriller','Shutter Island'],['fantasy','fans Labyrinth']]
console.log(_.fromPairs(movie))

module.exports = router;
// adding this comment for no reason
