const getImportantProperties = (pets) => {
  return pets.map(function({id, name, description, status, size, gender, age, photos}) { 
    let validPhotos = photos;
    if (typeof validPhotos != 'string') {
      validPhotos = '{}'
    }
    const validJSON = validPhotos.replace(/\'/g, '"');
    return ({id, name, description, status, size, gender, age, photos: JSON.parse(validJSON)})
  });
}

module.exports = {getImportantProperties};