# Instructions
0. If on repl.it, open preview to view this markdown file
1. Read documentation and review starter code https://www.courier.com/docs/reference/send/message/
2. Install node-fetch to enable using APIs
3. Add API Key from Courier into secrets called `api-key`
4. Paste the starter code into index.js
5. Replace `ENDPOINT` with `https://api.courier.com/send`
6. Update the request `method` to `'POST'`
7. Add a property below `method` and `headers` to authenticate your Courier API `Authorization: "Bearer " + process.env['api-key']`
8. Since this is a POST request, we need to provide Courier with more information about what information or data we are posting. Add the `body` object under the `courier_options` object to include this data:
```
body: JSON.stringify({
      "message": {
        "content": {
          "title": "new subject",
          "body": "hi {{name}}"
        },
        "to": {
          "email": "courier.demos@gmail.com"
        },
        "data": {
          "name": "peter"
        }
      }
    })
```

# Starter Code
```
const fetch = require('node-fetch');

function send_notification() {
  const courier_options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  };
  
  const courier_response = await fetch('ENDPOINT', courier_options)
    
}

send_notification()
```

# Final Code Example
```
async function send_notification() {
  const courier_options = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: "Bearer " + process.env['api-key']
    },
    body: JSON.stringify({
      "message": {
        "content": {
          "title": "new subject",
          "body": "hi {{name}}"
        },
        "to": {
          "email": "courier.demos@gmail.com"
        },
        "data": {
          "name": "peter"
        }
      }
    })
  };
  
  const courier_response = await fetch('https://api.courier.com/send', courier_options)
}

send_notification()
```

