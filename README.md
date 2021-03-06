# Usage

```js
'use strict';

// From Buffer to ArrayBuffer:
const toArrayBuffer = buffer => {
  var arrayBuffer = new ArrayBuffer(buffer.length);
  var view = new Uint8Array(arrayBuffer);
  for (var i = 0; i < buffer.length; ++i) {
    view[i] = buffer[i];
  }
  return arrayBuffer;
}

// From ArrayBuffer to Buffer:
const toBuffer = arrayBuffer => {
  var buffer = Buffer.alloc(arrayBuffer.byteLength);
  var view = new Uint8Array(arrayBuffer);
  for (var i = 0; i < buffer.length; ++i) {
    buffer[i] = view[i];
  }
  return buffer;
}

const fromBufferToHex = buffer => {
  return buffer.toString('hex').replace(/(..)/gi, '$1 ');
}

module.exports = {
  toArrayBuffer,
  toBuffer,
  fromBufferToHex,
};
```

```js
const binary = require('../src');

describe('Binary Operation Basic Testing', () => {
  it('should be working', done => {
    // Using DataView to Fill/Read ArrayBuffer
    const arrayBuffer = new ArrayBuffer(8); // Alloc 8 Bytes
    const dataView = new DataView(arrayBuffer);

    dataView.setInt16(0, 0xff01, true /* littleEndian */); // fill 2 Bytes from index:0
    dataView.setInt16(2, 0xff02, true /* littleEndian */); // fill 2 Bytes from index:2
    dataView.setInt16(6, 0xff04, false /* bigEndian */); // fill 2 Bytes from index:2

    let buffer = binary.toBuffer(arrayBuffer);
    console.log('[Buffer]', buffer); // <Buffer 01 ff 02 ff 00 00 ff 04>
    console.log('[Hex]', binary.fromBufferToHex(buffer)); // 01 ff 02 ff 00 00 ff 04

    let arrayBuffer2 = binary.toArrayBuffer(buffer);
    console.log('[ArrayBuffer]', arrayBuffer2);
    console.log('[Buffer]', binary.toBuffer(arrayBuffer2)); // <Buffer 01 ff 02 ff 00 00 ff 04>

    done();
  });
});
```
