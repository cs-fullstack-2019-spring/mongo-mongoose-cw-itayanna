
//setting up express, the router function, and inporting our model
var express = require('express');
var router = express.Router();
var ZooAnimal = require('../models/zooanimal');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//route to add animal
router.get('/zoowebapi/animal/add/:id/:type/:description', (req, res)=>{

  animalData = {
    animal_id: req.params.id,
    animal_type: req.params.type,
    animal_description: req.params.description,
  };

  ZooAnimal.create(animalData, (error, results)=>{
    if(error){
      return console.log(error)
    }
    else {
      return console.log(results);
    }
  });
  res.send("animal created")
});


// route to find animal
router.get('/zoowebapi/animal/get/:id', (req, res)=>{

    ZooAnimal.find({animal_id: req.params.id}, (error, results)=>{
      if (error) res.send(error);
      else res.send(results);
    });
  });

// route to update animal
router.get('/zoowebapi/animal/update/:id/:type/:description', (req, res)=>{

  ZooAnimal.updateMany({animal_id: req.params.id},{animal_type: req.params.type ,animal_description: req.params.description},(error, results)=>{
    if (error) res.send(error);
    else res.send(results);
  });
});

// route to delete animal
router.get('/zoowebapi/animal/del/:id', (req, res)=>{

  ZooAnimal.deleteOne({id: req.params.age}, (error)=> {
    if (error) return console.log(error);
  });
  res.send('animal deleted from database');
});





// exporting our routes
module.exports = router;
