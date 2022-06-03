const express = require('express');
const router=express.Router();
const films = [ {
    "id": 1,
    "name": "The Shining"
   }, {
    "id": 2,
    "name": "Incendies"
   }, {
    "id": 3,
    "name": "Rang de Basanti"
   }, {
    "id": 4,
    "name": "Finding Nemo"
   }]
   
router.get('/movies', function (req,res){
     const movie=['SPIDERMAN','KRISH','BATMAN','TITANIC','RAAZ','ALONE']
     res.send(movie)
})


router.get('/movies/:indexNumber',function (req,res){
 const num = req.params.indexNumber;
    const movies=["Rang de basanti","The shining", "Lord of the rings", "Batman begins"]
   if (num > movies.length || num === " "){
       res.send("please enter valid index number")
   }
    const film = movies[num]
    res.send(film)


})

router.get('/films',function(req,res){
    res.send(films)
})

router.get('/films/:filmId',function(req,res){
    const num = req.params.filmId;
    for (let i=0; i< films.length;i++){
if (films[i].id == num){
    const newmovie = films[i].name
   return  res.send(newmovie)
}
}
return res.send("No movie exists with this id")
})










































// const myHelper = require('../util/helper')
// const underscore = require('underscore')

// const router = express.Router();

// router.get('/test-me', function (req, res) {
//     myHelper.printDate()
//     myHelper.getCurrentMonth()
//     myHelper.getCohortData()
//     let firstElement = underscore.first(['Sabiha','Akash','Pritesh'])
//     console.log('The first element received from underscope function is '+firstElement)
//     res.send('My first ever api!')
// });

// router.get('/hello', function (req, res) {
   
//     res.send('Hello there!')
// });

// router.get('/candidates', function(req, res){
//     console.log('Query paramters for this request are '+JSON.stringify(req.query))
//     let gender = req.query.gender
//     let state = req.query.state
//     let district = req.query.district
//     console.log('State is '+state)
//     console.log('Gender is '+gender)
//     console.log('District is '+district)
//     let candidates = ['Akash','Suman']
//     res.send(candidates)
// })

// router.get('/candidates/:canidatesName', function(req, res){
//     console.log('The request objects is '+ JSON.stringify(req.params))
//     console.log('Candidates name is '+req.params.canidatesName)
//     res.send('Done')
// })


 module.exports = router;
// // adding this comment for no reason