const fetch = require('node-fetch');

// CHALLENGE 1: translate english to morse

async function translate() {
  const morse_options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };
  
  const morse_response = await fetch('ENDPOINT', morse_options)
  const translation = await morse_response.json();
  console.log(translation)
}

translate()

// CHALLENGE 2: send a notification

const fetch = require('node-fetch');

async function send_notification() {
  const courier_options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };
  
  fetch('ENDPOINT', courier_options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
}

send_notification()
```

// FINAL PROJECT: send a notification with 