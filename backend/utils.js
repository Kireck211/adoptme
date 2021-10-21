const getImportantProperties = (pets) => pets.map(({id, name, description, status, size, gender, age, url}) =>  ({id, name, description, status, size, gender, age, url}));

module.exports = {getImportantProperties};