
// importing mongoose and Schema
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

// createing our animal model
var ZooAnimalSchema = new Schema(
    {
        animal_id: String,
        animal_type: String,
        animal_description: String,

    });
//exporting our model
module.exports = mongoose.model('ZooAnimal', ZooAnimalSchema);
