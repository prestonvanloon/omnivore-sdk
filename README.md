# omnivore-sdk

## Usage

```javascript
const Omnivore = require('omnivore-sdk');

omnivore('my-omnivore-api-key').then(sdk => {
  sdk.Locations.locations_getAll().then(locations => {
    // Do something with locations!
    console.log(locations);
  }).catch(error => {
    // Handle errors
    console.error(error);
  });
});

```
