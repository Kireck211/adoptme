function addListeners() {
  $('.cancel').on('click', function() {
    window.history.back();
  });
  $('form').on('submit', async function(event) {
    event.preventDefault();

    const $inputs = $('form input');

    let values = {};
    $inputs.each(function() {
      values[this.name] = $(this).val();
    });
    const response = await fetch('http://localhost:3000/pets', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(values)
    });
    if (response.ok) {
      const data = await response.json();
      const {id} = data;
      window.location = 'http://localhost:3000/showPet/pet.html?id=' + id;
    }

  });
}

function main() {
  addListeners();
}

$(function() {
  main();
});