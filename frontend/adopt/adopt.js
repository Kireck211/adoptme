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
  });
}

async function main() {
  const dogs = await getDogs();
  await insertDogs(dogs);
  $('table').DataTable();
  $('table').removeClass('loading');
}

$(function() {
  main();
});