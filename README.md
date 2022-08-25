# bfb64-conv

NPM package for converting types between Blob, File and Base64

## Installation

Install my-project with npm

```bash
  npm install bfb64-conv
```

## Usage/Examples

For ES Modules:

```javascript
import {
  b64toBlob,
  b64toFile,
  blobtoB64,
  blobtoFile,
  filetoB64,
  filetoBlob,
} from "bfb64-conv";
```

For Common JS Modules:

```javascript
var {
  b64toBlob,
  b64toFile,
  blobtoB64,
  blobtoFile,
  filetoB64,
  filetoBlob,
} = require("bfb64-conv");
```

Then, use like below

```javascript
/* converts base 64 to blob */
var contentType = 'image/png';
var base64 =
    'iVBORw0KGgoAAAANSUhE...';

// parameters: base64 string and content type
var blob = b64toBlob(base64, contentType);


/* converts base 64 to file */
var base64 = 'data:image/jpeg;base64,/9j/4AAQSkZJRgAB...'
var fileName = 'converted-file'

// parameters: base64 string and file name
var file = b64ToFile(base64, fileName);


/* converts blob to base 64 */
var blob = new Blob(...);
var base64;

// parameters: blob object and a callback function (optional)
blobtoB64(blob, function (error, b64) {
  if (!error) {
    base64 = b64;
  }
})


/* converts blob to file */
var blob = new Blob(...);

// parameters: blob object and filename string
var file = blobtoFile(blob, 'filename')


/* converts file to base64 */
var file = new File(...);
var base64;

// parameters: file object and a callback function (optional)
filetoB64(file, function (error, b64) {
  if (!error) {
    base64 = b64;
  }
})


/* converts file to blob */
var file = new File(...);

// parameters: file object
var blob = filetoBlob(file)
```

If you find any issue, open a issue or hit a pull request
