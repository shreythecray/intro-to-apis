# Instructions
0. If on repl.it, open preview to view this markdown file
1. Go to index.js and open the shell
2. Run `npm install node-fetch@2` in the shell
3. Replace `ENDPOINT` with `http://api.funtranslations.com/translate/morse?text=Hello%20there`
4. Run the program
5. Try changing the parameters of the endpoint to translate different texts
6. You are currently logging the entire `morse_response`. Update `translation` to only log the morse translation

# Start Code
```
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
```

# Additional Notes:
- Documentation for the morse API: https://api.funtranslations.com/
- Line 1 of the code (below) will only work after you install the node-fetch npm package (step 2)
  - `const fetch = require('node-fetch');`
  - Learn more: https://www.npmjs.com/package/node-fetch
- APIs requests take time to complete. "Async" functions indicate to the program that it must wait until the request is completed before it can move onwards.
