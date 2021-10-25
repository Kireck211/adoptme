async function getDogs() {
  let response = await fetch('http://localhost:3000/pets');
  let dogs = await response.json();
  return dogs;
}

function createRow(dog) {
  return `
  <tr>
    <td>${dog.name}</td>
    <td>${dog.description}</td>
    <td>${dog.status}</td>
    <td>${dog.size}</td>
    <td>${dog.gender}</td>
    <td>${dog.age}</td>
  </tr>
  `
}

async function insertDogs(dogs) {
  const $tableBody = $('tbody');
  dogs.forEach(function(dog) {
    $tableBody.append(createRow(dog));
    $tableBody.children().last().data('id', dog.id);
  });
}

async function main() {
  const dogs = await getDogs();
  await insertDogs(dogs);
  $('table').DataTable({
    columnDefs: [
      {targets: [0], searchable: true},
      {targets: [1, 2, 3, 4], searchable: false}
    ]
  });
  $('table').removeClass('loading');
  addListener();
}

function addListener() {
  $('tbody').on('click', function(event) {
    const $tr = $(event.target).closest('tr');
    const id = $tr.data('id');
    window.location.href = 'http://localhost:3000/showPet/pet.html?id=' + id;
  });
  $('.add').on('click', function() {
    window.location.href = 'http://localhost:3000/addPet/add_pet.html';
  });
}

$(function() {
  main();
});