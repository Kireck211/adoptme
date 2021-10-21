const router = require('express').Router();
const getImportantProperties = require('../utils').getImportantProperties;
const pets = require('./pets.json');
const petsWithImportantProperties = getImportantProperties(pets);
// path: /pets

router.get('/', (req, res) => {
  // send all the petsWithImportantProperties
});

router.post('/', (req, res) => {
  // add a new pet
});

router.put('/:id', (req, res) => {
  // update a pet
});

router.delete('/:id', (req, res) => {
  // delete a pet
});

module.exports = router;