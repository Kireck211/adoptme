const getImportantProperties = (pets) => pets.map(({name, description, status, size, gender, age, url}) =>  ({name, description, status, size, gender, age, url}));

module.exports = {getImportantProperties};