const atob = require('atob');

function b64toBlob(base64, mime) {
  mime = mime || '';
  var ss = 1024;
  var bc = window.atob(base64);
  var ba = [];

  for (var offset = 0, len = bc.length; offset < len; offset += ss) {
    var sl = bc.slice(offset, offset + ss);

    var byteNumbers = new Array(sl.length);
    for (var i = 0; i < sl.length; i++) {
      byteNumbers[i] = sl.charCodeAt(i);
    }

    var byteArray = new Uint8Array(byteNumbers);

    ba.push(byteArray);
  }
  return new Blob(ba, { type: mime });
}

function b64toFile(base64, filename) {
  var arr = base64.split(','),
    m = arr[0].match(/:(.*?);/)[1],
    bstr = atob(arr[1]),
    n = bstr.length,
    u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], filename, { type: m });
}

function blobtoB64(blob, cb) {
  const rdr = new window.FileReader();
  rdr.readAsDataURL(blob);

  rdr.onloadend = function () {
    cb(null, rdr.result);
  };

  rdr.onerror = function (err) {
    cb(err);
  };

  return rdr;
}

function blobtoFile(blob, filename) {
  return new File([blob], filename);
}

function filetoB64(file, cb) {
  const rdr = new window.FileReader();
  rdr.readAsDataURL(file);

  rdr.onloadend = function () {
    cb(null, rdr.result);
  };

  rdr.onerror = function (err) {
    cb(err);
  };

  return rdr;
}

function filetoBlob(file) {
  return new Blob([file]);
}

module.exports = {
  b64toBlob,
  b64toFile,
  blobtoB64,
  blobtoFile,
  filetoB64,
  filetoBlob
};