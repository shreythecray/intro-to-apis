const fetch = require('node-fetch');

function challenge1() {
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };
  
  fetch('ENDPOINT', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

challenge1()