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
