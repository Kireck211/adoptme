async function getDog(id) {
  const response = await fetch(BASE_URL + 'pets/' + id);
  if (!!response === false) {
    console.log('No dogs found');
    return;
  }
  const dog = await response.json();
  console.log(dog);
  return dog;
}

function addListeners(id) {
  $('.cancel').on('click', function() {
    const backURL = qs('back');
    window.location.href = backURL;
  });
  $('form').on('submit', async function(event) {
    event.preventDefault();
    const $inputs = $('form input');

    let values = {};
    $inputs.each(function() {
      values[this.name] = $(this).val();
    });
    const response = await fetch(BASE_URL + 'pets/' + id, {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'PUT',
      body: JSON.stringify(values)
    });
    if (response.ok) window.location = BASE_URL + 'showPet/pet.html?id=' + id;
  });
}


function setDog(dog) {
  $('title').text(dog.name);
  $('.name').val(dog.name);
  $('.description').val(dog.description);
  $('.status').val(dog.status);
  $('.size').val(dog.size);
  $('.gender').val(dog.gender);
  $('.age').val(dog.age);
  $('.url').val(dog.photos[1].medium)
}

async function main() {
  const id = qs('id');
  const dog = await getDog(id);
  setDog(dog);
  addListeners(id);
}

$(function() {
  main();
});

