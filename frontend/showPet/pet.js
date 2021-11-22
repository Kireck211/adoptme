async function getDog(id) {
  console.log(id);
  const response = await fetch(BASE_URL + 'pets/' + id);
  if (!!response === false) {
    console.log('No dogs found');
    return;
  }
  const dog = await response.json();
  console.log(dog);
  return dog;
}

function setDog(dog) {
  $('title').text(dog.name);
  $('.img-fluid').attr('src', dog.photos[1].medium);
  $('.name').text(dog.name);
  $('.description').text(dog.description);
  $('.status').text(dog.status);
  $('.size').text(dog.size);
  $('.gender').text(dog.gender);
  $('.age').text(dog.age);
}

function setListeners(id) {
  $('.edit').on('click', function() {
    const parameters = `?${encodeTextForURL('id', id)}&${encodeTextForURL('back', window.location)}`;
    window.location.href = BASE_URL + 'editPet/edit_pet.html' + parameters;
  });
  $('.delete').on('click', async function() {
    const response = await fetch(BASE_URL + 'pets/' + id, {
      method: 'DELETE'
    });
    if (response.ok) window.location.replace(BASE_URL + 'adopt/adopt.html');
  });
}

async function main(){
  const id = qs('id');
  const dog = await getDog(id);
  setDog(dog);
  setListeners(id);
}

$(function() {
  main();
});