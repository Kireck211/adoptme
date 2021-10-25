const router = require('express').Router();
const getImportantProperties = require('../utils').getImportantProperties;
const pets = require('./pets.json');
const petsWithImportantProperties = getImportantProperties(pets);
// path: /pets

router.get('/', (req, res) => {
  res.send(petsWithImportantProperties);
});

router.post('/', (req, res) => {
  const {body} = req;
  const lastIndex = petsWithImportantProperties.length;
  body.id = petsWithImportantProperties[lastIndex - 1].id + 1;
  body.photos = [,{medium: body.url}];
  delete body.url;
  petsWithImportantProperties.push(body);
  res.send(body);
});

router.put('/:id', (req, res) => {
  const {body} = req;
  const {id} = req.params;

  const index = petsWithImportantProperties.findIndex(pet => pet.id == id);
  if (index === -1) return res.status(404).send('Element not found');

  const pet = petsWithImportantProperties[index];
  pet.name = body.name || pet.name;
  pet.description = body.description || pet.description;
  pet.status = body.status || pet.status;
  pet.size = body.size || pet.size;
  pet.gender = body.gender || pet.gender;
  pet.age = body.age || pet.age;
  pet.photos[1].medium = body.url || pet.photos[1].medium;

  res.send(pet);
});

router.delete('/:id', (req, res) => {
  const {id} = req.params;
  const index = petsWithImportantProperties.findIndex(pet => pet.id == id);
  if (index === -1) return res.status(404).send('Element not found');
  const removed = petsWithImportantProperties.splice(index, 1);
  res.send(removed[0]);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  const pet = petsWithImportantProperties.find(pet => pet.id == id);
  if (pet) {
    return res.send(pet);
  }
  return res.status(404).send('Pet not found');
})

module.exports = router;